import { Button, Paper, Typography } from '@mui/material';
import { PageContainer } from 'styles/theme.styles';
import NavTab from 'components/NavTab';
import { MdKeyboardArrowRight } from 'react-icons/md';

function SignUp() {

  return (
    <PageContainer>
        <Paper>
          <Typography variant='h1' sx={{ alignSelf: 'flex-start', mx: 6, my: 1 }}>Team Sign Up</Typography>
          <NavTab />
                <Button
                sx={{ m: 6, alignSelf: 'flex-end', marginBottom: 10 }} 
                variant="contained"
                aria-label="Next page"
                // onClick={() => navigate('/success')}
                endIcon={<MdKeyboardArrowRight />
                }>Next</Button>
        </Paper>
    </PageContainer>
  )
}

export default SignUp
