import { Container } from "./styles";
import { useState, useEffect } from "react";
import Select from 'react-select'

import userPlaceholder from '../../assets/userPlaceholder.png'

import PostContainer from "../../components/PostContainer";
import SubmitButton from "../../components/SubmitButton"

import { api } from "../../services/api"

import { BsPlusLg } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

import { useUserContext } from "../../contexts/useUserContext";
import { ButtonContainer } from "../../components/SubmitButton/styles";
import { fileUrl } from "../../services/files"

const UserPage = () => {

  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [userInfo, setUserInfo] = useState([])
  const [togglePostCreate, setTogglePostCreate] = useState(false)
  const [reload, setReload] = useState(false)
  const [postDescription, setPostDescription] = useState("")
  const [postName, setPostName] = useState("")
  const [postTags, setPostTags] = useState([])
  
  const { id } = useParams();
  const { user } = useUserContext();  

  useEffect(() => {
    api.get(`post/feed/user/${id}`).then((response) => {
      setPosts(response.data.posts)
    })
    api.get('tag').then((response) => {
      setTags(response.data.tags)
    })
    api.get(`user/${id}`).then((response) => {
      response.data.user.activitiesCompleted = response.data.activitiesCompleted
      setUserInfo(response.data.user)
    })
  }, [reload, id, user])

  const handleCreatePost = () => {

    if (postDescription === "") {
      return toast.error(`Insira um texto pra criar uma postagem!`)
    }

    api.post('post/create', {
      name: postName,
      description: postDescription,
      tags: postTags.map(postTag => postTag.value)
    }).then((response) => {
      toast.success("Postagem criada com sucesso")
      setReload(!reload)
    }).catch(e => {
      toast.error(`Um erro ocorreu: ${e}`)
    })
    setPostDescription("")
    setPostName("")
    setPostTags([])
    setTogglePostCreate(false)
  }

  const handleToggleFollow = () => {
    api.post(`/follow/${id}`)
    .then((response) => {
      const wasFollowing = userInfo.followings.find(following => following.followers.followerId === user.user.id)
      wasFollowing ? toast.success(`Você não está mais seguindo ${userInfo.name}`) : toast.success(`Você está seguindo ${userInfo.name}`) 
      setReload(!reload)
    })
    .catch(e => {
      toast.error(`Um erro ocorreu: ${e}`)
    })
  }

  return (
    <Container>

      <section className="user-info">
        <div className="image-info">
          { userInfo?.image === null?
            <img src={userPlaceholder} alt={`User`}></img>
            :
            <img src={`${fileUrl.defaults.baseURL + userInfo.image}`} alt={`User`}></img>
          }
          <div className="info">
            <h1> {userInfo.name} </h1>
            <div className="follow">
              <p> <span>{userInfo.followings?.length}</span> seguidores </p>
              <p> <span>{userInfo.follows?.length}</span> seguindo </p>
            </div>
            <p> <span>{userInfo.activitiesCompleted}</span> atividades concluídas </p>
            <p> <span>{posts.length}</span> postagens </p>
            {
              (user?.user.id !== parseInt(id) && userInfo.follows?.find(follower => follower.followers.followingId === user.user.id)) && 
              <h4>{userInfo.name} está te seguindo</h4>
            }
          </div>
        </div>
        <div className="buttons">
          {
            (user?.user.id !== parseInt(id)) ?
            <>
              <ButtonContainer onClick={handleToggleFollow}> <BsPlusLg/> {
                userInfo.followings?.find(following => following.followers.followerId === user.user.id) ? "Deixar de Seguir" : "Seguir"
              } </ButtonContainer>
              <ButtonContainer> Conversar </ButtonContainer>
            </>
            :
            <ButtonContainer> Editar Perfil </ButtonContainer>
          }
        </div>
      </section>

      {
        togglePostCreate && 
        <section className="create-post">
          <h2> Nova Postagem </h2>

          <input 
            className="name-input"
            placeholder="Dê um título à sua postagem" 
            value={postName} 
            onChange={e => {setPostName(e.target.value)}}>
          </input>

          <textarea 
            className="description-input"
            rows="6"
            placeholder="Digite o texto da postagem" 
            value={postDescription} 
            onChange={e => {setPostDescription(e.target.value)}}>
          </textarea>

          <Select 
            isMulti={true} 
            options={tags.map(tag => {return {value: tag.id, label: tag.name}})}
            onChange={(e) => setPostTags(e)}
            placeholder="Adicionar Tags"
          />

          <SubmitButton onClick={handleCreatePost}> Postar </SubmitButton>
        </section>
      }

      <section className="posts-section">
        {posts.map((post, i) => {
          return <PostContainer key={i} post={post} setReload={setReload} reload={reload}/>
        })}
      </section>

      {
        (user?.user.id === parseInt(id)) &&
        <button className="toggle-create" onClick={() => setTogglePostCreate(!togglePostCreate)}>
          {togglePostCreate ?  <CgClose/> : <BsPlusLg/>}
        </button>
      }

    </Container>
  )
}

export default UserPage
