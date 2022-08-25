import { Container } from './styles'

const EventModal = ({event, setModal, ...props}) => {

  return (
    <Container> 
      <div class="modal-box"> 
        <p> Ola! </p>
        <p onClick={() => {setModal(false)}}> X </p>
      </div>
    </Container>
  )
}

export default EventModal
