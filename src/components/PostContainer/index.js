import { Container } from './styles'
import userImg from '../../assets/userImg.jpg'
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineAddReaction} from 'react-icons/md'
import TagArrow from '../TagArrow';
import { useState } from 'react';
import ReactionModal from '../ReactionModal';

const PostContainer = ({children, post, ...props}) => {
  const [modal, setModal] = useState(false)
  return (
    <Container> 


      {modal && <ReactionModal post={post} setModal={setModal}/>}

      <div className='author-info'>
      <img src={userImg} alt={`Author`}></img>
        <p className='author-name'> {post.user.name} </p>
        <div className='tags'>
          {post.tags.map((tag, i) => {
            return <TagArrow key={i} name={tag.name}/>
          } )}
        </div>
      </div>

      <div className='post-info'>
        {post.name && <p className='post-name'> {post.name} </p>}
        <p className='post-description'> {post.description} </p>
      </div>

      <div className='buttons'>
        <button>
          <MdOutlineAddReaction className="icon"/>
          <p onClick={() => setModal(true)}> Reagido por {post.reacteds.length} pessoas </p>
        </button>
        <button>
          <AiOutlineComment className="icon"/>
          <p> {post.comments.length} Comentários </p>
        </button>
      </div>
    </Container>
  )
}

export default PostContainer
