import { Container } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai"

const EventIndexPage = () => {
  return (
    <Container>
      
      <div className="header">
        <h1>Eventos</h1>
        <button className="calendar-button">
          <h2>Ver Calendário</h2>
          <AiOutlineCalendar className="calendar-icon"/>
        </button>
      </div>

      <h2>Meus convites</h2>
      <h2>Próximos Eventos</h2>
      <p> ola! </p>
    </Container>
  )
}

export default EventIndexPage