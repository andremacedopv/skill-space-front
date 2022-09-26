import { Container } from './styles'
import userImg from '../../assets/userImg.jpg'
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineAddReaction} from 'react-icons/md'
import TagArrow from '../TagArrow';
import { useState } from 'react';
import ReactionModal from '../ReactionModal';
import { useNavigate } from 'react-router-dom'

const PostContainer = ({children, post, setReload, reload, comments=false, ...props}) => {
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()
  console.log(post)
  return (
    <Container> 
      {modal && <ReactionModal postId={post.id} reactions={post.reacteds} setModal={setModal} setReload={setReload} reload={reload}/>}

      <div className='author-info'>
      <img src={userImg} alt={`Author`}></img>
        <p className='author-name'> {post.user && post.user.name} </p>
        <div className='tags'>
          {post.tags && post.tags.map((tag, i) => {
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
          <p onClick={() => setModal(true)}> Reagido por {post.reacteds && post.reacteds.length} pessoas </p>
        </button>
        <button>
          <AiOutlineComment className="icon"/>
          <p onClick={() => navigate(`/post/${post.id}`)}> {post.comments && post.comments.length} Comentários </p>
        </button>
      </div>
      {comments &&
        <div className='comments'>
          {post.comments && post.comments.map(comment => <PostContainer post={comment} setReload={setReload} reload={reload} comments={false}/>)}
        </div>
      }
      
    </Container>
  )
}

export default PostContainer
