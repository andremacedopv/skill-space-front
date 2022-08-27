import { Container } from './styles'

import {AiOutlineClose} from 'react-icons/ai'
import {MdLocationPin, MdOutlineLink} from 'react-icons/md'

const EventModal = ({event, setModal, ...props}) => {

  return (
    <Container> 
      <div class="modal-box"> 
        <AiOutlineClose class="close-button" onClick={() => {setModal(false)}}/>
        <h1 className='modal-title'> Seminário da Inovação </h1>
        <h3 className='modal-date'> 23 de Setembro de 2021 </h3>
        <p className='modal-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        <div className='location-info'>
          <div className='event-type'>
            <MdLocationPin className='icon'/>
            <p> Evento Presencial </p>
          </div>
          <div className='location'>
            <MdOutlineLink className='icon'/>
            <p> Ver no Mapa</p>
          </div>
        </div>
        <p> Palestrante </p>
      </div>
    </Container>
  )
}

export default EventModal
