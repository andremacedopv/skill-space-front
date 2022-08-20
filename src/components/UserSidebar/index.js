import { Container } from './styles';
import LogoSvg from '../../assets/LogoBlue.svg';
import { 
    AiOutlineDoubleLeft, 
    AiOutlineDoubleRight, 
} from "react-icons/ai";
import { useState } from 'react'


export const UserSidebar = () => {
    const [collapse, setCollapse] = useState(false);

    const collapseButton = () => {
        setCollapse(!collapse);
    }

    return (
        <Container collapse={collapse} >
            <div className="sidebar">
                <div className='sidebar-header'>
                    <img src={LogoSvg} alt="Logo" />
                    {collapse? <AiOutlineDoubleRight onClick={collapseButton} className='icon'/> : <AiOutlineDoubleLeft onClick={collapseButton} className='icon'/> }
                </div>

                <div className='sidebar-body'>

                </div>
            </div>
        </Container>
    );
}