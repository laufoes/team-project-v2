import { Paper, Typography } from '@mui/material';
import { PageContainer } from 'styles/theme.styles';
import NavTab from 'components/NavTab';
import { PageContextProvider } from 'common/contexts/PageContext';

function SignUp() {

  return (
    <PageContextProvider>
      <PageContainer>
          <Paper sx={{ height: 'fit-content', minHeight: 700, width: {
            xs: '90%',
            sm: 550,
            md: 617,
          } }}>
            <Typography variant='h1' sx={{ alignSelf: 'flex-start', mx: 6, my: 1 }}>Team Sign Up</Typography>
            <NavTab />
          </Paper>
      </PageContainer>
    </PageContextProvider>
  )
}

export default SignUp
