import { useState } from "react"
import { Container, InputContainer } from "./styles"
import InputMask from 'react-input-mask'

const FormInputMask = ({failed, failMessage, label, ...props}) => {

    const [isFocus, setIsFocus] = useState(false)

    const handleOnFocus = () => {
        setIsFocus(true)
    }

    const handleOnBlur = (event) => {
        setIsFocus(false)
    }

    return (
        <Container>
            <InputContainer isFocus={isFocus} failed={failed}>
                <InputMask
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    className="input"
                    placeholder={label}
                    {...props}
                    required
                />
            </InputContainer>
            {failed && <span>{failMessage}</span>}
        </Container>
    )
}

export default FormInputMask