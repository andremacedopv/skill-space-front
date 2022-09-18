import { Container } from "./styles";
import { useUserContext } from "../../contexts/useUserContext";
import { useState, useEffect } from "react";

import PostContainer from "../../components/PostContainer";

import { api } from "../../services/api"

const PostIndexPage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('feed').then((response) => {
      setPosts(response.data.posts)
    })
  }, [])

  return (
    <Container>
      <section className="posts-section">
        {posts.map(post => {
          return <PostContainer post={post}/>
        })}
      </section>
    </Container>
  )
}

export default PostIndexPage