import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';

test('renders the Schedule component correctly', () => {
  render(<Schedule />);
  expect(screen.getByText('Schedule')).toBeInTheDocument(); // Check if title is displayed
});
import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';
import { UserContext } from '../../../MyContext';

const mockUserData = {
  subBatch: "Manager",
};

test('displays subBatch dropdown for Manager role', () => {
  render(
    <UserContext.Provider value={{ userData: mockUserData }}>
      <Schedule />
    </UserContext.Provider>
  );
  expect(screen.getByPlaceholderText('SubBatch')).toBeInTheDocument();
});
import { render, screen, fireEvent } from '@testing-library/react';
import Schedule from './Schedule';
import { UserContext } from '../../../MyContext';

const mockUserData = {
  subBatch: "Manager",
};

test('opens file upload dialog when upload button is clicked', () => {
  render(
    <UserContext.Provider value={{ userData: mockUserData }}>
      <Schedule />
    </UserContext.Provider>
  );

  const uploadButton = screen.getByText('Upload Excel');
  fireEvent.click(uploadButton);

  expect(screen.getByText('Upload Schedule')).toBeInTheDocument(); // Check if dialog is open
});
import { render, screen, fireEvent } from '@testing-library/react';
import Schedule from './Schedule';

test('updates the file state when a file is selected', () => {
  render(<Schedule />);

  const fileInput = screen.getByLabelText('Browse Files');
  const file = new File(['file content'], 'schedule.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  fireEvent.change(fileInput, { target: { files: [file] } });

  expect(screen.getByText('Selected File: schedule.xlsx')).toBeInTheDocument(); // Ensure the file name is displayed
});
import { render, screen, fireEvent } from '@testing-library/react';
import Schedule from './Schedule';

test('updates the file state when a file is dropped', () => {
  render(<Schedule />);

  const dragArea = screen.getByText(/Drag & Drop to upload File/);
  const file = new File(['file content'], 'schedule.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  fireEvent.drop(dragArea, { dataTransfer: { files: [file] } });

  expect(screen.getByText('Selected File: schedule.xlsx')).toBeInTheDocument(); // Ensure the file name is displayed
});
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Schedule from './Schedule';

jest.mock('axios');

test('fetches schedule data when subBatch changes', async () => {
  const mockScheduleData = [
    {
      subBatch: 'A1',
      routine: [{ details: [{ subject: 'Math', start: '2024-11-17T09:00:00', end: '2024-11-17T10:00:00', zone: 'Room 1' }] }]
    }
  ];
  
  axios.get.mockResolvedValueOnce({ data: mockScheduleData });

  render(<Schedule />);

  // Simulate selecting a subBatch
  fireEvent.change(screen.getByPlaceholderText('SubBatch'), { target: { value: 'A1' } });

  await waitFor(() => {
    expect(screen.getByText('Math')).toBeInTheDocument(); // Ensure event is displayed
  });
});
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Schedule from './Schedule';

jest.mock('axios');

test('uploads file when submit button is clicked', async () => {
  axios.post.mockResolvedValueOnce({ data: 'File uploaded successfully' });

  render(<Schedule />);

  // Open the file upload dialog
  fireEvent.click(screen.getByText('Upload Excel'));

  // Simulate file selection
  const file = new File(['file content'], 'schedule.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  fireEvent.change(screen.getByLabelText('Browse Files'), { target: { files: [file] } });

  // Submit the file
  fireEvent.click(screen.getByText('Submit'));

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalledWith(expect.any(String), expect.any(FormData), expect.objectContaining({ headers: { 'Content-Type': 'multipart/form-data' } }));
    expect(screen.getByText('Selected File: schedule.xlsx')).toBeInTheDocument(); // Ensure file name is shown
  });
});
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Schedule from './Schedule';

jest.mock('axios');

test('displays events on the calendar correctly', async () => {
  const mockEvent = {
    title: 'Math Class',
    start: new Date(2024, 10, 17, 9, 0),
    end: new Date(2024, 10, 17, 10, 0),
    location: 'Room 1'
  };

  axios.get.mockResolvedValueOnce({ data: [{ subBatch: 'A1', routine: [{ details: [mockEvent] }] }] });

  render(<Schedule />);

  await waitFor(() => {
    expect(screen.getByText('Math Class')).toBeInTheDocument(); // Check if event title appears
  });
});
import { render, screen } from '@testing-library/react';
import Schedule from './Schedule';
import axios from 'axios';

jest.mock('axios');

test('handles error in checkToken gracefully', async () => {
  axios.get.mockRejectedValueOnce(new Error('Token request failed'));

  render(<Schedule />);

  // Check if the error is logged (you can mock console.log to verify it)
  console.error = jest.fn();
  
  await render(<Schedule />);
  
  expect(console.error).toHaveBeenCalledWith('Token request failed');
});
