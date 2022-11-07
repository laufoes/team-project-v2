import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

function Social() {
    return (
        <>
            <Box>
                <TextField
                    id="outlined"
                    focused label="LinkedIn"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    focused label="Github"
                    placeholder="https://github.com/foobar"
                    sx={{ my: 2 }}
                    fullWidth
                />
            </Box>
            <Box
                sx={{ mx: 4, textAlign: 'right' }}
            >
                <Button
                    sx={{ marginTop: 6 }}
                    variant="contained"
                    aria-label="Next page"
                    type="submit"
                    // disabled={isSubmitting}
                    color="secondary"
                    endIcon={<MdKeyboardArrowRight />
                    }>Next</Button>
            </Box>
        </>
    )
}

export default Social
