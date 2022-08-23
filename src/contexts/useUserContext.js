import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    var CryptoJS = require("crypto-js");

    useEffect(() => {
        const handleCookies = async () => {
            const userCookie = await Cookies.get('user');

            Cookies.raw = true

            if(userCookie !== undefined) {
                var bytes = CryptoJS.AES.decrypt(userCookie, process.env.REACT_APP_CRYPTO_KEY);
                const retrievedUser = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                setUser(retrievedUser);
    
                api.defaults.headers.common[`Authorization`] = retrievedUser.token;
            }
            return userCookie
        };

        handleCookies();

    }, [CryptoJS])

    const sign_out = async () => {
        if (window.confirm("Você deseja sair de sua conta?")){
            Cookies.remove('user')
            navigate('/')
        }
    }

    const login = async ({email, password}) => {
        try{
            const response = await api.post('login', {
                email,
                password
            });
            console.log(response)
            if(response.data){
                setUser({...response.data.user})
                var encrypted = CryptoJS.AES.encrypt(JSON.stringify({...response.data.user}), process.env.REACT_APP_CRYPTO_KEY).toString();
                Cookies.set('user', encrypted, {expires: 1});
                navigate('/')
                api.defaults.headers.common['Authorization'] = response.data.token
            }
        }catch(e){
            console.log(e)
            alert('Não conseguimos efetuar seu login. Por favor, tente novamente.')
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, login, sign_out}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);

    return context;
}

export default UserProvider;
