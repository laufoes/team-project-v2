import { Button, Card, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from 'assets/styles/theme.styles';
import UserPic from '../assets/images/personal-info.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import { Box } from '@mui/system';

function SuccessPage() {
    const navigate = useNavigate();
    
    const basicFormInfo = JSON.parse(localStorage.getItem('basic-form') || '{}');
    const socialFormInfo = JSON.parse(localStorage.getItem('social-form') || '{}');
    const certificatesFormInfo = JSON.parse(localStorage.getItem('certificates') || '{}');

    const formInfo = {
        ...basicFormInfo.values, 
        ...socialFormInfo.values, 
        ...certificatesFormInfo.values
    }

    const { 
        birthDay,
        birthMonth,
        birthYear, 
        email, 
        github, 
        graduation, 
        institution, 
        linkedin, 
        name, 
        nickname, 
        phone, 
        teamName 
    } = formInfo
 
    function registerNewMember() {
        window.localStorage.clear()
        navigate('/')
    }

    return(
    <PageContainer>
            <Paper sx={{
                height: 'fit-content',
                minHeight: 700,
                marginTop: '5%',
                marginBottom: '5%',
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
                <Typography variant='h3' sx={{ alignSelf: 'flex-start' }}>You have been successfuly registered!</Typography>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row-reverse' }, alignItems: { sm: 'center', md: 'flex-end', justifyContent: 'center' }, marginBottom: 4, px: 2 }}>
                    <img
                        src={UserPic} alt="User information"
                        width='40%'
                        height='auto'
                    />
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        p: 2,
                        mx: 2,
                        my: 2
                    }}>
                        <List>
                            <>
                                <ListItem>
                                    <ListItemText primary="Full Name:" secondary={name} />
                                </ListItem>
                                {nickname ?
                                    <ListItem>
                                        <ListItemText primary="Nickname:" secondary={nickname} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Email:" secondary={email} />
                                </ListItem>
                                {phone ?
                                    <ListItem>
                                        <ListItemText primary="Phone:" secondary={phone} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Birthdate:" secondary={`${birthDay} / ${birthMonth} / ${birthYear}`} />
                                </ListItem>
                                {linkedin ?
                                    <ListItem>
                                        <ListItemText primary="LindekIn:" secondary={linkedin} />
                                    </ListItem> : ''
                                }
                                <ListItem>
                                    <ListItemText primary="Github:" secondary={github} />
                                </ListItem>

                           
                                { formInfo.certificates.length !== 0 ? formInfo.certificates.map((item: any, index: number) => 
                                <ListItem key={index}>
                                    <ListItemText primary={`Certificate no. ${index + 1}`} secondary={item.certificate} />
                                </ListItem>) : ''}

                                <ListItem>
                                    <ListItemText primary="Team Name:" secondary={teamName} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Institution:" secondary={institution} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Graduation:" secondary={graduation} />
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
                    onClick={registerNewMember}
                >
                    Register new team member
                </Button>
            </Paper>
        </PageContainer>
    )
}

export default SuccessPage
