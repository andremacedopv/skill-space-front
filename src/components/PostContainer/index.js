import { Container } from './styles'
import userImg from '../../assets/userImg.jpg'
import { useState } from 'react'
import { useUserContext } from "../../contexts/useUserContext";
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineAddReaction} from 'react-icons/md'
import TagArrow from '../TagArrow';

const PostContainer = ({children, post, ...props}) => {
  return (
    <Container> 
      <div className='author-info'>
      <img src={userImg}></img>
        <p className='author-name'> {post.user.name} </p>
        <div className='tags'>
          {post.tags.map(tag => {
            return <TagArrow name={tag.name}/>
          } )}
        </div>
      </div>

      <div className='post-info'>
        <p className='post-name'> {post.name} </p>
        <p className='post-description'> {post.description} </p>
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
