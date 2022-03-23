import React, { useRef, useState } from 'react'
import './DropFileZone.css'
import uploadImg from '../../assets/cloud-upload-regular-240.png'
// import { app } from "..//..//utils/Firebase";
import { LinearProgress, Box, CardMedia } from '@mui/material'

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
            connectFirebase(newFile)
        }
        const localUrl = URL.createObjectURL(newFile)
        setUrl(localUrl)
        props.onFileChangeURL(localUrl)
    }

    const connectFirebase = (image) => {
        const imageName = new Date().getTime() + '-' + image.name

        // const uploadTask = app.storage().ref(`images/${imageName}`).put(image);
        // uploadTask.on(
        //   "state_changed",
        //   (snapshot) => {
        //     const progress = Math.round(
        //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //     );
        //     setProgress(progress);
        //   },
        //   (error) => {
        //     console.log(error);
        //   },
        //   () => {
        //     app
        //       .storage()
        //       .ref("images")
        //       .child(imageName)
        //       .getDownloadURL()
        //       .then((newUrl) => {
        //         setUrl(newUrl);
        //         props.onFileChangeURL(newUrl);
        //       });
        //   }
        // );
    }

    if (progress === 0 || progress === 100) {
        return (
            <>
                {url ? (
                    <Box>
                        <label for="file-input">
                            <CardMedia
                                component="img"
                                image={url}
                                height={300}
                                sx={{ borderRadius: 1, margin: 0, cursor:"pointer" }}
                            ></CardMedia>
                        </label>
                        <input
                            type="file"
                            id="file-input"
                            onChange={onFileDrop}
                            hidden
                        />
                    </Box>
                ) : (
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
                )}
            </>
        )
    } else {
        return (
            <>
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
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                        />
                    </Box>
                </Box>
            </>
        )
        // }
    }
}

export default DropFileInput
