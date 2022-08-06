import { ButtonContainer, OptionsContainer } from "./styles"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from 'react'

const SidebarButton = ({ children, Icon, options, collapse, setCollapse, ...props }) => {
    const [expand, setExpand] = useState(false);

    const expandButton = () => {
        setCollapse(false);
        setExpand(!expand);
    }

    return (
        <>
        <ButtonContainer {...props} expand={expand} collapse={collapse}> 
            <div className="main-area" onClick={expandButton}>
                <div className="main-btn">
                    <Icon className='icon-btn'/>
                    <div className="text-btn">
                        {children} 
                    </div>
                </div>
                {expand? <AiOutlineUp className="icon-arrow"/> : <AiOutlineDown className='icon-arrow'/>}
            </div>
        </ButtonContainer>
        <OptionsContainer {...props} expand={expand} collapse={collapse}>
            {options.map((option, index) => {
                return (
                    <a key={index} href={option.link} className="dashboard-link">{option.name}</a>
                )
            })}
        </OptionsContainer>
        </>
    )
}

export default SidebarButton