import { Container } from "./styles";
import SubmitButton from "../../components/SubmitButton";
import SubmissionModal from "../../components/SubmissionModal";
import { useParams, useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";

import { api } from "../../services/api"
import { fileUrl } from "../../services/files"

import { useState, useEffect, useCallback } from "react";

const ActivityPage = () => {

  let { id } = useParams();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState('details')
  const [activity, setActivity] = useState({})
  const [activityUser, setActivityUser] = useState({})
  const [modal, setModal] = useState(false)

  const fetchStage = useCallback((actId) => {
    api.get(`activity/my/${actId}`).then((response) => {
      setActivity(response.data.activity)
      setActivityUser(response.data.activityUser)
    })
  }, []);

  useEffect(() => {
    fetchStage(id)
  }, [id, fetchStage])

  const getActivityType = (type) => {
    switch(type){
      case 'Practical': return 'Prática'
      case 'Social': return 'Social'
      case 'Theorical': return 'Teórica'
      default: return 'Evento'
    }
  }

  const handleFinalize = () => {
    if(activity.activityTypeId === 14) {
      setModal(true)
    } else {
      api.post(`activity/finish/${id}`)
      .then(() => {
        fetchStage(id)
        navigate(`/activity/${id}`)
      })
    }
  }

  const handleStart = () => {
    api.post(`activity/start/${id}`)
    .then(() => {
      fetchStage(id)
      navigate(`/activity/${id}`)
    })
  }


  const getStatusColor = (status) => {
    switch(status){
      case 'started': return '#899226'
      case 'completed': return '#3B7520'
      case 'not-started': return '#899226'
      case 'pending-feedback': return '#899226' 
      case 'rejected': return '#980012'
      default: return '#3B7520'
    }
  }

  const getStatus = (status) => {
    switch(status){
      case 'started': return 'Iniciada'
      case 'completed': return 'Finalizada'
      case 'not-started': return 'Não Iniciada'
      case 'pending-feedback': return 'Feedback Pendente' 
      case 'rejected': return 'Reprovado'
      default: return 'Aprovado'
    }
  }

  const formatDate = (d) => {
    d = new Date(d);
    return + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + " às " + d.getHours() + ":" + d.getMinutes();
  }

  return (
    <Container statusColor={getStatusColor(activity.status)}>

      {modal && <SubmissionModal actId={id} setModal={setModal} fetchStage={fetchStage} />}

      <section className='header'>
        <h1>{activity.name}</h1>
        <h2>{activity.stage?.name}</h2>
      </section>

      <section className='activity-area'>
        <div className="tabs"> 
          <span className={selectedTab === "details" ? "selected" : ""} onClick={() => setSelectedTab("details")}>Detalhes</span>
          {activityUser?.activitySubmission && activity.activityTypeId === 14 &&
            <span className={selectedTab === "submission" ? "selected" : ""} onClick={() => setSelectedTab("submission")}>Minha Submissão</span>
          }
          {activityUser?.activityFeedback?.userId && activity.activityTypeId === 14 &&
            <span className={selectedTab === "feedback" ? "selected" : ""} onClick={() => setSelectedTab("feedback")}>Feedback</span>
          }
          <div className="line"></div>
        </div>
        
        {selectedTab === "details" && 
          <div className="activity-box">
            <div className="activity-item">
              <span className="box-title">Tipo de Atividade:</span>
              <span className="box-content">{getActivityType(activity.activityType?.name)}</span>
            </div>
            <div className="activity-item">
              <span className="box-title">Categoria:</span>
              <span className="box-content">{activity.category?.name}</span>
            </div>
            <div className="activity-item">
              <span className="box-title">Obrigatória:</span>
              <span className="box-content">{activity.mandatory? 'Sim' : 'Não'}</span>
            </div>
            <div className="activity-item">
              <span className="box-title">Descrição:</span>
              <span className="box-content">{activity.description}</span>
            </div>
            {activity.file &&
              <div className="activity-item">
              <span className="box-title">Arquivo anexado:</span>
              <a className="box-link" href={`${fileUrl.defaults.baseURL + activity.file}`} target="_blank" rel="noreferrer">Acessar</a>
            </div>
            }
          </div>
        }

        {selectedTab === "submission" && 
          <div className="activity-box">
            <div className="activity-item">
              <span className="box-title">Data de Início:</span>
              <span className="box-content">{formatDate(activityUser?.dateStarted)}</span>
            </div>
            <div className="activity-item">
              <span className="box-title">Data de Término:</span>
              <span className="box-content">{formatDate(activityUser?.dateCompleted)}</span>
            </div>
            {activityUser?.activitySubmission?.file &&
              <div className="activity-item">
                <span className="box-title">Submissão:</span>
                <a className="box-link" href={`${fileUrl.defaults.baseURL + activityUser?.activitySubmission?.file}`} target="_blank" rel="noreferrer" >Acessar arquivo</a>
              </div>
            }
            <div className="activity-item">
              <span className="box-title">Descrição:</span>
              <span className="box-content">{activityUser?.activitySubmission?.description}</span>
            </div>
          </div>
        }

        {selectedTab === "feedback" && 
          <div className="activity-box">
            <div className="activity-item">
              <span className="box-title">Feedback:</span>
              <span className="box-content">{activityUser?.activityFeedback?.description}</span>
            </div>
            <div className="activity-item">
              <span className="box-title">Corrigido por:</span>
              <span className="box-content">{activityUser?.activityFeedback?.user?.name}</span>
            </div>
          </div>
        }
      </section>
      
      {activity.locked === false && 
      <section className="bottom-area">
        { activity.status === 'not-started' &&
        <SubmitButton color="light-blue" className="submit-button" onClick={() => handleStart()}>Iniciar Atividade</SubmitButton> 
        }
        { activity.status === 'started' &&
        <SubmitButton className="submit-button" onClick={() => handleFinalize()}>Finalizar Atividade</SubmitButton>
        }
        <div className="grade-section">
          { activity.activityTypeId === 14 &&
            <>
            <span className="grade-title">Nota: <b>{activityUser?.activityFeedback?.score? activityUser.activityFeedback?.score + "/10" : '-' }</b></span>
            <div className="grade-line"></div>
            </>
          }
          <p>Status: <span className="grade-status">{getStatus(activity.status)}</span></p>
          { activity.activityTypeId !== 14 &&
          <div className="grade-line"></div>
          }
        </div>
      </section>
      }

      {activity.locked === true &&
      <section className="locked">
        <h3>Atividade Bloquada <FaLock /></h3>
        <span className="subtext-locked">Complete as atividades abaixo para desbloquear</span>
        <div className="locked-activities-btns">
          {activity.requirements.map(requirement => (
            <button className="requirement-button" key={requirement.id}
            onClick={() => navigate(`/activity/${requirement.id}`)}
            >{requirement.name}</button>
          ))}
        </div>
      </section>
      }
    </Container>
  )
}

export default ActivityPage