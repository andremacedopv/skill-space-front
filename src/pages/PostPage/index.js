import { Container } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api"

import PostContainer from "../../components/PostContainer";
import BackButton from "../../components/BackButton";


const PostPage = () => {

  const [post, setPost] = useState({})
  const [reload, setReload] = useState(false)

  let { id } = useParams();

  useEffect(() => {
    api.get(`post/${id}`).then((response) => {
      setPost(response.data.post)
    })
  }, [reload, id])

  return (
    <Container>
      <BackButton/>
      <PostContainer post={post} setReload={setReload} reload={reload} comments={true}/>
    </Container>
  )
}

export default PostPage
