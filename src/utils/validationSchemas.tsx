import * as Yup from 'yup';
import { emailRegex, generateDays, generateMonths, generateYears } from './consts';

export const basicValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('É necessário inserir um nome.'),
    nickname: Yup.string(),
    email: Yup.string()
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