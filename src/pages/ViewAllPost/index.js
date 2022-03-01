import { Grid, Paper } from '@mui/material'
import React from 'react'

import PostItem from './PostItem'

export default function ViewAllPost() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <PostItem />
            </Grid>
            <Grid item xs={12} md={6}>
                <PostItem />
            </Grid>
        </Grid>
    )
}
