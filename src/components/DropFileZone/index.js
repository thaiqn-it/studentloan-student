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
import SuiTypography from 'components/SuiTypography'
// import { Link } from 'react-router-dom'

const DropFileInput = (props) => {
    const {
        elementId,
        elementName,
        onFileChangeURL,
        flexEnd,
        image,
        onDelete,
    } = props

    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState('')

    const wrapperRef = useRef(null)

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = (e) => {
        const newFile = e.target.files[0]
        if (newFile) {
            connectUploadCloud(newFile, e)
        }
    }

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
        formData.append('file', imageFile)
        await imageApi
            .uploadImageWithProg(formData, singleFileOptions)
            .then((res) => {
                setUrl(res.data.url)
                setProgress(100)
                onFileChangeURL(res.data.url, event)
                setProgress(0)
            })
    }

    const handleDelete = () => {
        setUrl('')
        setProgress(0)
        onDelete(elementName)
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
                            width: '100%',
                            // width: 'fit-content',
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
                                    accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
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
                                        accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
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
                            <p>Drag & Drop your files here</p>
                        </div>
                        <input
                            type="file"
                            accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                            value=""
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
                                    variant="determinate"
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
