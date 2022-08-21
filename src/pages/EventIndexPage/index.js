import { Container } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai"
import EventContainer from "../../components/EventContainer";

const EventIndexPage = () => {
  return (
    <Container>
      
      <section className="header">
        <h1>Eventos</h1>
        <button className="calendar-button">
          <h2>Ver Calendário</h2>
          <AiOutlineCalendar className="calendar-icon"/>
        </button>
      </section>

      <section className="my-invites">
        <h2>Meus convites</h2>
        <EventContainer/>
      </section>

      <h2>Próximos Eventos</h2>
      <p> ola! </p>
    </Container>
  )
}

export default EventIndexPage