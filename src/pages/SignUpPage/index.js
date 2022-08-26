import { Container, StepBtn } from "./styles";
import { useState, useEffect } from "react";
import BG from '../../assets/sign_up_bg.png';
import logo from '../../assets/Logo.svg';

import FormInput from "../../components/FormInput";
import FormInputMask from "../../components/FormInputMask";
import SubmitButton from "../../components/SubmitButton";
import ToggleInput from "../../components/ToggleInput";
import SelectInput from "../../components/SelectInput";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [ddd, setDdd] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [page, setPage] = useState(1);
  const [tagArray, setTagArray] = useState([]);
  const [tags, setTags] = useState([]);

  const statesOptions = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goías' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraíma' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  useEffect(() => {
    api.get(`tag`)
    .then((response) => {
      setTags(response.data.tags);
      console.log(response.data.tags);
    })
  }, [])

  const formatBirthday = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day} 00:00:00`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== passwordConfirm) {
      alert('As senhas não conferem');
      return;
    }

    try {
      const response = await api.post("signup", {
          name,
          email,
          password,
          cpf,
          phone,
          ddd,
          address: {
            number,
            street,
            city,
            state: state.value,
            country,
            neighborhood,
          },
          birthdate: formatBirthday(birthday),
          tags: tagArray,
      });
      if (response.data) {
        alert("Usuário criado.");
        navigate("/login");
      }    
    } catch (error) {
      alert('Erro, tente novamente.','error');
    }
  }

  return (
    <Container>
        <div className="data-container">
          <div className="header-div">
            <h1 className="welcome-text">Cadastro</h1>
            <div className="step-area">
              <StepBtn onClick={() => setPage(1)} selected={page === 1} className="step-btn">1</StepBtn>
              <StepBtn onClick={() => setPage(2)} selected={page === 2} className="step-btn">2</StepBtn>
            </div>
          </div>
          {page === 1?
          <>
          <span className="info-text">Preencha os campos abaixo para criar sua conta</span>
          <div className="form-container">
            <div className="input-area">
              <FormInput className="form-data" label="Nome" type="text" name="name" onChange={(value) => setName(value.target.value)}/>
              <FormInput className="form-data" label="E-mail" type="email" name="email" onChange={(value) => setEmail(value.target.value)}/>
              <FormInput className="form-data" label="Senha" type="password" name="password" onChange={(value) => setPassword(value.target.value)}/>
              <FormInput className="form-data" label="Confirmar Senha" type="password" name="password-confirmation" onChange={(value) => setPasswordConfirm(value.target.value)}/>
              <FormInput className="form-data" label="CPF" type="text" name="cpf" onChange={(value) => setCpf(value.target.value)}/>
              <FormInputMask className="form-data" label="Data de Nascimento" type="text" mask='99/99/9999' name="birthday" onChange={(value) => setBirthday(value.target.value)}/>
              <div className="dual-field">
                <FormInput className="smaller-field" label="DDD" type="text" name="ddd" onChange={(value) => setDdd(value.target.value)}/>
                <FormInput className="bigger-field" label="Telefone" type="text" name="phone" onChange={(value) => setPhone(value.target.value)}/>
              </div>
              <FormInput className="form-data" label="País" type="text" name="country" onChange={(value) => setCountry(value.target.value)}/>
              <div className="dual-field">
                <SelectInput value={state} options={statesOptions} label="Estado" name="state" onChange={state => setState(state)}/>
                <FormInput label="Cidade" type="text" name="city" onChange={(value) => setCity(value.target.value)}/>
              </div>
              <FormInput className="form-data" label="Bairro" type="text" name="neighborhood" onChange={(value) => setNeighborhood(value.target.value)}/>
              <div className="dual-field">
                <FormInput className="form-data" label="Rua" type="text" name="street" onChange={(value) => setStreet(value.target.value)}/>
                <FormInput className="form-data" label="Número" type="text" name="number" onChange={(value) => setNumber(value.target.value)}/>
              </div>
            </div>
            <SubmitButton onClick={() => setPage(2)} className="submit-btn">Continuar</SubmitButton>
            <span className="sign-up-label">Já possui uma conta? <a href="/">Entre</a></span>
          </div>
          </> :
          <>
          <span className="info-text">Selecione um ou mais interesses para ter uma experiência personalizada</span>
          <div className="toggles-div">
            {tags.map((tag) => {return(
              <ToggleInput key={tag.id} setter={setTagArray} state={tagArray} value={tag.id} >{tag.name}</ToggleInput>
            )})}
          </div>
          <SubmitButton className="submit-btn" onClick={handleSubmit}>Cadastrar</SubmitButton>
          <span className="sign-up-label">Já possui uma conta? <a href="/login">Entre</a></span>
          </>
          }
        </div>
        <div style={{backgroundImage: `url(${BG})`}} className="image-container">
            <span>Explore um <span className="highlight">universo</span> de conhecimento</span>
            <img src={logo} alt="Skill Space logo" />
        </div>
    </Container>
  )
}

export default SignUpPage