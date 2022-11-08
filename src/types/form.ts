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