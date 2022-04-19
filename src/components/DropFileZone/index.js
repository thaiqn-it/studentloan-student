import React, { useEffect, useRef, useState } from 'react'
import './DropFileZone.css'
import uploadImg from '../../assets/cloud-upload-regular-240.png'
// import { app } from "..//..//utils/Firebase";
import { Box, IconButton, Link } from '@mui/material'
import { imageApi } from '../../apis/imageApi'
import SuiProgress from 'components/SuiProgress'

import DeleteIcon from '@mui/icons-material/Delete'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import ImageModal from 'components/ImageModal'
// import { Link } from 'react-router-dom'

const DropFileInput = (props) => {
    const {
        elementId,
        elementName,
        onFileChangeURL,
        flexEnd,
        image = '',
        onDelete,
    } = props

    const [progress, setProgress] = useState(0)

    const wrapperRef = useRef(null)

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = (e) => {
        const newFile = e.target.files
        if (newFile && isValidInputFiles(newFile)) {
            connectUploadCloud(newFile, e)
        }
    }

    const isValidInputFiles = (files) => {
        var flag = true;
        if (files) {
          for (var i = 0; i < files.length; i++) {
            if (
              files[i].type !== "application/pdf" &&
              files[i].type !== "image/png" &&
              files[i].type !== "image/jpeg"
            ) {
              flag = false;
            }
          }
        }
    
        return flag;
      };

    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent
            const percentage = Math.floor(
                ((loaded / 1000) * 100) / (total / 1000)
            )
            setProgress(percentage - 10)
        },
    }

    const connectUploadCloud = async (imageFile, event) => {
        setProgress(1)
        const formData = new FormData()
        for (let i = 0; i < imageFile.length; i++) {
            formData.append(`file`, imageFile[i])
        }
        await imageApi
            .uploadImageWithProg(formData, singleFileOptions)
            .then((res) => {
                setProgress(100)
                onFileChangeURL(res.data.url, event)
                setProgress(0)
            })
            .catch((err) => {
                setProgress(0)
            })
    }

    const handleDelete = () => {
        setProgress(0)
        onDelete(elementId)
    }

    if (image !== '' && progress === 0) {
        return (
            <>
                <Box display="flex" justifyContent={flexEnd || 'flex-end'}>
                    <Box
                        sx={{
                            px: 1.2,
                            pt: 1.2,
                            boxShadow: '0 2px 6px 0 rgb(0 0 0 / 17%)',
                            // width: '100%',
                            width: 'fit-content',
                            // width: '100%',
                        }}
                    >
                        {image.indexOf('.pdf') !== -1 ? (
                            <iframe
                                src={image}
                                style={{
                                    width: '100%',
                                    height: '360px',
                                    border: 'none',
                                }}
                            ></iframe>
                        ) : (
                            <ImageModal
                                component="img"
                                image={image}
                                sx={{
                                    borderRadius: 0,
                                    margin: 0,
                                    cursor: 'pointer',
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        )}

                        <>
                            <IconButton
                                aria-label="fileuploan"
                                component="span"
                                size="medium"
                                onClick={handleDelete}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            <label htmlFor={elementId}>
                                <input
                                    type="file"
                                    accept="image/jpeg,image/png,application/pdf"
                                    id={elementId}
                                    name={elementName}
                                    onChange={onFileDrop}
                                    hidden
                                />
                                <IconButton
                                    aria-label="fileuploan"
                                    component="span"
                                    size="medium"
                                >
                                    <FileUploadIcon fontSize="inherit" />
                                </IconButton>
                            </label>
                        </>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                {progress === 100 ? (
                    <Box display="flex" justifyContent={flexEnd || 'flex-end'}>
                        <Box
                            sx={{
                                px: 1.2,
                                pt: 1.2,
                                // pb: 4,
                                boxShadow: '0 2px 6px 0 rgb(0 0 0 / 17%)',
                                width: 'fit-content',
                            }}
                        >
                            {image.indexOf('.pdf') !== -1 ? (
                                <iframe
                                    src={image}
                                    style={{
                                        width: '100%',
                                        height: '360px',
                                        border: 'none',
                                    }}
                                ></iframe>
                            ) : (
                                <ImageModal
                                    component="img"
                                    image={image}
                                    sx={{
                                        borderRadius: 0,
                                        margin: 0,
                                        cursor: 'pointer',
                                        maxWidth: '100%',
                                        height: 'auto',
                                    }}
                                />
                            )}
                            <>
                                <IconButton
                                    aria-label="fileuploan"
                                    component="span"
                                    size="medium"
                                    onClick={handleDelete}
                                >
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                                <label htmlFor={elementId}>
                                    <input
                                        type="file"
                                        accept="image/jpeg,image/png,application/pdf"
                                        id={elementId}
                                        name={elementName}
                                        onChange={onFileDrop}
                                        hidden
                                    />
                                    <IconButton
                                        aria-label="fileuploan"
                                        component="span"
                                        size="medium"
                                    >
                                        <FileUploadIcon fontSize="inherit" />
                                    </IconButton>
                                </label>
                            </>
                        </Box>
                    </Box>
                ) : progress === 0 ? (
                    <div
                        ref={wrapperRef}
                        className="drop-file-input"
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                    >
                        <div className="drop-file-input__label">
                            <img src={uploadImg} alt="" />
                            <p>Kéo hoặc thả tệp của bạn vào đây</p>
                        </div>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,application/pdf"
                            id={elementId}
                            name={elementName}
                            onChange={onFileDrop}
                        />
                    </div>
                ) : (
                    <Box display="flex" flexDirection="column">
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '300px',
                                marginTop: '1rem',
                                backgroundColor: '#fbfbfa',
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    mr: 1,
                                }}
                            >
                                <SuiProgress
                                    variant="contained"
                                    value={progress}
                                    color="primary"
                                />
                            </Box>
                        </Box>
                    </Box>
                )}
            </>
        )
    }
}

export default DropFileInput
