import { Container } from './styles'

import { useEffect, useState } from "react";

import {AiOutlineClose} from 'react-icons/ai'


const ReactionModal = ({post, setModal, displayButtons = true, ...props}) => {

  return (
    <Container> 
      <div className="modal-box"> 
        <AiOutlineClose className="close-button" onClick={() => {setModal(false)}}/>
        <p> Oi! </p>
      </div>
    </Container>
  )
}

export default ReactionModal
