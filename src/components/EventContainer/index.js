import { Container } from './styles'
import { BsPlusLg } from "react-icons/bs"

const EventContainer = ({children, ...props}) => {
    return (
        <Container> 
          <div className='date-box'>
            <h1> 23 </h1>
            <h3> Maio </h3>
          </div>

          <div className='event-info'>
            <div className='event-text'>
              <h2 className='event-title'> Seminário da Inovação </h2>
              <p className='event-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent </p>
              <div className='info-row'>
                <p className='event-place'> Local: <span> Ulysses Guimarães </span> </p>
                <p className='event-speaker'> Palestrante: <span> João gavião </span> </p>
              </div>
            </div>
            <div className='more-info'>
              <BsPlusLg className='plus-icon'/>
              <p> Ver Detalhes </p>
            </div>
          </div>
        </Container>
    )
}

export default EventContainer
