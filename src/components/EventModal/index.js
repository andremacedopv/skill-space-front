import { Container } from './styles'

import {AiOutlineClose} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {MdLocationPin, MdOutlineLink} from 'react-icons/md'

import { api } from "../../services/api"

import { useEffect, useState } from "react";
import EventSpeakerContainer from '../EventSpeakerContainer'
import SubmitButton from '../SubmitButton'

import { useUserContext } from "../../contexts/useUserContext";

import {toast} from 'react-hot-toast';

const EventModal = ({eventId, setModal, displayButtons = true, ...props}) => {

  const [event, setEvent] = useState({})
  const { user } = useUserContext().user;

  useEffect(() => {
    api.get(`event/${eventId}`).then((response) => {
      const date = response.data.event.date
      const day = date.split('-')[2].substring(0,2)
      let month =  date.split('-')[1]
      switch(month){
        case '01': month = "Janeiro"; break;
        case '02': month = "Fevereiro"; break;
        case '03': month = "Março"; break;
        case '04': month = "Abril"; break;
        case '05': month = "Maio"; break;
        case '06': month = "Junho"; break; 
        case '07': month = "Julho"; break;
        case '08': month = "Agosto"; break;
        case '09': month = "Setembro"; break;
        case '10': month = "Outubro"; break;
        case '11': month = "Novembro"; break;
        case '12': month = "Dezembro"; break;
        default: month = "-"
      }
      const year = date.split('-')[0]
      response.data.event.date = `${day} de ${month} de ${year}`
      setEvent(response.data.event)
    })
  }, [eventId])

  const updateGuestStatus = (status) => {
    api.put(`/event/${eventId}/guest/update/${user.id}`, {
      status: status
    })
    .then(() => {
      toast.success('Estado da participação no evento alterado')
    })
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
          <a className='location' href={event.link} target="_blank" rel="noreferrer">
            <MdOutlineLink className='icon'/>
            <p> {event.remote ? "Acessar Link" : "Ver no Mapa"} </p>
          </a>
        </div>
        <p className='speaker-p'> Palestrante </p>
        <div className='speakers-container'>
          { event.invitedSpeakers && event.invitedSpeakers.map(speaker => { return <EventSpeakerContainer speaker={speaker}/> })}
        </div>
        {
          displayButtons && 
          <div className='buttons-container'>
            <SubmitButton color="light-blue" onClick={() => updateGuestStatus("Maybe")}> Tenho Interesse </SubmitButton>
            <SubmitButton color="green" onClick={() => updateGuestStatus("Confirmed")}> Confirmar Presença </SubmitButton>
            <SubmitButton color="red" onClick={() => updateGuestStatus("Declined")}> Não Tenho Interesse </SubmitButton>
          </div>
        }
      </div>
    </Container>
  )
}

export default EventModal
