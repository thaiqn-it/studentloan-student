import { Backdrop, Box } from '@mui/material'
import React from 'react'

import LoadingLogo from '..//..//assets/loading.svg'

export default function Loading() {
    return (
        <>
            <Backdrop
                open
                sx={{ background: 'rgba(0, 0, 0, 0.03)', zIndex: '9999' }}
            >
                <Box
                    sx={{ display: 'flex' }}
                    height="50vh"
                    position="relative"
                    component="img"
                    src={LoadingLogo}
                />
            </Backdrop>
        </>
    )
}
