import { ButtonContainer } from './styles'

const SubmitButton = ({children, format, ...props}) => {
    return (
        <ButtonContainer format={format} {...props}> {children} </ButtonContainer>
    )
}

export default SubmitButton
