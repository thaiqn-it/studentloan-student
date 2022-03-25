import { useEffect, useState } from 'react'
import { paypalApi } from 'apis/paypalApi'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Modal,
    Typography,
} from '@mui/material'
import SuiInput from 'components/SuiInput'
import classes from './TopUp.module.css'
import { transactionApi } from 'apis/transactionApi'
import { PayPalButton } from 'react-paypal-button-v2'

const source = 'https://studentloanfpt.ddns.net'
const TopUpModal = ({ open, onClose, url }) => {
    useEffect(() => {
        window.addEventListener('message', (e) => {
            if (e.origin !== source) return

            onClose(e.data)
        })
    }, [])
    return (
        <Modal open={open}>
            <iframe title="Top Up" id="top-up-modal" href={url} />
        </Modal>
    )
}

export default function TopUp({ open, handleClose, reloadData }) {
    const title = 'Rut Tien'
    const [money, setMoney] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [transaction, setTransaction] = useState()
    const [url, setUrl] = useState()
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await paypalApi.topUp(money)

            handleClose(false)
            const url = res.data
            // await setUrl(url)
            // await setModalOpen(modalOpen)
            // const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            // newWindow.opener.callbacks.push((value) => {
            //     console.log(value)
            // })
            // if (newWindow) newWindow.opener = null
            // window.location.href = url
            reloadData()
        } catch (e) {
            console.log(e)
        }
    }

    const handleModalClose = async (paymentId) => {
        try {
            const data = { ...transaction, paypalTransaction: paymentId }
            const res = await transactionApi.updateTransaction(data)
            if (!res) throw new Error(res)
            setModalOpen(false)
        } catch (e) {}
    }

    const handleTopUpSucces = async (paymentId) => {
        try {
            const data = {
                money,
                type: 'type',
                description: '',
                accountId,
                recipientId: '',
                recipientName: '',
                senderId: '',
                senderName: '',
                transactionFee: '',
                status: '',
                paypalTransaction: paymentId,
            }
            const res = await transactionApi.createTransaction(data)
            if (!res) throw new Error(res)
            setModalOpen(false)
        } catch (e) {}
    }

    return (
        <>
            <TopUpModal
                open={modalOpen}
                src={url}
                handleClose={handleModalClose}
            />
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'sm'}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Box sx={{ height: '200px' }}>
                        <Box className={classes.inputBox}>
                            <Typography
                                variant="caption"
                                className={classes.title}
                            >
                                So tien
                            </Typography>
                            <SuiInput
                                type={'number'}
                                value={money}
                                onChange={(e) => setMoney(e.target.value)}
                                name={'money'}
                            />
                            {/* {error && (
                    <Typography variant="caption" className={classes.error}>
                        {helperText}
                    </Typography>
                )} */}
                        </Box>
                    </Box>
                    <PayPalButton
                        amount="0.01"
                        onSuccess={(details, data) => {
                            console.log(details, data)
                        }}
                        options={{
                            clientId:
                                'AX_lyXzg2GC8Gmc1Bm_XyNhbHuTKyBI1y2fHwiJ9TIjb98scF-hriTxED5CIT-_JPxglh5e7GmLzmiGm',
                        }}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                              purchase_units: [{
                                amount: {
                                  currency_code: "USD",
                                  value: "0.01"
                                }
                              }],
                              // application_context: {
                              //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                              // }
                            });
                          }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Huỷ</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
