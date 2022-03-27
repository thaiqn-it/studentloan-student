import { Box, Divider } from '@mui/material'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'
import React, { useEffect, useState } from 'react'

import AddAchievement from '../AddAchievement'

import ImageCard from '../../../../components/ImageCard'
import EditIcon from '@mui/icons-material/Edit'
import DropFileInput from 'components/DropFileZone'

export default function AchievementItem(props) {
    const { id, studentId, description, imageUrl, status, createAt, updateAt } =
        props

    const [selectedValue, setSelectedValue] = useState(props)
    const [des, setDes] = useState(description)
    const [imageChange, setImageChange] = useState(imageUrl)

    const [isDisable, setIsDisable] = useState(true)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setIsDisable(false)
        console.log('Trye')
    }

    const handleChangeDes = (e) => {
        setDes(e.target.value)
    }

    const onDelete = (id) => {
        setImageChange('')
    }

    const onFileChangeURL = (url, event) => {
        setImageChange(url)
    }

    return (
        <>
            <Box sx={{ marginBottom: 5 }} id={id}>
                <SuiInput
                    value={des}
                    disabled={isDisable}
                    onChange={handleChangeDes}
                    icon={{
                        component: (
                            <EditIcon
                                size="small"
                                sx={{ cursor: 'pointer' }}
                                onClick={handleClickOpen}
                            />
                        ),
                        direction: 'right',
                    }}
                />
                <Box mt={1} mb={1}>
                    <DropFileInput
                        image={imageChange}
                        update={isDisable}
                        onDelete={onDelete}
                        elementName={imageUrl}
                        elementId={id}
                        onFileChangeURL={(url, event) =>
                            onFileChangeURL(url, event)
                        }
                    />
                </Box>

                <Box display="flex" justifyContent="space-between" mb={3}>
                    {isDisable ? null : (
                        <>
                            <SuiButton color="primary">Sửa</SuiButton>
                            <SuiButton color="error">Xóa</SuiButton>
                        </>
                    )}
                </Box>

                <Divider />
            </Box>
        </>
    )
}
