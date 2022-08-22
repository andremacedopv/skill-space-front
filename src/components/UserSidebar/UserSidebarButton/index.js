import { Container } from "./styles"

const UserSidebarButton = ({ children, Icon, text, color, collapse, ...props }) => {
    return (
        <Container color={color} collapse={collapse}>
          <button> <Icon className='button-icon'/> </button>
          <p> {text} </p>
        </Container>
    )
}

export default UserSidebarButton