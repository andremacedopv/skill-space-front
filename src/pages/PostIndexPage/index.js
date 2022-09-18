import { Container } from "./styles";
import { useUserContext } from "../../contexts/useUserContext";
import { useState } from "react";
import PostContainer from "../../components/PostContainer";

const PostIndexPage = () => {


  return (
    <Container>
      <section className="posts-section">
        <PostContainer/>
        <PostContainer/>
        <PostContainer/>
      </section>
    </Container>
  )
}

export default PostIndexPage