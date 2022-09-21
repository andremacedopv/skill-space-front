import { Container } from './styles'

import {AiOutlineClose, AiFillFire} from 'react-icons/ai'
import {
  BsHandThumbsUpFill, 
  BsHandThumbsDownFill,
  BsHeartFill,
  BsEmojiFrownFill,
  BsFillEmojiLaughingFill,
  BsEmojiAngryFill
} from 'react-icons/bs'

import { api } from '../../services/api'
import toast from 'react-hot-toast'

const ReactionModal = ({postId, reactions, setModal, setReload, reload, ...props}) => {

  const emojis = [
    {name: "Like", icon: <BsHandThumbsUpFill color="gold" className='icon'/>},
    {name: "Dislike", icon: <BsHandThumbsDownFill color="gold" className='icon'/>},
    {name: "Love", icon: <BsHeartFill color="red" className='icon'/>},
    {name: "Sad", icon: <BsEmojiFrownFill color="gold" className='icon'/>},
    {name: "Funny", icon: <BsFillEmojiLaughingFill color="gold" className='icon'/>},
    {name: "Angry", icon: <BsEmojiAngryFill color="darkred" className='icon'/>},
    {name: "Fire", icon: <AiFillFire color="orange" className='icon'/>},
  ]

  const handleReaction = (reaction) => {
    api.post(`/post/reaction/create/${postId}`, {
      status: reaction
    }).then(() => {
      toast.success("Postagem reagida!")
      setModal(false)
      setReload(!reload)
    })
  }

  return (
    <Container> 
      <div className="modal-box"> 
        <AiOutlineClose className="close-button" onClick={() => {setModal(false)}}/>
        <div className='emojis'>
          {emojis.map(emoji => {
            return <div className='emoji-container' onClick={() => {handleReaction(emoji.name)}}> 
              {emoji.icon}
              <p> {reactions.filter(reaction => {return reaction.status === emoji.name} ).length} </p>
            </div>
          })}
        </div>
      </div>
    </Container>
  )
}

export default ReactionModal
