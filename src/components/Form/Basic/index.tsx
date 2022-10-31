import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

function Basic() {
    return (
        <Box
            sx={{ mx: 4, textAlign: 'left' }}
        >
            <TextField
                required
                id="outlined-required"
                focused label="Full Name"
                placeholder="Foo Bar"
                sx={{ my: 2 }}
                fullWidth
            />
            <TextField
                id="outlined"
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
                    <TextField
                        required
                        id="outlined-required"
                        focused label="Email"
                        placeholder="foo@bar.com"
                        sx={{ my: 2, width: '100%' }}
                        fullWidth
                    />
                </Grid>
                <Grid item sm={12} md={5}>
                    <TextField
                        id="outlined"
                        focused label="Phone"
                        placeholder="(83) 00000-0000"
                        sx={{ my: 2, width: '100%' }}
                    />
                </Grid>
            </Grid>
            <Typography variant="h2">Birthday*</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <InputLabel id="day-label"  sx={{ fontSize: '16px', textAlign: 'left' }}>Day</InputLabel>
                    <Select
                        labelId="day-label"
                        id="birthday-day"
                        // value={}
                        label="Day"
                        // onChange={handleChange}
                        fullWidth
                        size='small'
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabel id="month-label"  sx={{ fontSize: '16px', textAlign: 'left' }}>Month</InputLabel>
                    <Select
                        labelId="month-label"
                        id="birthday-month"
                        // value={}
                        label="Month"
                        // onChange={handleChange}
                        fullWidth
                        size='small'
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabel id="year-label"  sx={{ fontSize: '16px', textAlign: 'left' }}>Year</InputLabel>
                    <Select
                        labelId="year-label"
                        id="birthday-year"
                        // value={}
                        label="Year"
                        // onChange={handleChange}
                        fullWidth
                        size='small'
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={12} md={3}>
                    <InputLabel id="age-label" sx={{ fontSize: '16px', textAlign: 'left' }}>Age</InputLabel>
                    <Select
                        labelId="age-label"
                        id="user-age"
                        label="Age"
                        disabled
                        fullWidth
                        size='small'
                        // defaultValue={user.age}
                    >
                    </Select>
                </Grid>
            </Grid>
            <FormControl sx={{ marginTop: 2 }}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the terms and privacy" />
            </FormControl>
        </Box>
    )
}

export default Basic
