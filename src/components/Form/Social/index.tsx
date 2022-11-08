import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Field, useFormikContext } from 'formik';
import { Persist } from 'formik-persist';
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { SocialFormProps } from 'types/form';

function Social() {
    const { isSubmitting, values, errors, touched } = useFormikContext<SocialFormProps>();

    return (
        <>
            <Box>
                <Field
                    id="outlined"
                    as={TextField}
                    name="linkedin"
                    focused label="LinkedIn"
                    placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/"
                    sx={{ my: 2 }}
                    fullWidth
                    value={values.linkedin}
                    error={Boolean(errors.linkedin) && Boolean(touched.linkedin)}
                    helperText={Boolean(touched.linkedin) && errors.linkedin}
                />
                <Field
                    required
                    id="outlined-required"
                    as={TextField}
                    name="github"
                    focused label="Github"
                    placeholder="https://github.com/foobar"
                    sx={{ my: 2 }}
                    fullWidth
                    value={values.github}
                    error={Boolean(errors.github) && Boolean(touched.github)}
                    helperText={Boolean(touched.github) && errors.github}
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
                    }>Next</Button>
                    <Persist name="social-form" />
            </Box>
        </>
    )
}

export default Social
