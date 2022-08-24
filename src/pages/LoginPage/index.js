import { Container } from "./styles";
import { useUserContext } from "../../contexts/useUserContext";
import { useState } from "react";
import BG from '../../assets/login_bg.png';
import logo from '../../assets/Logo.svg';

import FormInput from "../../components/FormInput";
import SubmitButton from "../../components/SubmitButton";

const LoginPage = () => {

  const { login } = useUserContext();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === "" || password === "") {
      alert('Insira seu email e senha para continuar');
    }

    await login({email, password});
  }

  return (
    <Container>
        <div style={{backgroundImage: `url(${BG})`}} className="image-container">
            <span>Explore um <span className="purple">universo</span> de conhecimento</span>
            <img src={logo} alt="Skill Space logo" />
        </div>
            <form onSubmit={handleSubmit} className="form-container">
              <h1 className="welcome-text">Bem vindo de volta!</h1>
              <span className="info-text">Insira suas informações para entrar na plataforma</span>
              <div className="input-area">
                  <FormInput className="email-form" label="E-mail" type="email" name="email" onChange={(value) => setEmail(value.target.value)}/>
                  <FormInput label="Senha" type="password" name="password" onChange={(value) => setPassword(value.target.value)}/>
              </div>
              <a className="password-recover" href="/">Esqueci minha senha</a>
              <SubmitButton className="submit-btn">Login</SubmitButton>
              <span className="sign-up-label">Ainda não tem uma conta? <a href="/">Cadastre-se</a></span>
            </form>
    </Container>
  )
}

export default LoginPage