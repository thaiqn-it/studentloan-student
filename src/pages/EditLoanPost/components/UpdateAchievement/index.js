import { Box, Dialog } from '@mui/material'
import DropFileInput from 'components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'

export default function UpdateAchievement(props) {
    const { onClose, open, choseValue, handleUpdateAchieve } = props
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')

    useEffect(() => {
        if (choseValue !== null) {
            setDescription(choseValue.description)
            setUrl(choseValue.imageUrl)
        } else {
            setDescription('')
            setUrl('')
        }
    }, [choseValue])

    const handleClose = () => {
        onClose()
    }

    const onChangeDes = (e) => {
        setDescription(e.target.value)
    }

    const onFileChangeURL = (url, event) => {
        setUrl(url)
    }

    const onDelete = (id) => {
        setUrl('')
    }

    const handleUpdate = (type) => {
        var newItem = {
            ...choseValue,
            description: description,
            imageUrl: url,
            status: type,
        }
        handleUpdateAchieve(newItem)
        onClose()
    }

    return (
        <>
            <Dialog
                onClose={handleClose}
                open={open}
                maxWidth="md"
                scroll="body"
            >
                <Box sx={{ padding: 5, width:"768px" }}>
                    <SuiTypography variant="h5">Tiêu đề</SuiTypography>
                    <SuiInput
                        mt={1}
                        value={description || ''}
                        onChange={onChangeDes}
                    />
                    <Box my={1}>
                        <DropFileInput
                            image={url}
                            flexEnd="flex-start"
                            elementName="achievement"
                            elementId="achievement"
                            onDelete={onDelete}
                            onFileChangeURL={onFileChangeURL}
                        />
                    </Box>
                    {choseValue ? (
                        <Box display="flex" justifyContent="space-between">
                            <SuiButton
                                color="error"
                                onClick={() => handleUpdate('delete')}
                            >
                                Xóa
                            </SuiButton>

                            <SuiButton
                                color="primary"
                                onClick={() => handleUpdate('update')}
                            >
                                Sửa
                            </SuiButton>
                        </Box>
                    ) : (
                        <Box display="flex" justifyContent="space-between">
                            <SuiButton
                                color="primary"
                                onClick={() => handleUpdate('create')}
                            >
                                Tạo
                            </SuiButton>
                        </Box>
                    )}
                </Box>
            </Dialog>
        </>
    )
}
