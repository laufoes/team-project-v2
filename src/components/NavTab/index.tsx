import React, { useContext, useEffect, useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContainer } from 'assets/styles/theme.styles';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Basic from 'components/Form/Basic';
import Social from 'components/Form/Social';
import Certificates from 'components/Form/Certificates';
import { PageContext, PageProps } from 'common/contexts/PageContext';
import { Form, Formik } from 'formik';
import { basicValidationSchema, certificatesValidationSchema, socialValidationSchema } from 'utils/validationSchemas';
import { useNavigate } from 'react-router-dom';

function NavTab() {
    const { page, setPage } = useContext<PageProps>(PageContext);
    const pages = ['Basic', 'Social', 'Certificates'];
    const [steps, setSteps] = useState([ 'Basic' ]);

    const handleChange = (e: React.SyntheticEvent) => {
        const nextStep = e.currentTarget.textContent;
        
       if(steps.find((item) => item === nextStep) === nextStep) {
        setPage(nextStep.toString())
       }
    }

    useEffect(() => {
        setSteps([ ...steps, page ])
    }, [steps, page])

    const navigate = useNavigate();


    return (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
            <TabContext value={page}>
                <TabContainer>
                    <TabList aria-label='Tabs example' onChange={((e) => handleChange(e))}
                        sx={{ width: '100%', border: 'none' }}
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        {pages.map((values, index) => {
                            return <Tab key={index} label={values} value={values} sx={{ width: '33.3%' }} />
                            }
                        )}
                    </TabList>
                </TabContainer>
                <TabPanel value='Basic'>
                    <Formik
                        initialValues={{
                            name: '',
                            nickname: '',
                            email: '',
                            phone: '',
                            birthDay: '',
                            birthMonth: '',
                            birthYear: '',
                            userAge: '',
                            acceptTerms: false,
                        }}
                        validationSchema={basicValidationSchema}

                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                setPage('Social')
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
                                setPage('Certificates');
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
                            certificates: [
                                { certificate: '' },
                            ],
                            teamName: '',
                            institution: '',
                            graduation: '',
                        }}
                        validationSchema={certificatesValidationSchema}

                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                navigate('/success');
                            }, 400);
                            resetForm();
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