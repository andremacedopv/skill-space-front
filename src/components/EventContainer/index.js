import { Container } from './styles'
import { BsPlusLg } from "react-icons/bs"

import EventModal from '../EventModal'
import { useState } from 'react'

import { useUserContext } from "../../contexts/useUserContext";

const EventContainer = ({children, event, displayButtons = true, ...props}) => {

  const [modal, setModal] = useState(false)
  const { user } = useUserContext().user;

  function parseDay(date) {
    return date.split('-')[2].substring(0,2)
  }

  function parseMonth(date) {
    const month =  date.split('-')[1]
    switch(month){
      case '01': return "Janeiro";
      case '02': return "Fevereiro";
      case '03': return "Março";
      case '04': return "Abril";
      case '05': return "Maio";
      case '06': return "Junho"; 
      case '07': return "Julho";
      case '08': return "Agosto";
      case '09': return "Setembro";
      case '10': return "Outubro";
      case '11': return "Novembro";
      case '12': return "Dezembro";
      default: return "-"
    }
  }

  const extractEventStatus = (event) => {
    if(event.guests.length === 0 ) {
      return null
    }
    else {
      return event.guests.filter(guest => {return guest.userId === user.id})[0].status
    }
  }

  return (
    <Container guestStatus = {extractEventStatus(event)}> 

      {modal && <EventModal eventId={event.id} setModal={setModal} displayButtons={displayButtons}/>}

      <div className='date-box'>
        <h1> {parseDay(event.date)} </h1>
        <h3> {parseMonth(event.date)} </h3>
      </div>

      <div className='event-info'>
        <div className='event-text'>
          <h2 className='event-title'> {event.name} </h2>
          <p className='event-description'> {event.description} </p>
          <div className='info-row'>
            <p className='event-speaker'> Palestrante: <span> {event.invitedSpeakers.map(is => is.name).join(', ')} </span> </p>
            <p className='event-online'> {event.remote ? "Evento Remoto" : "Evento Presencial"} </p>
          </div>
        </div>
        <div className='more-info' onClick={() => setModal(true)}>
          <BsPlusLg className='plus-icon'/>
          <p> Ver Detalhes </p>
        </div>
      </div>
    </Container>
  )
}

export default EventContainer
