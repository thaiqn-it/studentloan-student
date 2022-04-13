import React, { useState } from 'react'
import { Dialog, Slide, Box, Grid, Divider } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import SuiAvatar from 'components/SuiAvatar'
import SuiButton from 'components/SuiButton'
import OTPBox from 'components/OTPBox'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function Repayment(props) {
    const { open, handleClose, selectedValue } = props
    const [verify, setVerify] = useState(false)

    const handleVerify = () =>{
        setVerify(true)
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                maxWidth="lg"
            >
                {verify ? (
                    <OTPBox />
                ) : (
                    <Box width="800px" p={3}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <SuiTypography>Từ ví</SuiTypography>
                                <Box
                                    component="li"
                                    display="flex"
                                    alignItems="center"
                                    py={1}
                                    mb={1}
                                >
                                    <Box mr={2}>
                                        <SuiAvatar
                                            alt="something here"
                                            variant="rounded"
                                            shadow="md"
                                        />
                                    </Box>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="flex-start"
                                        justifyContent="center"
                                    >
                                        <SuiTypography
                                            variant="button"
                                            fontWeight="medium"
                                        >
                                            Trần Long
                                        </SuiTypography>
                                        <SuiTypography
                                            variant="caption"
                                            color="text"
                                        >
                                            Số dư: 200.000.000
                                        </SuiTypography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SuiTypography variant="h6" fontWeight="medium">
                                    Số tiền
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="h2"
                                        fontWeight="regular"
                                    >
                                        {selectedValue?.total} VND
                                    </SuiTypography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <SuiButton color="secondary" sx={{ mr: 3 }} onClick={handleClose}>
                                Hủy bỏ
                            </SuiButton>
                            <SuiButton color="primary" onClick={handleVerify}>Xác nhận</SuiButton>
                        </Box>
                    </Box>
                )}
            </Dialog>
        </>
    )
}
