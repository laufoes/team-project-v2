import React, { useContext } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContainer } from 'styles/theme.styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Basic from 'components/Form/Basic';
import Social from 'components/Form/Social';
import Certificates from 'components/Form/Certificates';
import { PageContext, PageProps } from 'common/contexts/PageContext';

function NavTab () {
    const { page, setPage } = useContext<PageProps>(PageContext);
    
    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setPage(newValue);
    }

    return(
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <TabContext value={page}>
                <TabContainer>
                    <TabList aria-label='Tabs example' onChange={handleChange}
                    sx={{ width: '100%', borderBottom: '1px' }}
                    >
                        <Tab label='Basic' value='Basic' sx={{ width: '33.3%', borderBottom: 2 }} />
                        <Tab label='Social' value='Social' sx={{ width: '33.3%', borderBottom: 2 }} />
                        <Tab label='Certificates' value='Certificates' sx={{ width: '33.3%', borderBottom: 2 }} />
                    </TabList>
                </TabContainer>
                <form>
                    <TabPanel value='Basic'>
                        <Basic />
                    </TabPanel>
                    <TabPanel value='Social'>
                        <Social />
                    </TabPanel>
                    <TabPanel value='Certificates'>
                        <Certificates />
                    </TabPanel>
                </form>
            </TabContext>
        </Box>
    )
}

export default NavTab