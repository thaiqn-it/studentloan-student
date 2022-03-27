import { Box, Dialog } from '@mui/material'
import DropFileInput from 'components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useState } from 'react'

export default function AddAchievement(props) {
    const { onClose, open, selectedValue } = props
    const [description, setDescription] = useState(selectedValue.description)
    const [url, setUrl] = useState(selectedValue.imageUrl)

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

    return (
        <>
            <Dialog
                onClose={handleClose}
                open={open}
                maxWidth="md"
                height="500px"
            >
                <Box sx={{ padding: 5 }}>
                    <SuiTypography variant="h5">Tiêu đề</SuiTypography>
                    <SuiInput value={description} onChange={onChangeDes} />
                    <Box my={3}>
                        <DropFileInput
                            image={url}
                            elementName={selectedValue.id}
                            elementId={selectedValue.id}
                            onDelete={(id) => onDelete(id)}
                            onFileChangeURL={(url, event) =>
                                onFileChangeURL(url, event)
                            }
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        {selectedValue ? (
                            <SuiButton color="error"> Xóa </SuiButton>
                        ) : null}
                        
                        <SuiButton color="primary">
                            {selectedValue ? 'Sửa' : 'Tạo'}
                        </SuiButton>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}
