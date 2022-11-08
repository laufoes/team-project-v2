import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Field, useFormikContext } from 'formik'
import { Persist } from 'formik-persist'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { CertificatesFormProps } from 'types/form'

function Certificates() {
    const { isSubmitting, values, errors, touched } = useFormikContext<CertificatesFormProps>();

    return (
        <>
            <Box
                sx={{ mx: 4, textAlign: 'left' }}
            >
                <Field
                    id="outlined"
                    as={TextField}
                    name="certificates.first"
                    focused label="Certificates"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                    value={values.certificates.first}
                    error={Boolean(errors.certificates?.first) && Boolean(touched.certificates?.first)}
                    helperText={Boolean(touched.certificates?.first) && errors.certificates?.first}
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
                <Field
                    required
                    id="outlined-required"
                    name="teamName"
                    as={TextField}
                    value={values.teamName}
                    focused label="Team Name"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                    error={Boolean(errors.teamName) && Boolean(touched.teamName)}
                    helperText={Boolean(touched.teamName) && errors.teamName}
                />
                <Field
                    required
                    id="outlined-required"
                    name="institution"
                    as={TextField}
                    value={values.institution}
                    focused label="Institution"
                    placeholder="Universidade Federal da Paraíba"
                    sx={{ my: 2 }}
                    fullWidth
                    error={Boolean(errors.institution) && Boolean(touched.institution)}
                    helperText={Boolean(touched.institution) && errors.institution}
                />
                <Field
                    required
                    id="outlined-required"
                    name="graduation"
                    as={TextField}
                    value={values.graduation}
                    focused label="Graduation"
                    placeholder="Ciências da Computação"
                    sx={{ my: 2 }}
                    fullWidth
                    error={Boolean(errors.graduation) && Boolean(touched.graduation)}
                    helperText={Boolean(touched.graduation) && errors.graduation}
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
                    disabled={isSubmitting}
                    color="secondary"
                    endIcon={<MdKeyboardArrowRight />
                    }>Finish</Button>
                    <Persist name="certificates-form" />
            </Box>
        </>
    )
}

export default Certificates
