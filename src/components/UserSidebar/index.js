import { Container } from './styles';
import LogoSvg from '../../assets/LogoBlue.svg';
import { 
    AiOutlineDoubleLeft, 
    AiOutlineDoubleRight,
} from "react-icons/ai";
import { RiBallPenFill, RiQuestionFill } from "react-icons/ri"
import { FaHashtag, FaCalendar } from "react-icons/fa"
import { BsFillChatDotsFill, BsFillGearFill} from "react-icons/bs"
import { GoGear} from "react-icons/go"

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
                    <UserSidebarButton collapse={collapse} Icon={RiBallPenFill} text="Atividades" color="#980012" />
                    <UserSidebarButton collapse={collapse} Icon={FaCalendar} text="Eventos" color="#988900" />
                    <UserSidebarButton collapse={collapse} Icon={FaHashtag} text="Postagens" color="#830098" />
                    <UserSidebarButton collapse={collapse} Icon={BsFillChatDotsFill} text="Mensagens" color="#1E9800" />
                    <UserSidebarButton collapse={collapse} Icon={RiQuestionFill} text="Ajuda" color="#747070" />
                    <UserSidebarButton collapse={collapse} Icon={GoGear} text="Configurações" color="#004E98" />
                </div>
            </div>
        </Container>
    );
}