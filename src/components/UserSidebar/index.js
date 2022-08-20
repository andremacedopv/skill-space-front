import { Container } from './styles';
import LogoSvg from '../../assets/LogoBlue.svg';
import { 
    AiOutlineDoubleLeft, 
    AiOutlineDoubleRight,
} from "react-icons/ai";
import { RiBallPenFill } from "react-icons/ri"
import { useState } from 'react'
import UserSidebarButton from './UserSidebarButton';


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
                    <UserSidebarButton Icon={RiBallPenFill} text="Atividades" color="#980012" />
                </div>
            </div>
        </Container>
    );
}