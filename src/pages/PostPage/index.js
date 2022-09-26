import { Container } from "./styles";
import { useState, useEffect } from "react";

import PostContainer from "../../components/PostContainer";

import { api } from "../../services/api"

import { useParams } from "react-router-dom";

const PostPage = () => {

  const [post, setPost] = useState({})
  const [reload, setReload] = useState(false)

  let { id } = useParams();

  console.log(post)
  useEffect(() => {
    api.get(`post/${id}`).then((response) => {
      setPost(response.data.post)
    })
  }, [reload, id])

  return (
    <Container>
      <PostContainer post={post} setReload={setReload} reload={reload}/>
    </Container>
  )
}

export default PostPage
