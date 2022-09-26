import { Container, InputContainer } from "./styles"

import { useNavigate } from "react-router-dom";
import {BsArrowLeftShort} from "react-icons/bs"

const BackButton = () => {

  const navigate = useNavigate()

  return (
    <Container onClick={() => {navigate(-1)}}>
      <BsArrowLeftShort className="icon"/>
      <h2> Voltar </h2>
    </Container>
  )
}

export default BackButton