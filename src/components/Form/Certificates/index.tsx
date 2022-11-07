import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'

function Certificates() {
    return (
        <>
            <Box
                sx={{ mx: 4, textAlign: 'left' }}
            >
                <TextField
                    id="outlined"
                    focused label="Certificates"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                />
                <Box sx={{ textAlign: 'right', marginBottom: 2 }}>
                    <Button
                        sx={{ my: 2 }}
                        variant="contained"
                        aria-label="Add more certificates"
                        startIcon={<AiOutlinePlus />}
                        color="secondary"
                        endIcon={<MdKeyboardArrowRight />
                        }>More</Button>
                </Box>
                <TextField
                    required
                    id="outlined-required"
                    focused label="Team Name"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    focused label="Institution"
                    placeholder="Universidade Federal da Paraíba"
                    sx={{ my: 2 }}
                    fullWidth
                />
                <TextField
                    required
                    id="outlined-required"
                    focused label="Graduation"
                    placeholder="Ciências da Computação"
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
                    }>Finish</Button>
            </Box>
        </>
    )
}

export default Certificates
