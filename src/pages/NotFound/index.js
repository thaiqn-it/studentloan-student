import React from 'react'
import SuiTypography from 'components/SuiTypography'

import NotFoundImage from '../../assets/undraw_page_not_found_re_e9o6.svg'
import { Box, Link } from '@mui/material'
import { useHistory } from 'react-router-dom'

export default function NotFound(props) {
    const history = useHistory()
    const { title } = props
    return (
        <>
            <Box sx={{ mt: { md: '50%', xs: '100%' } }}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src={NotFoundImage}
                        sx={{
                            width: '50%',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    />
                    <SuiTypography
                        variant="h3"
                        textTransform="uppercase"
                        align="center"
                        color="black"
                        mt={5}
                    >
                        {title || 'Page Not Found'}
                    </SuiTypography>
                    <Box sx={{ textAlign: 'center', mt: 5 }}>
                        {title ? (
                            <Link
                                underline="hover"
                                onClick={() => {
                                    history.goBack()
                                }}
                                sx={{ cursor: 'pointer' }}
                            >
                                Quay lại
                            </Link>
                        ) : (
                            <Link href="/dashboard" underline="hover">
                                Trang chủ
                            </Link>
                        )}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
