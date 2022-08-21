import { Container } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai"
import EventContainer from "../../components/EventContainer";

import { useState } from "react";

const EventIndexPage = () => {

  const [selectedTab, setSelectedTab] = useState('next-events')

  const events = [
    {
      name: "Primeiro Evento brabo",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      date: "10/04/2020",
      guestName: "Jonas",
      place: "Mané Garrincha"
    },
    {
      name: "Segundo Evento lendário",
      description: "O melhor evento que você vai encontrar no mundo todo",
      date: "10/12/2020",
      guestName: "Jonas",
      place: "Mané Garrincha"
    }
  ]

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
        <div className="events-container">
          { events.map(event => <EventContainer event={event}/>) }
        </div>
      </section>

      <section className="my-events">
        <div className="event-tabs"> 
          <h2 className={selectedTab === "next-events" ? "selected" : ""} onClick={() => setSelectedTab("next-events")}>Próximos Eventos</h2>
          <h2> | </h2>
          <h2 className={selectedTab === "my-presences" ? "selected" : ""} onClick={() => setSelectedTab("my-presences")}>Minhas Presenças</h2>
          <h2> | </h2>
          <h2 className={selectedTab === "past-events" ? "selected" : ""} onClick={() => setSelectedTab("past-events")}>Eventos Passados</h2>
        </div>
        <div className="events-container">
          { events.map(event => <EventContainer event={event}/>) }
        </div>
      </section>
    </Container>
  )
}

export default EventIndexPage