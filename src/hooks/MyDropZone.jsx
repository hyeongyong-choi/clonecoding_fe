import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import AddPhoto from '../assets/img/AddPhoto.png';
import Button from '../components/elements/Button';
import styled from 'styled-components';

function MyDropzone() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    maxFiles: 5,
    maxfilesexceeded: function (file) {
      this.removeAllFiles();
      this.addFile(file);
    },
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  let inputRef;

  return (
    <Section
      className='container'
      style={{ boxSizing: 'border-box', width: '600px', height: '500px' }}
    >
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{
          width: '100%',
          height: '350px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <input {...getInputProps()} />
        <StImgUpload>
          <FormImg />
          <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
          <Button width='300px' text='컴퓨터에서 선택' />
        </StImgUpload>
      </div>
      <StImgContainer>
        {files &&
          files.map((file, index) => (
            <div key={index}>
              <div
                style={{
                  width: '100px',
                  height: '100px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={file[0].preview}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onLoad={() => {
                    URL.revokeObjectURL(file[0].preview);
                  }}
                />
              </div>
            </div>
          ))}
      </StImgContainer>
    </Section>
  );
}

export default MyDropzone;

const Section = styled.div``;

const StImgUpload = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.5rem;
`;

const FormImg = styled.div`
  width: 140px;
  height: 100px;
  background-image: url(${AddPhoto});
  background-position: center;
  background-size: 100% 100%;
  margin: 0 auto;
`;

const StImgContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  background: #fff;
  scrollbar-width: none;
`;
