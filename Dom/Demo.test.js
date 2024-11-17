import React, { useState, useEffect } from 'react';
import './Uploadfile.css';
import { FaCloudUploadAlt } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'sonner';

const url = process.env.REACT_APP_URL;

const Uploadfile = ({ setRender, render }) => {

  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }

  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }

  };


  const Uploaddata = async () => {

    if (!file) {
      console.error("No file selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post(`${url}/api/v1/auth/createbulkuser`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("Upload successful:", response.data);
      toast.success("Users added successfully");
      setFile(null);
      setRender(!render);

    } catch (error) {
      console.error("Error uploading file:", error.response);
      //    toast.error("Can't upload file")
    }
  };

  return (

    <>

      <div

        className={`drag-area `}
        onDragOver={handleDragOver}
        onDrop={handleDrop}

      >

        {file === null ? (

          <>

            <div className='icon'>

              <FaCloudUploadAlt />

            </div>

            <header>Drag & Drop to upload File</header>

            <span>OR</span>
            {/* <button> */}
            <label htmlFor="fileInput" id='BrowseFile'>Browse Files</label>
            {/* </button> */}

            <input

              id="fileInput"
              type="file"
              hidden
              onChange={handleFileChange}

            />

          </>

        ) : (

          <>

            <div className='icon'>
              <FaCloudUploadAlt />
            </div>
            <header>Selected File : {file.name}</header>

          </>

        )}

      </div>

      <button className='user-add' onClick={Uploaddata}>
        Submit
      </button>

    </>

  );

};

export default Uploadfile;

Write possible test cases using jest for above codes