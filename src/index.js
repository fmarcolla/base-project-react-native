import AuthProvider from './authProvider';
import Root from './root';

const App = () =>  {
    
    return (
        <AuthProvider>
            <Root />
        </AuthProvider>
    );
};

export default App;
