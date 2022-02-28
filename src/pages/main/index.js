import React, { useContext } from 'react';

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { onSignOut } from '../../services/auth';
import { AuthContext } from '../../authProvider';
// import styles from './styles';


const Main = () => {
  const navigation = useNavigation();
  const { setLogged } = useContext(AuthContext);

  const logout = () => {
     
    onSignOut().then(() => {
      // navigation.navigate('SignIn');
      setLogged(false);
    });
  };

  return (
    <Button onPress={logout} title="Sair">
    </Button>
  )
};

export default Main;