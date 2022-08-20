import { Container } from "./styles";
import BG from '../../assets/login_bg.png';
import logo from '../../assets/Logo.svg';

import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";

const LoginPage = () => {
  return (
    <Container>
        <div style={{backgroundImage: `url(${BG})`}} className="image-container">
            <span>Explore um <span className="purple">universo</span> de conhecimento</span>
            <img src={logo} alt="Skill Space logo" />
        </div>
        <div className="form-container">
            <h1 className="welcome-text">Bem vindo de volta!</h1>
            <span className="info-text">Insira suas informações para entrar na plataforma</span>
            <div className="input-area">
                <FormInput className="email-form" label="E-mail" type="email" name="email"/>
                <FormInput label="Senha" type="password" name="password"/>
            </div>
            <a className="password-recover" href="/">Esqueci minha senha</a>
            <SubmitButton className="submit-btn">Login</SubmitButton>
            <span className="sign-up-label">Ainda não tem uma conta? <a href="/">Cadastre-se</a></span>
        </div>
    </Container>
  )
}

export default LoginPage