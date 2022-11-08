import { Box, Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BaseFormProps } from 'types/form';
import { generateDays, generateMonths, generateYears } from 'utils/consts';
import { Persist } from 'formik-persist';

function Basic() {
    const [userAge, setUserAge] = useState(0);
    const { values, isSubmitting, errors, touched } = useFormikContext<BaseFormProps>();

    function calculateAge(year: number, month: number, day: number) {
        const todaysDate = new Date();
        const birthdate = new Date(year, (month + 1), day)
        let age = todaysDate.getFullYear() - birthdate.getFullYear()

        if (todaysDate > birthdate) {
            setUserAge(age)
        } else {
            setUserAge((age - 1))
        }
    }

    useEffect(() => {
        calculateAge(values.birthYear, values.birthMonth, values.birthDay)
    }, [ values.birthYear, values.birthMonth, values.birthDay ])

    return (
        <>
            <Box
                sx={{ mx: 4, textAlign: 'left' }}
            >
                <Field
                    required
                    as={TextField}
                    id="outlined-required"
                    focused label="Full Name"
                    placeholder="Foo Bar"
                    name="name"
                    sx={{ my: 2 }}
                    fullWidth
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                />
                <Field
                    id="outlined"
                    as={TextField}
                    name="nickname"
                    focused label="Nickname"
                    placeholder="Juanito"
                    sx={{ my: 2 }}
                    fullWidth
                />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item sm={12} md={7}>
                        <Field
                            required
                            as={TextField}
                            id="outlined-required"
                            name="email"
                            focused label="Email"
                            placeholder="foo@bar.com"
                            sx={{ my: 2, width: '100%' }}
                            fullWidth
                            error={Boolean(errors.email) && Boolean(touched.email)}
                            helperText={Boolean(touched.email) && errors.email}
                        />
                    </Grid>
                    <Grid item sm={12} md={5}>
                        <Field
                            as={TextField}
                            id="outlined"
                            name="phone"
                            focused label="Phone"
                            placeholder="(83) 00000-0000"
                            sx={{ my: 2, width: '100%' }}
                        />
                        <ErrorMessage name="phone" component="div" />
                    </Grid>
                </Grid>
                <Typography variant="h2">Birthday*</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <InputLabel id="day-label" sx={{ fontSize: '16px', textAlign: 'left' }}>Day</InputLabel>
                        <Field
                            as={Select}
                            labelId="day-label"
                            id="birthday-day"
                            name="birthDay"
                            value={values.birthDay}
                            label="Day"
                            // onChange={handleChange}
                            fullWidth
                            size='small'
                            error={Boolean(errors.birthDay) && Boolean(touched.birthDay)}
                            helperText={Boolean(touched.birthDay) && errors.birthDay}
                        >
                            {generateDays().map(
                                (day) =>
                                    <MenuItem value={day} key={day}>{day}</MenuItem>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabel id="month-label" sx={{ fontSize: '16px', textAlign: 'left' }}>Month</InputLabel>
                        <Field
                            as={Select}
                            labelId="month-label"
                            id="birthday-month"
                            name="birthMonth"
                            value={values.birthMonth}
                            label="Month"
                            // onChange={handleChange}
                            fullWidth
                            size='small'
                            error={Boolean(errors.birthMonth) && Boolean(touched.birthMonth)}
                            helperText={Boolean(touched.birthMonth) && errors.birthMonth}
                        >
                            {generateMonths().map(
                                (month) =>
                                    <MenuItem value={month} key={month}>{month}</MenuItem>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabel id="year-label" sx={{ fontSize: '16px', textAlign: 'left' }}>Year</InputLabel>
                        <Field
                            as={Select}
                            labelId="year-label"
                            name="birthYear"
                            id="birthday-year"
                            value={values.birthYear}
                            label="Year"
                            fullWidth
                            size='small'
                            error={Boolean(errors.birthYear) && Boolean(touched.birthYear)}
                            helperText={Boolean(touched.birthYear) && errors.birthYear}
                        >
                            {generateYears().map(
                                (year) =>
                                    <MenuItem value={year} key={year}>{year}</MenuItem>
                            )}
                        </Field>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabel id="age-label" sx={{ fontSize: '16px', textAlign: 'left' }}>Age</InputLabel>
                        <Field
                            as={Select}
                            labelId="age-label"
                            id="user-age"
                            label="Age"
                            disabled
                            fullWidth
                            size='small'
                            displayEmpty={true}
                            value={userAge}
                        >
                            <MenuItem value={userAge}>{userAge}</MenuItem>
                        </Field>
                    </Grid>
                </Grid>
                <FormControl 
                    sx={{ marginTop: 2 }}
                    error={Boolean(errors.acceptTerms)}
                >
                    <FormControlLabel control=
                        { <Field
                             as={Checkbox} 
                             color="secondary"
                             name="acceptTerms" /> 
                        }
                        label="I accept the terms and privacy"
                    />
                    {errors.acceptTerms ? <Typography variant="body2">{errors.acceptTerms}</Typography> : ''}

                </FormControl>
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
                    <Persist name="basic-form" />
            </Box>
        </>
    )
}

export default Basic
