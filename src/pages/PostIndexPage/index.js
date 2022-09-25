import { Container } from "./styles";
import { useState, useEffect } from "react";
import Select from 'react-select'

import PostContainer from "../../components/PostContainer";
import SearchInput from "../../components/SearchInput";
import SubmitButton from "../../components/SubmitButton"

import { api } from "../../services/api"

import { BsPlusLg } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import { VscExpandAll } from "react-icons/vsc"
import toast from "react-hot-toast";

const PostIndexPage = () => {

  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [togglePostCreate, setTogglePostCreate] = useState(false)
  const [search, setSearch] = useState('')
  const [reload, setReload] = useState(false)

  const [postDescription, setPostDescription] = useState("")
  const [postName, setPostName] = useState("")
  const [postTags, setPostTags] = useState([])

  useEffect(() => {
    api.get('post/feed').then((response) => {
      setPosts(response.data.posts)
    })
    api.get('tag').then((response) => {
      setTags(response.data.tags)
    })
  }, [reload])

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

  return (
    <Container>

      <section className="header">
        <div className="title">
          <h1>Feed</h1>
        </div>
        <div className="search-container">
          <SearchInput label="Buscar" value={search} onChange={(e) => {setSearch(e.target.value)}}/> 
        </div>
      </section>

      <section className="filters">
        <h2>Filtrar por Tag</h2>
        <div className="tags-row">
          <div className="tags">
            {tags.map((tag, i) => {
              return <p key={i} className="tag">{tag.name}</p>
            })}
          </div>
          <div className="see-all">
            <p> Ver todas </p>
            <VscExpandAll className="icon"/>
          </div>
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

      <button className="toggle-create" onClick={() => setTogglePostCreate(!togglePostCreate)}>
        {togglePostCreate ?  <CgClose/> : <BsPlusLg/>}
      </button>

    </Container>
  )
}

export default PostIndexPage
