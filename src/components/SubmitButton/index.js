import { ButtonContainer } from './styles'

const SubmitButton = ({children, format, color="dark-blue", ...props}) => {
    return (
        <ButtonContainer format={format} color={color} {...props}> {children} </ButtonContainer>
    )
}

export default SubmitButton
