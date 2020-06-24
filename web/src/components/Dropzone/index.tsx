import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
    onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
    const [selectedFileUrl, setSelectedFileUril] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUril(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accept: 'image/*'
})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      { selectedFileUrl
      ? <img src={selectedFileUrl} alt="Point Thumbnail" />
      : (
          isDragActive ?
            <p> <FiUpload /> Solte a imagem aqui</p> :          
            <p> <FiUpload /> Arraste a image do estabelecimento até aqui.</p>      

      )
     }
    </div>
  )
}

export default Dropzone;