import { Container } from './styles'
import userImg from '../../assets/userImg.jpg'
import { useState } from 'react'
import { useUserContext } from "../../contexts/useUserContext";
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineAddReaction} from 'react-icons/md'

const PostContainer = ({children, event, ...props}) => {

  return (
    <Container> 
      <div className='author-info'>
      <img src={userImg}></img>
        <p className='author-name'> José Fulano </p>
        <div className='tags'>
          <div className='tag'> Tecnologia </div>
          <div className='tag'> Filosofia </div>
        </div>
      </div>

      <div className='post-info'>
        <p className='post-description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
      </div>

      <div className='buttons'>
        <button>
          <MdOutlineAddReaction className="icon"/>
          <p> Reagido por 30 pessoas </p>
        </button>
        <button>
          <AiOutlineComment className="icon"/>
          <p> 27 Comentários </p>
        </button>
      </div>
    </Container>
  )
}

export default PostContainer
