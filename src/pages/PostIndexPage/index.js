import { Container } from "./styles";
import { useUserContext } from "../../contexts/useUserContext";
import { useState, useEffect } from "react";

import PostContainer from "../../components/PostContainer";
import SearchInput from "../../components/SearchInput";

import { api } from "../../services/api"

import { VscExpandAll } from "react-icons/vsc"

const PostIndexPage = () => {

  const [posts, setPosts] = useState([])
  const [tags, setTags] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    api.get('feed').then((response) => {
      setPosts(response.data.posts)
    })
    api.get('tag').then((response) => {
      setTags(response.data.tags)
    })
  }, [])

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
            {tags.map(tag => {
              return <p className="tag">{tag.name}</p>
            })}
          </div>
          <div className="see-all">
            <p> Ver todas </p>
            <VscExpandAll className="icon"/>
          </div>
        </div>
      </section>

      <section className="posts-section">
        {posts.map(post => {
          return <PostContainer post={post}/>
        })}
      </section>

    </Container>
  )
}

export default PostIndexPage