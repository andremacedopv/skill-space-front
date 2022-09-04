import { Container } from './styles'

const StageProgress = ({total, completed, started}) => {
    return (
        <Container completed={completed} started={started}>
            <div className="progress">
                <div className="progress-info">
                <span>Progresso no curso:</span>
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
