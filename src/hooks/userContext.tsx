import React, { createContext } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../api/users';

type Props = {
    children: React.ReactNode;
};

interface UserContext {
    data: any;
    isLoading: boolean;
    isError: boolean;
}

export const UserContext = createContext<UserContext>({
    data: null,
    isLoading: false,
    isError: false,
});


const UserContextProvider = ({ children }: Props) => {
    const { data, isLoading, isError } = useQuery('users', getUsers);

    return (
        <UserContext.Provider value={{ data, isLoading, isError }}>
            {children}
        </UserContext.Provider>
    );
};



export default UserContextProvider;