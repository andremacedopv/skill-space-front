import { useState } from "react"
import { Container, InputContainer } from "./styles"

const ToggleInput = ({setter, state, value, children}) => {

    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        if(state.includes(value)) {
            setSelected(false)
            setter(state.filter(item => item !== value))
        } else {
            setSelected(true)
            setter([...state, value])
        }
    }

    return (
        <Container>
            <InputContainer onClick={handleClick} isSelected={selected} >
                <button>{children}</button>
                <div className="circle"></div>
            </InputContainer>
        </Container>
    )
}

export default ToggleInput