import { Container } from "./styles";
import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {api} from "../../services/api";
import SearchInput from "../../components/SearchInput";
import StageProgress from "../../components/StageProgress";
import { FaLock, FaLockOpen, FaAngleDown, FaAngleUp, FaExclamation } from "react-icons/fa";
import SubmitButton from "../../components/SubmitButton";
import { Tooltip } from '@mui/material';

const ActivityIndexPage = () => {

  let { id } = useParams();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('all')
  const [search, setSearch] = useState('')
  const [stage, setStage] = useState([])
  const [activities, setActivities] = useState([])
  const [completed, setCompleted] = useState(0)
  const [started, setStarted] = useState(0)
  const [overall, setOverall] = useState(0)
  const [expandIndex, setExpandIndex] = useState(0)
  const [locked, setLocked] = useState(false)
  const [hasStageUser, setHasStageUser] = useState(false)
  const [stageCompleted, setStageCompleted] = useState(false)
  
  const verifyCompletion = useCallback((stageArr) => {
    const completedActivities = stageArr.activities.filter(activity => activity.mandatory === true && activity.status !== "completed")
    if (completedActivities.length === 0) {
      setStageCompleted(true)
    } else {
      setStageCompleted(false)
    }
  }, []);

  const fetchStage = useCallback((stageId) => {
    api.get(`stage/my/${stageId}`).then((response) => {
      setStage(response.data.stage)
      setActivities(response.data.stage.activities)
      setCompleted(response.data.completed)
      setStarted(response.data.started)
      setOverall(response.data.overall)
      setActivitiesFilter(response.data.stage.activities)
      setLocked(response.data.stage.locked)
      setHasStageUser(response.data.stage.stageUsers?.length > 0 ? true : false)
      verifyCompletion(response.data.stage)
    })
  }, [verifyCompletion]);

  useEffect(() => {
    fetchStage(id)
  }, [id, fetchStage])
  
  const [activitiesFilter, setActivitiesFilter] = useState(activities)

  const handleSearch = (value) => {
    const filteredActivities = activities.filter(activity => activity.name.toLowerCase().includes(value.toLowerCase()))
    setActivitiesFilter(filteredActivities)
  }

  const handleStart = (e) => {
    e.preventDefault()
    api.post(`stage/start/${id}`).then((response) => {
      fetchStage(id)
      navigate(`/stage/${id}`)
    }).catch((error) => {
      alert('Erro ao iniciar estágio')
    })
  }

  const handleFinish = (e) => {
    e.preventDefault()
    api.post(`stage/finish/${id}`).then((response) => {
      fetchStage(id)
      navigate(`/stage/${id}`)
    }).catch((error) => {
      alert('Erro ao finalizar estágio')
    })
  }

  const getActivityType = (type) => {
    switch (type) {
      case 'Theorical':
        return 'Teórica'
      case 'Practical':
        return 'Prática'
      case 'Events':
        return 'Eventos'
      default:
        return 'Social'
    }
  }

  const getActivityStatus = (type) => {
    switch (type) {
      case 'pending':
        return 'Em Análise'
      case 'not-started':
        return 'Pendente'
      case 'completed':
        return 'Finalizada'
      default:
        return 'Iniciada'
    }
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab)
    if (tab === 'all') {
      setActivitiesFilter(activities)
    } else if (tab === 'completed') {
      setActivitiesFilter(activities.filter(activity => activity.status === "completed"))
    } else if (tab === 'started') {
      setActivitiesFilter(activities.filter(activity => activity.status === "started"))
    } else if (tab === 'pending') {
      setActivitiesFilter(activities.filter(activity => activity.status === "not-started"))
    } else {
      setActivitiesFilter(activities.filter(activity => activity.status === "pending"))
    }
  }

  const getCompleted = () => {
    const filter = activities.filter(activity => activity.status === "completed")
    return filter.length
  }

  const getStarted = () => {
    const filter = activities.filter(activity => activity.status === 'started')
    return filter.length
  }

  const getPending = () => {
    const filter = activities.filter(activity => activity.status === "not-started")
    return filter.length
  }

  const getAnalysis = () => {
    const filter = activities.filter(activity => activity.status === "pending")
    return filter.length
  }

  return (
    <Container>
      
      <section className="header">
        <div className="title">
          <h1>Atividades</h1>
          <h2>{stage.name}</h2>
        </div>
        <StageProgress activitiesIndex={true} total={overall} completed={completed} started={started} />
      </section>

      <section className="info-area">
        <div className="info-item">
          <span className="info-name">Atividades</span>
          <span className="info-value">{activities.length}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Finalizadas</span>
          <span className="info-value">{getCompleted()}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Iniciadas</span>
          <span className="info-value">{getStarted()}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Pendentes</span>
          <span className="info-value">{getPending()}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Em Análise</span>
          <span className="info-value">{getAnalysis()}</span>
        </div>
      </section>

      {!locked && hasStageUser && stageCompleted && 
      <section className="completed-section">
        <h3>Estágio Completo!</h3>
        <span className="subtext-locked">
          {"Você completou todas as atividades obrigtórias desse estágio." + ((stage.status === "completed") ? "" : " Finalize-o agora mesmo!")}
        </span>
        {stage.status !== "completed" &&
          <div className="start-btn"><SubmitButton onClick={(e) => handleFinish(e)}>Finalizar Estágio</SubmitButton></div>
        }
      </section>
      }

      {!locked && hasStageUser && 
      <section className="activities-section">
        <div className="activities-tabs"> 
          <span className={selectedTab === "all" ? "selected" : ""} onClick={() => handleTabChange("all")}>Todas</span>
          <span className={selectedTab === "finalized" ? "selected" : ""} onClick={() => handleTabChange("finalized")}>Finalizadas</span>
          <span className={selectedTab === "started" ? "selected" : ""} onClick={() => handleTabChange("started")}>Iniciadas</span>
          <span className={selectedTab === "pending" ? "selected" : ""} onClick={() => handleTabChange("pending")}>Pendentes</span>
          <span className={selectedTab === "analysis" ? "selected" : ""} onClick={() => handleTabChange("analysis")}>Em Análise</span>
          <div className="line"></div>
        </div>
        <div className="search-input">
          <SearchInput label="Buscar" value={search} onChange={(e) => {setSearch(e.target.value); handleSearch(e.target.value)}} />
        </div>
        <table className="table-container">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Status</th>
              <th>Nota</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {activitiesFilter.map(activity => (
              <tr key={activity.id} 
                className={expandIndex === activity.id? 'expand' : 'hide'}
                onClick={() => setExpandIndex(expandIndex === activity.id ? 0 : activity.id)}
              >
                <td className="table-item">{activity.name}</td>
                <td className="table-item">{getActivityType(activity.activityType.name)}</td>
                <td className="table-item">
                  <div className="category">
                    {activity.category ? activity.category.name : ""}
                  </div>
                </td>
                <td className="table-item">{getActivityStatus(activity.status)}</td>
                <td className="table-item">{activity.activityUsers[0]?.activityFeedback?.score ? activity.activityUsers[0].activityFeedback?.score : '-'}</td>
                <td>
                  {expandIndex === activity.id && (
                  <FaAngleUp className="arrow" />
                  )}
                  {expandIndex !== activity.id && (
                  <FaAngleDown className="arrow" />
                  )}
                  {activity.mandatory &&
                  <Tooltip title="Atividade Obrigatória">
                    <span><FaExclamation className="exclamation" /></span>
                  </Tooltip>
                  } 
                  {activity.locked &&
                  <Tooltip title="Atividade Bloqueada">
                    <span><FaLock className="lock hover-text" dataHover="Bloqueada" /></span>
                  </Tooltip>
                  }
                </td>
                <td className="expandable-cell">
                  <div className="description-div">
                    <p><b>Descrição: </b>{activity.description}</p>
                    <div className="btns-expand">
                      <SubmitButton>Ver Mais</SubmitButton>
                    </div>
                  </div>
                </td>
              </tr>
              ))}
          </tbody>
        </table>
      </section>
      }

      {!locked && !hasStageUser &&
      <section className="not-started-section">
        <h3>Estágio Liberado! <FaLockOpen /></h3>
        <span className="subtext-locked">Comece agora mesmo as atividades deste estágio.</span>
        <div className="start-btn"><SubmitButton onClick={(e) => handleStart(e)}>Iniciar Estágio</SubmitButton></div>
      </section>
      }


      { locked &&
      <section className="locked">
        <h3>Estágio Bloquado <FaLock /></h3>
        <span className="subtext-locked">Complete os estágios abaixo para desbloquear</span>
        <div className="locked-stages-btns">
          {stage.requirements.map(requirement => (
            <button className="requirement-button" key={requirement.id}
            onClick={() => navigate(`/stage/${requirement.id}`)}
            >{requirement.name}</button>
          ))}
        </div>
      </section>
      }
    </Container>
  )
}

export default ActivityIndexPage