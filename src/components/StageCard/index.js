import { Container } from './styles'
import { FaInfoCircle, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StageCard = ({name, completed, total, locked, id}) => {

    const navigate = useNavigate();

    const getPercentage = () => {
        if (total === 0) {
            return 0
        }
        return Math.round((completed / total) * 1000) / 10;
    }

    const getStatus = () => {
        if (getPercentage() === 100) {
            return "completed";
        } else if (getPercentage() > 0) {
            return "started";
        } else {
            return "";
        }
    }

    return (
        <Container status={getStatus()} onClick={() => navigate(`/stage/${id}`)}>
            <div className='icon-area'>
                {locked && <FaLock className='lock' />}
                <FaInfoCircle />
            </div>
            <span className='title'>{name} - {getPercentage()}%</span>
            <span className='description'>{completed}/{total} atividades concluídas</span>
        </Container>
    )
}

export default StageCard
