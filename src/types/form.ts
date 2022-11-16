export interface BaseFormProps {
    name: string,
    nickname: string,
    email: string,
    phone: string,
    birthDay: number,
    birthMonth: number,
    birthYear: number,
    acceptTerms: boolean,
}

export interface SocialFormProps {
    linkedin: string,
    github: string,
}

export interface CertificatesFormProps {
    certificates: ICertificate[],
    teamName: string,
    institution: string,
    graduation: string,
}

interface ICertificate {
    certificate?: string
}