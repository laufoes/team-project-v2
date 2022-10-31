import { createContext, useState, ReactNode } from 'react'

export interface  PageProps {
    page: string,
    setPage: (NewState: string) => void,
}

export interface ContextProps {
    children?: ReactNode
}


export const PageContext = createContext<PageProps>({
    page: 'Basic',
    setPage: () => {}
});

PageContext.displayName = 'Current page context';

export const PageContextProvider = ({ children }: ContextProps) => {
    const [ page, setPage ] = useState<string>('Basic');

    return(
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    )
}