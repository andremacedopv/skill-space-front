import { Container } from "./styles"

const UserSidebarButton = ({ children, Icon, text, color, selected, collapse, ...props }) => {
    return (
        <Container color={color} collapse={collapse} selected={selected}>
          <button> <Icon className='button-icon'/> </button>
          <p> {text} </p>
        </Container>
    )
}

export default UserSidebarButton