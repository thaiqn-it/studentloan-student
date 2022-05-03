/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState } from 'react'
// prop-types is a library for typechecking of props
import PropTypes from 'prop-types'

// @mui material components
import Icon from '@mui/material/Icon'

// Soft UI Dashboard React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiButton from 'components/SuiButton'

import AttachFileIcon from '@mui/icons-material/AttachFile'
import { Box, CardActionArea } from '@mui/material'

function Transaction({
    transaction,
    color,
    icon,
    name,
    date,
    description,
    value,
    handleClick,
    selected,
    id,
}) {
    return (
        <CardActionArea
            onClick={() => handleClick(id, date)}
            sx={{
                backgroundColor: selected
                    ? 'rgba(232, 232, 232, 0.5)'
                    : 'transparent',
            }}
        >
            <SuiBox key={name} component="li" py={1} pr={2} mb={1}>
                <SuiBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <SuiBox display="flex" alignItems="center">
                        <SuiBox mr={2}>
                            <SuiButton
                                variant="outlined"
                                color={color}
                                size="small"
                                iconOnly
                                circular
                            >
                                <Icon sx={{ fontWeight: 'bold' }}>{icon}</Icon>
                            </SuiButton>
                        </SuiBox>
                        <SuiBox display="flex" flexDirection="column">
                            <SuiTypography
                                variant="body2"
                                fontWeight="bold"
                                gutterBottom
                            >
                                {name}
                            </SuiTypography>
                            <SuiTypography variant="body2" color="text">
                                {description}
                            </SuiTypography>
                        </SuiBox>
                    </SuiBox>
                    <Box
                        sx={{
                            display: 'flex',
                            textAlign: 'right',
                            gap: '30px',
                        }}
                    >
                        <Box sx={{ width: 200 }}>
                            <SuiTypography
                                variant="body2"
                                color={value >= 0 ? 'success' : 'error'}
                                fontWeight="medium"
                                // textGradient
                            >
                                {`${String(value).replace(
                                    /(\d)(?=(\d{3})+$)/g,
                                    '$1,'
                                )} đ`}
                            </SuiTypography>
                        </Box>
                    </Box>
                </SuiBox>
            </SuiBox>
        </CardActionArea>
    )
}

// Typechecking props of the Transaction
Transaction.propTypes = {
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error',
        'light',
        'dark',
    ]).isRequired,
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Transaction
