import React, { useState } from 'react'
import { Box, Card, Collapse, Divider } from '@mui/material'
import SuiTypography from 'components/SuiTypography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'

export default function AccordionGuide({ title, message }) {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>
            <Card
                sx={{ p: 2, borderRadius: 3, boxShadow: 0, cursor: 'pointer', border: '0.1rem solid #DCDEDD' }}
                onClick={handleClick}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SuiTypography variant="button">{title}</SuiTypography>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </Box>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Divider sx={{ my: 1.5 }} />
                    <SuiTypography variant="h6" fontWeight="regular">
                        {message}
                    </SuiTypography>
                </Collapse>
            </Card>
        </>
    )
}
