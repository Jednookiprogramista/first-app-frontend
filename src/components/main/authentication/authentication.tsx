import { createContext, useEffect, useState, ReactNode } from "react";

interface User {
    id: number;
    name: string;
    profilePicture: string;
}

export interface AuthenticationContextType {
    currUser: User | null;
    login: () => void;
}

export const Authentication = createContext<AuthenticationContextType>({
    currUser: null,
    login: () => {}
});

interface AuthenticationProviderProps {
    children: ReactNode;
}

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
    const [currUser, setCurrentUser] = useState<User | null>(
        JSON.parse(localStorage.getItem("user") ?? "null")
    );

    const login = () => {
        //TODO
        setCurrentUser({
            id: 1,
            name: "Bruno Braghieri",
            profilePicture:
                "https://avatars.githubusercontent.com/u/98560465?s=400&u=232ddfdf7573f8dd2d04c9f78a49c7b9fd930768&v=4",
        });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currUser));
    }, [currUser]);

    return (
        <Authentication.Provider value={{ currUser, login }}>
            {children}
        </Authentication.Provider>
    );
};
