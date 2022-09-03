import { useState } from "react"
import { Container, InputContainer } from "./styles"
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({failed, failMessage, label, ...props}) => {

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
                <AiOutlineSearch />
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

export default SearchInput