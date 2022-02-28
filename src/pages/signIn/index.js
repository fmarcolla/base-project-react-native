import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { onSignIn } from '../../services/auth';
import {AuthContext} from '../../authProvider';

import {
    Container,
    Logo,
    Input,
    ErrorMessage,
    Button,
    ButtonText,
    SignUpLink,
    SignUpLinkText
} from './styles';

const SignIn = () => {

    const navigation = useNavigation();
    const { setLogged } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // static propTypes = {
    //     navigation: PropTypes.shape({
    //       navigate: PropTypes.func,
    //       dispatch: PropTypes.func,
    //     }).isRequired,
    //   };

    const handleEmailChange = (email) => {
        setEmail(email);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };

    const handleCreateAccountPress = () => {
        // navigation.navigate('SignUp');
        alert('teste');
    };

    const handleSignInPress = async () => {

        if(email.length === 0 || password.length === 0){
            setError('Necessário preencher usuário e senha!');

        }else{
            
            try {
                const response = await api.post('/auth/login', {
                    username: email,
                    password: password
                });

                // setError('Logou');
                
                // const teste = await isSignedIn();
                // console.log(teste);
                // const resetAction = StackActions.reset({
                //     index: 0,
                //     actions: [
                //         NavigationActions.navigate({ routeName: 'Main' }),
                //     ],
                // });

                // this.props.navigation.dispatch(resetAction);
                onSignIn(response.data.access_token).then(() => {
                    // navigation.navigate("Main");
                    
                    setLogged(true);

                }).catch((error) => {
                    // setError('Erro login ' + error);
                    setError('Erro de conexão. Tente novamente!');
                });

            }catch(_err) {
                setError('Login ou senha incorretos!');
            }
        }
    };

    return (
        <Container>
            <StatusBar hidden />
            {/* <Logo source={require('../../images/logos/mini_azul.png')} resizeMode="contain" /> */}

            <Input  
                placeholder="E-mail"
                value={email}
                onChangeText={handleEmailChange}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Input  
                placeholder="Senha"
                value={password}
                onChangeText={handlePasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
            
            {error.length !== 0 && <ErrorMessage>{error}</ErrorMessage>}

            <Button onPress={handleSignInPress}>
                <ButtonText>Entrar</ButtonText>
            </Button>

            <SignUpLink onPress={handleCreateAccountPress}>
                <SignUpLinkText>Criar uma Conta!</SignUpLinkText>
            </SignUpLink>
        </Container>
    );
}

export default SignIn;