import { Container } from "./styles"
import { useState } from 'react'

const UserSidebarButton = ({ children, Icon, text, color, ...props }) => {
    return (
        <Container color={color}>
          <button> <Icon className='button-icon'/> </button>
          <p> {text} </p>
        </Container>
    )
}

export default UserSidebarButton