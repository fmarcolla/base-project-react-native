import React, {useEffect, useState, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PublicRoutes, AuthRoutes } from './routes';
import { isSignedIn } from "./services/auth";
import { AuthContext } from './authProvider';

import LoadPage from "./pages/loadPage";

const Root = () =>  {
    const { isLogged, setLogged } = useContext(AuthContext);
    const [isLoading, setLoad] = useState(true);
    
    useEffect(async () => {
        isSignedIn().then((val) => {
            
            if(val){
                setLogged(true);
                
            }else{
                setLogged(false);
            }

            setLoad(false);
        });
    }, []);

    if(isLoading){
        return (
            <LoadPage />
        );
    }
    
    return (
        <NavigationContainer>
            {
                isLogged ? ( <AuthRoutes /> )  :  ( <PublicRoutes /> )
            }
        </NavigationContainer>
    );
};

export default Root;
