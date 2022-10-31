import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContainer } from 'styles/theme.styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Basic from 'components/Form/Basic';
import Social from 'components/Form/Social';
import Certificates from 'components/Form/Certificates.tsx';

function NavTab () {
    const [ value, setValue ] = useState<string>('1');


    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    return(
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <TabContext value={value}>
                <TabContainer>
                    <TabList aria-label='Tabs example' onChange={handleChange}
                    sx={{ width: '100%', borderBottom: '1px' }}
                    >
                        <Tab label='Basic' value='1' sx={{ width: '33.3%', borderBottom: 2 }} />
                        <Tab label='Social' value='2' sx={{ width: '33.3%', borderBottom: 2 }} />
                        <Tab label='Certificates' value='3' sx={{ width: '33.3%', borderBottom: 2 }} />
                    </TabList>
                </TabContainer>
                <form>
                    <TabPanel value='1'>
                        <Basic />
                    </TabPanel>
                    <TabPanel value='2'>
                        <Social />
                    </TabPanel>
                    <TabPanel value='3'>
                        <Certificates />
                    </TabPanel>
                </form>
            </TabContext>
        </Box>
    )
}

export default NavTab