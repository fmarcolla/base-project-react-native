import axios from 'axios';

/*
**Endereço do Android Studio p/ API http://10.0.2.2
*/

const api = axios.create({
    baseURL: 'http://10.0.2.2:3005/',
});

export default api;