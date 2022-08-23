import { useState } from "react"
import { Container, InputContainer } from "./styles"

const FormInput = ({failed, failMessage, label, ...props}) => {

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
                <input
                    onFocus={handleOnFocus}
                    onBlur={handleOnBlur}
                    placeholder={label}
                    {...props}
                    required
                />
            </InputContainer>
            {failed && <span>{failMessage}</span>}
        </Container>
    )
}

export default FormInput