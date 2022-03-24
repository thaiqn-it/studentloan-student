import React, { useRef, useState } from 'react'
import './DropFileZone.css'
import uploadImg from '../../assets/cloud-upload-regular-240.png'
// import { app } from "..//..//utils/Firebase";
import { LinearProgress, Box, CardMedia } from '@mui/material'
import { imageApi } from '../../apis/imageApi'
import SuiProgress from 'components/SuiProgress'

const DropFileInput = (props) => {
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState('')

    const wrapperRef = useRef(null)

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = (e) => {
        const newFile = e.target.files[0]
        if (newFile) {
            connectUploadCloud(newFile)
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

    const connectUploadCloud = async (imageFile) => {
        const formData = new FormData()
        formData.append('file', imageFile)
        await imageApi
            .uploadImageWithProg(formData, singleFileOptions)
            .then((res) => {
                setUrl(res.data.url)
                setProgress(100)
                props.onFileChangeURL(res.data.url)
            })
    }
    return (
        <>
            {progress === 100 ? (
                <Box>
                    <label for="file-input">
                        <CardMedia
                            component="img"
                            image={url}
                            sx={{
                                borderRadius: 1,
                                margin: 0,
                                cursor: 'pointer',
                                maxHeight: { md: 250, lg: 400 },
                            }}
                        ></CardMedia>
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        onChange={onFileDrop}
                        hidden
                    />
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
                        accept="image/*"
                        value=""
                        onChange={onFileDrop}
                    />
                </div>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '300px',
                        marginTop: '1rem',
                        backgroundColor: '#fbfbfa',
                    }}
                >
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <SuiProgress
                            variant="determinate"
                            value={progress}
                            color="primary"
                        />
                    </Box>
                </Box>
            )}
        </>
    )
}

export default DropFileInput
