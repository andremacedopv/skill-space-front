import { Container } from './styles'

import speakerImg from '../../assets/userImg.jpg'

const EventSpeakerContainer = ({speaker, ...props}) => {

  return (
    <Container> 
      <img src={speakerImg} alt="Speaker"></img>
      <div className='speaker-text'>
        <p className='speaker-name'> {speaker.name} </p>
        <p className='speaker-job'> {speaker.job} </p>
        <p className='speaker-description'> {speaker.description}  </p>
      </div>
    </Container>
  )
}

export default EventSpeakerContainer
