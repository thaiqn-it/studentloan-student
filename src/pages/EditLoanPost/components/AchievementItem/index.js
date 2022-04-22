import { Box, Divider } from '@mui/material'
import SuiInput from 'components/SuiInput'
import React from 'react'

import ImageCard from '../../../../components/ImageCard'
import EditIcon from '@mui/icons-material/Edit'

export default function AchievementItem(props) {
    var {item, onClickItem} = props
    const { id, studentId, description, imageUrl, status, createAt, updateAt } = item

    const handleClickOpen = () => {
        onClickItem(item)
    }

    return (
        <>
            <Box sx={{ marginBottom: 5 }} key={id}>
                <SuiInput
                    value={description}
                    disabled
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
                <Box mt={1} mb={3}>
                    <ImageCard image={imageUrl} />
                </Box>
                <Divider />
            </Box>
        </>
    )
}
