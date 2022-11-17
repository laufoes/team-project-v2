import { Button, Card, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PageContainer } from 'assets/styles/theme.styles';
import UserPic from '../assets/images/personal-info.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import { Box } from '@mui/system';

function SuccessPage() {
    const navigate = useNavigate();

    const basicFormInfo = JSON.parse(localStorage.getItem('basic-form') || '{}');
    const socialFormInfo = JSON.parse(localStorage.getItem('social-form') || '{}');
    const certificatesFormInfo = JSON.parse(localStorage.getItem('certificates-form') || '{}');

    const formInfo = {
        ...basicFormInfo,
        ...socialFormInfo,
        ...certificatesFormInfo
    }
    const { values } = formInfo;
    const { certificates } = values
    console.log(values)

    return (
        <PageContainer>
            <Paper sx={{
                height: 'fit-content',
                minHeight: 700,
                width: {
                    xs: '90%',
                    sm: 550,
                    md: 617,
                },
                px: 6,
                py: 4
            }}
            >
                <Typography variant='h1' sx={{ my: 1, alignSelf: 'flex-start' }}>Team Sign Up</Typography>
                <Typography variant='h3' sx={{ alignSelf: 'flex-start' }}>Current members</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-end', marginBottom: 8 }}>
                    <img
                        src={UserPic} alt="User information"
                        width={250}
                        height='auto'
                    />
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        p: 2,
                        marginTop: 2,
                        mx: 2
                    }}>
                        <List>
                            <>
                                <ListItem>
                                    <ListItemText primary="Full Name:" secondary={values.name} />
                                </ListItem>
                                {values.nickname ?
                                    <ListItem>
                                        <ListItemText primary="Nickname:" secondary={values.nickname} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Email:" secondary={values.email} />
                                </ListItem>
                                {values.phone ?
                                    <ListItem>
                                        <ListItemText primary="Phone:" secondary={values.phone} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Birthdate:" secondary={`${values.birthDay} / ${values.birthMonth} / ${values.birthYear}`} />
                                </ListItem>
                                {values.lindekin ?
                                    <ListItem>
                                        <ListItemText primary="LindekIn:" secondary={values.linkedin} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Github:" secondary={values.github} />
                                </ListItem>
                                {certificates ? certificates.forEach((key: number) => {
                                    <ListItem>
                                        <ListItemText primary="Certificate:" secondary={certificates[key]} />
                                    </ListItem>

                                }
                                ) : ''}
                                <ListItem>
                                    <ListItemText primary="Team Name:" secondary={values.teamName} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Institution:" secondary={values.institution} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Graduation:" secondary={values.graduation} />
                                </ListItem>
                            </>
                        </List>
                    </Card>
                </Box>
                <Button
                    sx={{ marginTop: 4 }}
                    variant="contained"
                    aria-label="Add more users"
                    color="secondary"
                    endIcon={<AiOutlinePlus />}
                    onClick={() => navigate('/')}
                //limpar campos dos formularios
                >
                    Register new member
                </Button>
            </Paper>
        </PageContainer>
    )
}

export default SuccessPage
