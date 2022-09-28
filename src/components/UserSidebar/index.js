import { Container } from './styles';
import LogoSvg from '../../assets/LogoBlue.svg';
import userPlaceholder from '../../assets/userPlaceholder.png'

import { 
    AiOutlineDoubleLeft, 
    AiOutlineDoubleRight,
} from "react-icons/ai";
import { RiBallPenFill, RiQuestionFill } from "react-icons/ri"
import { FaHashtag, FaCalendar } from "react-icons/fa"
import { BsFillChatDotsFill} from "react-icons/bs"
import { GoGear} from "react-icons/go"
import { MdLogout} from "react-icons/md"

import { Link,useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext";
import { useState } from 'react'

import UserSidebarButton from './UserSidebarButton';
import { fileUrl } from "../../services/files"


export const UserSidebar = () => {

    const { user, sign_out } = useUserContext();
    const [collapse, setCollapse] = useState(false);

    const location = useLocation().pathname
    const navigate = useNavigate()

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
                    <div className='sidebar-buttons-row'>
                        <Link 
                            to={'/stage'}>
                            <UserSidebarButton 
                                Icon={RiBallPenFill}
                                collapse={collapse} 
                                selected={location.startsWith("/stage") || location.startsWith("/activity")} 
                                text="Atividades" 
                                color="#980012"
                            />
                        </Link>
                        <Link 
                            to={'/event'}>
                            <UserSidebarButton 
                                collapse={collapse} 
                                selected={location === "/event"}
                                Icon={FaCalendar} 
                                text="Eventos" 
                                color="#988900" 
                            />
                        </Link>
                        
                    </div>
                    <div className='sidebar-buttons-row'>
                        <Link 
                            to={'/post'}>
                            <UserSidebarButton 
                                Icon={FaHashtag}
                                collapse={collapse} 
                                selected={location.startsWith("/post")} 
                                text="Postagens" 
                                color="#830098"
                            />
                        </Link>
                        <UserSidebarButton collapse={collapse} Icon={BsFillChatDotsFill} text="Mensagens" color="#1E9800" />
                    </div>
                    <div className='sidebar-buttons-row'>
                        <UserSidebarButton collapse={collapse} Icon={RiQuestionFill} text="Ajuda" color="#747070" />
                        <UserSidebarButton collapse={collapse} Icon={GoGear} text="Configurações" color="#004E98" />
                    </div>
                </div>

                {
                    user? 
                    <div className='profile'>
                        { user?.user?.image === null?
                            <img src={userPlaceholder} alt="user profile" onClick={() => navigate(`/post/user/${user.user.id}`)}></img>
                            :
                            <img src={`${fileUrl.defaults.baseURL + user.user.image}`} alt="user profile" onClick={() => navigate(`/post/user/${user.user.id}`)}></img>
                        }
                        <div className='profile-texts'>
                            <p className='profile-name'>{user.user.name}</p>
                            <p className='profile-email'>{user.user.email}</p>
                        </div>
                        <MdLogout className='icon' onClick={sign_out}/>
                    </div>
                    :
                    <div className='profile'></div>
                }
            </div>
        </Container>
    );
}