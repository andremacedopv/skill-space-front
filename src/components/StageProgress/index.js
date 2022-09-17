import { Container } from './styles'

const StageProgress = ({activitiesIndex, total, completed, started}) => {
    return (
        <Container completed={completed} started={started}>
            <div className="progress">
                <div className="progress-info">
                <span>{activitiesIndex? "Progresso no estágio:" : "Progresso no curso:"}</span>
                <span>{total}%</span>
            </div>
            <div className="progress-bar">
                <div className="semi-completed">
                    <div className="completed"></div>
                </div>
            </div>
            </div>
        </Container>
    )
}

export default StageProgress
