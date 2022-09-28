import { Container } from './styles'

import {AiOutlineClose} from 'react-icons/ai'
import {
  BsHandThumbsUpFill, 
  BsHandThumbsDownFill,
  BsHeartFill,
  BsEmojiFrownFill,
  BsFillEmojiLaughingFill,
  BsEmojiAngryFill
} from 'react-icons/bs'

import userPlaceholder from '../../assets/userPlaceholder.png'
import { api } from '../../services/api'
import { useUserContext } from "../../contexts/useUserContext";

import toast from 'react-hot-toast'
import { useEffect, useState } from 'react';
import { fileUrl } from "../../services/files"

const ReactionModal = ({postId, reactions, setModal, setReload, reload, ...props}) => {

  const [userReaction, setUserReaction] = useState("")

  const { user } = useUserContext();
  useEffect(() => {
    setUserReaction(reactions.find(reaction => reaction.userId === user.user.id)?.status)
  }, [reactions, user.user.id])
  
  const emojis = [
    {name: "Like", icon: <BsHandThumbsUpFill color="gold" className='icon'/>},
    {name: "Dislike", icon: <BsHandThumbsDownFill color="gold" className='icon'/>},
    {name: "Love", icon: <BsHeartFill color="red" className='icon'/>},
    {name: "Sad", icon: <BsEmojiFrownFill color="gold" className='icon'/>},
    {name: "Funny", icon: <BsFillEmojiLaughingFill color="gold" className='icon'/>},
    {name: "Angry", icon: <BsEmojiAngryFill color="darkred" className='icon'/>},
  ]

  const handleReaction = (reaction) => {
    api.post(`/post/reaction/create/${postId}`, {
      status: reaction
    }).then(() => {
      toast.success("Postagem reagida!")
      setUserReaction(reaction)
      setReload(!reload)
    })
  }

  return (
    <Container> 
      <div className="modal-box"> 
        <AiOutlineClose className="close-button" onClick={() => {setModal(false)}}/>
        <div className='emojis'>
          {emojis.map(emoji => {
            return <div className={`emoji-container ${userReaction === emoji.name && "selected"}`} onClick={() => {handleReaction(emoji.name)}}> 
              {emoji.icon}
              <p> {reactions.filter(reaction => {return reaction.status === emoji.name} ).length} </p>
            </div>
          })}
        </div>
        <div className='users'>
          {
            reactions.map(reaction => {
              return  <div className='user-container'> 
                        <div className='name-image'>
                          { reaction.user?.image === null? 
                          <img src={userPlaceholder} alt={`Author`}></img>
                          :
                          <img src={`${fileUrl.defaults.baseURL + reaction.user?.image}`} alt={`Author`}></img>
                          }
                          <p> {reaction.user.name} </p>
                        </div>
                        {emojis.find(emoji => emoji.name === reaction.status).icon}
                      </div>
            })
          }
        </div>
      </div>
    </Container>
  )
}

export default ReactionModal
