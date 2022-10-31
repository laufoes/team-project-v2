import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Social() {
    return (
        <Box>
            <TextField
                required
                id="outlined-"
                label="LinkedIn"
                defaultValue="https://www.linkedin.com/in/foo-bar-3a0560104/"
                sx={{ my: 2 }}
                fullWidth
            />
            <TextField
                required
                id="outlined-required"
                label="Github"
                defaultValue="https://github.com/foobar"
                sx={{ my: 2 }}
                fullWidth
            />
        </Box>
    )
}

export default Social
