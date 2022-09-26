import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import {AiOutlineComment} from 'react-icons/ai'
import {BsReply} from 'react-icons/bs'
import {MdOutlineAddReaction} from 'react-icons/md'
import {RiSendPlaneFill} from 'react-icons/ri'
import toast from "react-hot-toast";
import { api } from "../../services/api"

import TagArrow from '../TagArrow';
import ReactionModal from '../ReactionModal';
import userImg from '../../assets/userImg.jpg'

const PostContainer = ({children, post, setReload, reload, comments=false, level=0, ...props}) => {
  
  const [modal, setModal] = useState(false)
  const [toggleCommentCreate, setToggleCommentCreate] = useState(false)
  const [postDescription, setPostDescription] = useState("")
  const navigate = useNavigate()

  const handleCreateComment = () => {

    if (postDescription === "") {
      return toast.error(`Insira um texto pra criar um comentário!`)
    }

    api.post('post/create', {
      name: "",
      description: postDescription,
      parentPostId: post.id,
      tags: []
    }).then((response) => {
      toast.success("Comentário criado com sucesso")
      setReload(!reload)
    }).catch(e => {
      toast.error(`Um erro ocorreu: ${e}`)
    })
    setPostDescription("")
    setToggleCommentCreate(false)
  }


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
        {
          (comments && level < 2) &&
          <button>
            <BsReply className="icon"/>
            <p onClick={() => setToggleCommentCreate(!toggleCommentCreate)}> Responder </p>
          </button>
        }
      </div>

      {
        (comments && level < 2 && toggleCommentCreate) &&
        <section className="create-comment">
          <textarea 
            className="description-input"
            rows="3"
            placeholder="Digite o seu comentário" 
            value={postDescription} 
            onChange={e => {setPostDescription(e.target.value)}}>
          </textarea>
          <button onClick={handleCreateComment}>
            <RiSendPlaneFill className='icon'/>
          </button>
        </section>
      }

      {
        (comments && level < 2) &&
        <div className='comments'>
          {post.comments && post.comments.map(comment => <PostContainer post={comment} setReload={setReload} reload={reload} comments={true} level={level+1}/>)}
        </div>
      }
      
    </Container>
  )
}

export default PostContainer
