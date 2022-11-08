import * as Yup from 'yup';
import { emailRegex, generateDays, generateMonths, generateYears, urlRegex } from './consts';

export const basicValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('É necessário inserir um nome.'),
    nickname: Yup.string(),
    email: Yup.string()
        .required()
        .matches(emailRegex, 'O email inserido não é valido.'),
    phone: Yup.number(),
    birthDay: Yup.number()
        .required()
        .oneOf(generateDays()),
    birthMonth: Yup.number()
        .required()
        .oneOf(generateMonths()),
    birthYear: Yup.number()
        .required()
        .oneOf(generateYears()),
    acceptTerms: Yup.boolean()
        .required()
        .oneOf([true], 'É necessário concordar com os termos para prosseguir.')
})

export const socialValidationSchema = Yup.object().shape({
    linkedin: Yup.string()
        .matches(urlRegex, 'Insira um endereço válido.'),
    github: Yup.string()
        .required()
        .matches(urlRegex, 'Insira um endereço válido.')
})

export const certificatesValidationSchema = Yup.object().shape({
    certificates: Yup.object({
        first: Yup.string()
            .matches(urlRegex, 'Insira uma url válida.'),
        second: Yup.string()
            .matches(urlRegex, 'Insira uma url válida.'),
        third: Yup.string()
            .matches(urlRegex, 'Insira uma url válida.'),
        fourth: Yup.string()
            .matches(urlRegex, 'Insira uma url válida.'),
        fifth: Yup.string()
            .matches(urlRegex, 'Insira uma url válida.'),
    }),
    teamName: Yup.string()
        .required('Insira o nome da equipe.'),
    institution: Yup.string()
        .required('Insira o nome da instituição de ensino.'),
    graduation: Yup.string()
        .required('Insira o curso superior.'),
})