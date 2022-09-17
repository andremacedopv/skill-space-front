import { Container } from "./styles";

import { AiOutlineCalendar } from "react-icons/ai"
import EventContainer from "../../components/EventContainer";

import { api } from "../../services/api"

import { useState, useEffect } from "react";

const EventIndexPage = () => {

  const [selectedTab, setSelectedTab] = useState('all-events')
  const [events, setEvents] = useState([])
  const [nextEvents, setNextEvents] = useState([])
  const [previousEvents, setPreviousEvents] = useState([])
  const [displayedEvents, setDisplayedEvents] = useState([])
  const [invites, setInvites] = useState([])
  
  let year = ""

  useEffect(() => {
    api.get('event').then((response) => {

      const date = new Date()
      const currentDate = date.getFullYear() + "-" + String(date.getDate()).padStart(2, '0') + "-" + String(date.getMonth() + 1).padStart(2, '0')

      const allEvents = response.data.events
      const futureEvents = allEvents.filter(event => {
        const eventDate = event.date.substring(0,10)
        return eventDate >= currentDate
      })
      const pastEvents = allEvents.filter(event => {
        const eventDate = event.date.substring(0,10)
        return eventDate < currentDate
      })

      setEvents(allEvents)
      setNextEvents(futureEvents)
      setPreviousEvents(pastEvents)

      setDisplayedEvents(allEvents)
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
          <h2 className={selectedTab === "all-events" ? "selected" : ""} onClick={() => {
            setSelectedTab("all-events")
            setDisplayedEvents(events)
            }}>Todos os Eventos</h2>
          <h2> | </h2>
          <h2 className={selectedTab === "next-events" ? "selected" : ""} onClick={() => {
            setSelectedTab("next-events")
            setDisplayedEvents(nextEvents)
            }}>Próximos Eventos</h2>
          <h2> | </h2>
          <h2 className={selectedTab === "past-events" ? "selected" : ""} onClick={() => {
            setSelectedTab("past-events")
            setDisplayedEvents(previousEvents)
            }}>Eventos Passados</h2>
        </div>
        <div className="events-container">
          { 
            displayedEvents.map((event,i) => {return(groupEventByYear(event, i))}) 
          }
        </div>
      </section>
    </Container>
  )
}

export default EventIndexPage