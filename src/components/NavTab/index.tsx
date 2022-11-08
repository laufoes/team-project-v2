import React, { useContext } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContainer } from 'styles/theme.styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Basic from 'components/Form/Basic';
import Social from 'components/Form/Social';
import Certificates from 'components/Form/Certificates';
import { PageContext, PageProps } from 'common/contexts/PageContext';
import { Form, Formik } from 'formik';
import { basicValidationSchema, certificatesValidationSchema, socialValidationSchema } from 'utils/validationSchemas';

function NavTab() {
    const { page, setPage } = useContext<PageProps>(PageContext);
    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setPage(newValue);
    }

    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <TabContext value={page}>
                <TabContainer>
                    <TabList aria-label='Tabs example' onChange={handleChange}
                        sx={{ width: '100%', border: 'none' }}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label='Basic' value='Basic' sx={{ width: '33.3%' }} />
                        <Tab label='Social' value='Social' sx={{ width: '33.3%' }} />
                        <Tab label='Certificates' value='Certificates' sx={{ width: '33.3%' }} />
                    </TabList>
                </TabContainer>
                <TabPanel value='Basic'>
                    <Formik
                        initialValues={{
                            name: '',
                            nickname: '',
                            email: '',
                            phone: '',
                            birthDay: undefined,
                            birthMonth: undefined,
                            birthYear: undefined,
                            acceptTerms: false,
                        }}
                        validationSchema={basicValidationSchema}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >

                        {({ isSubmitting, values, errors, touched }) => (
                            <Form>
                                <Basic />
                            </ Form>
                        )}
                    </Formik>
                </TabPanel>
                <TabPanel value='Social'>
                    <Formik
                        initialValues={{
                            linkedin: '',
                            github: ''
                        }}
                        validationSchema={socialValidationSchema}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >

                        {({ isSubmitting, values, errors, touched }) => (
                            <Form>
                                <Social />
                            </Form>
                        )}
                    </Formik>
                </TabPanel>
                <TabPanel value='Certificates'>
                <Formik
                        initialValues={{
                            certificates: {
                                first: '',
                                second: '',
                                third: '',
                                fourth: '',
                                fifth: ''
                            },
                            teamName: '',
                            institution: '',
                            graduation: '',
                        }}
                        validationSchema={certificatesValidationSchema}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >

                        {({ isSubmitting, values, errors, touched }) => (
                            <Form>
                                <Certificates />
                            </Form>
                        )}
                    </Formik>
                </TabPanel>
            </TabContext>
        </Box>
    )
}

export default NavTab