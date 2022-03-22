import { useRef, useState } from 'react'
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Huỷ</Button>
                    <Button onClick={handleFormSubmit}>Nap</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
