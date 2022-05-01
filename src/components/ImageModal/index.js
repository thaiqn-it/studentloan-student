import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { CardMedia, Dialog } from '@mui/material'

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     outline: 'none',
//     '@media (max-width: 1024px)': {
//         maxWidth: '400px',
//     },
// }

export default function ImageModal(props) {
    const { image, isBlur = false } = props
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return (
        <>
            <CardMedia image={image} onClick={handleOpen} {...props} />
            <Dialog onClose={handleClose} open={open} maxWidth="xl" scroll='body'>
                <Box
                    component="img"
                    src={image}
                    borderRadius={1}
                    width="1200px"
                    maxWidth="1200px"
                    onContextMenu="return false;"
                    sx={{
                        '@media (max-width: 1024px)': {
                            maxWidth: '400px',
                        },
                        filter: isBlur ? 'blur(4px)' : 'none',
                    }}
                />
            </Dialog>
        </>
    )
}
