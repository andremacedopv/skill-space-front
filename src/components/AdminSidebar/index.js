import { Container } from './styles';
import LogoSvg from '../../assets/Logo.svg';
import { 
    AiOutlineDoubleLeft, 
    AiOutlineDoubleRight, 
    AiOutlineUser, 
    AiOutlineBook,
    AiOutlineCalendar,
    AiOutlineBranches,
    AiOutlineTags,
    AiOutlineAudit,
} from "react-icons/ai";
import SidebarButton from './SidebarButton'
import { useState } from 'react'

const userOptions = [
    {name: 'Ver Todos', link: '/admin/users'},
    {name: 'Gerenciar Permissões', link: '/admin/users/permissions'},
]

const activitiesOptions = [
    {name: 'Ver Todas', link: '/admin/activities'},
    {name: 'Cadastrar Nova', link: '/admin/activities/create'},
]

const eventsOptions = [
    {name: 'Ver Todos', link: '/admin/events'},
    {name: 'Cadastrar Novo', link: '/admin/events/create'},
]

const stagesOptions = [
    {name: 'Ver Todos', link: '/admin/stages'},
    {name: 'Cadastrar Novo', link: '/admin/stages/create'},
]

const tagsOptions = [
    {name: 'Ver Todos', link: '/admin/tags'},
    {name: 'Cadastrar Novo', link: '/admin/tags/create'},
]

const submissionsOptions = [
    {name: 'Ver Todas', link: '/admin/submissions'},
]

export const AdminSidebar = () => {
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
                    <SidebarButton
                        Icon={AiOutlineUser}
                        options={userOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Usuários
                    </SidebarButton>

                    <SidebarButton
                        Icon={AiOutlineBook}
                        options={activitiesOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Atividades
                    </SidebarButton>
                    
                    <SidebarButton
                        Icon={AiOutlineCalendar}
                        options={eventsOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Eventos
                    </SidebarButton>

                    <SidebarButton
                        Icon={AiOutlineBranches}
                        options={stagesOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Estágios
                    </SidebarButton>
                    
                    <SidebarButton
                        Icon={AiOutlineTags}
                        options={tagsOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Tags
                    </SidebarButton>

                    <SidebarButton
                        Icon={AiOutlineAudit}
                        options={submissionsOptions}
                        collapse={collapse}
                        setCollapse={setCollapse}
                    >
                        Submissões
                    </SidebarButton>
                </div>

                {/* <div className='sidebar-bottom'>
                    <AiOutlineArrowLeft className='icon-bottom'/>
                    <span className='bottom-text'>Voltar para o site</span>
                </div> */}
            </div>
        </Container>
    );
}