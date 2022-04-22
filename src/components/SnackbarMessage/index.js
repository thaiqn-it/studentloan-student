import { Alert, IconButton, Slide, Snackbar } from '@mui/material'
import SuiButton from 'components/SuiButton'
import React from 'react'

import { Box } from '@mui/system'

function SlideTransition(props) {
    return <Slide {...props} direction="left" />
}

export default function SnackbarMessage(props) {
    const { open, snack, onClickClose, action, side } = props
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        onClickClose()
    }

    // const action = (
    //     <React.Fragment>
    //         <Box width="100%" background="primary">
    //             <SuiButton color="white" size="small" variant="text">
    //                 Xác thực
    //             </SuiButton>
    //             <IconButton size="small" aria-label="close" color="inherit">
    //                 <CloseIcon fontSize="small" />
    //             </IconButton>
    //         </Box>
    //     </React.Fragment>
    // )

    return (
        <Snackbar
            ContentProps={{
                classes: {
                    root: {
                        background: 'primary',
                    },
                },
            }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: side ? side : "right" }}
            TransitionComponent={SlideTransition}
            action={action ? action.go : null}
            message={action ? action.message : null}
        >
            {snack ? (
                <Alert
                    onClose={handleClose}
                    severity={snack.color}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snack.message}
                </Alert>
            ) : null}
        </Snackbar>
    )
}
