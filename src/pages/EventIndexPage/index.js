import { Container } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai"
import EventContainer from "../../components/EventContainer";

import { api } from "../../services/api"

import { useState, useEffect } from "react";

const EventIndexPage = () => {

  const [selectedTab, setSelectedTab] = useState('next-events')
  const [events, setEvents] = useState([])
  const [invites, setInvites] = useState([])
  
  let year = ""

  useEffect(() => {
    api.get('event').then((response) => {
      setEvents(response.data.events)
    })

    api.get('event/my_invites').then((response) => {
      setInvites(response.data.events)
    })
  }, [])

  const groupEventByYear = (event, i) => {
    if (year === event.date.split('-')[0]) {
      return ( <EventContainer displayButtons={false} key={i} event={event}/> )
    }
    else {
      year = event.date.split('-')[0]
      return (
        <>
          <p className="events-date"> {event.date.split('-')[0]} </p>
          <EventContainer displayButtons={false} key={i} event={event}/> 
        </>
      )
    }
  }

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
          { 
            invites.map((event,i) => {
              return <EventContainer key={i} event={event}/> 
            }) 
          }
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
          { 
            events.map((event,i) => {
              return(groupEventByYear(event, i))
            }) 
          }
        </div>
      </section>
    </Container>
  )
}

export default EventIndexPage