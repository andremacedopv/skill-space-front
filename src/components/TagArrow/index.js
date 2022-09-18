import { Container } from "./styles";

const TagArrow = ({name}) => {

  return (
    <Container>
      <p className="tag">{name}</p>
    </Container>
  )
}

export default TagArrow