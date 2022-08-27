import { Container, InputContainer, customStyles } from "./styles"
import Select from "react-select"

const SelectInput = ({label, ...props}) => {
    return (
        <Container>
            <InputContainer>
                <Select
                    placeholder={label}
                    {...props}
                    required
                    styles={customStyles}
                />
            </InputContainer>
        </Container>
    )
}

export default SelectInput