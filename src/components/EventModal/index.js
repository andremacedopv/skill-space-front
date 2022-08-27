import { Container } from './styles'

import speakerImg from '../../assets/userImg.jpg'

import {AiOutlineClose} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {MdLocationPin, MdOutlineLink} from 'react-icons/md'

import { api } from "../../services/api"

import { useEffect, useState } from "react";
import EventSpeakerContainer from '../EventSpeakerContainer'

const EventModal = ({eventId, setModal, ...props}) => {

  const [event, setEvent] = useState({})

  useEffect(() => {
    api.get(`event/${eventId}`).then((response) => {
      response.data.event.date = parseDate(response.data.event.date)
      setEvent(response.data.event)
    })
  }, [])
  console.log(event)

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

  function parseDate(date) {
    const day = date.split('-')[2].substring(0,2)
    const month = parseMonth(date)
    const year = date.split('-')[0]
    return `${day} de ${month} de ${year}`
  }

  return (
    <Container> 
      <div className="modal-box"> 
        <AiOutlineClose className="close-button" onClick={() => {setModal(false)}}/>
        <h1 className='modal-title'> {event.name} </h1>
        <h3 className='modal-date'> {event.date} </h3>
        <p className='modal-description'> {event.description} </p>
        <div className='location-info'>
          <div className='event-type'>
            {event.remote ? <BsFillPeopleFill className='icon'/> : <MdLocationPin className='icon'/> }
            <p> {event.remote ? "Evento Remoto" : "Evento Presencial"} </p>
          </div>
          <a className='location' href={event.link} target="_blank">
            <MdOutlineLink className='icon'/>
            <p> {event.remote ? "Acessar Link" : "Ver no Mapa"} </p>
          </a>
        </div>
        <p className='speaker-p'> Palestrante </p>
        <div className='speakers-container'>
          { event.invitedSpeakers && event.invitedSpeakers.map(speaker => { return <EventSpeakerContainer speaker={speaker}/> })}
        </div>

      </div>
    </Container>
  )
}

export default EventModal
