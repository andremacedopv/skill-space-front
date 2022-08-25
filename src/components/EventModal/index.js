import { Container } from './styles'

import {AiOutlineClose} from 'react-icons/ai'

const EventModal = ({event, setModal, ...props}) => {

  return (
    <Container> 
      <div class="modal-box"> 
        <AiOutlineClose class="close-button" onClick={() => {setModal(false)}}/>
        <p> Ola! </p>
      </div>
    </Container>
  )
}

export default EventModal
