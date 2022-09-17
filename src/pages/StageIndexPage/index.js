import { Container } from "./styles";
import { useState, useEffect } from "react";
import {api} from "../../services/api";
import StageCard from "../../components/StageCard";
import SearchInput from "../../components/SearchInput";
import StageProgress from "../../components/StageProgress";

const StageIndexPage = () => {

  const [selectedTab, setSelectedTab] = useState('all')
  const [search, setSearch] = useState('')
  const [stages, setStages] = useState([])
  const [completed, setCompleted] = useState(0)
  const [started, setStarted] = useState(0)
  const [overall, setOverall] = useState(0)

  useEffect(() => {
    api.get('stage/my').then((response) => {
      setStages(response.data.stages)
      setCompleted(response.data.completed)
      setStarted(response.data.started)
      setOverall(response.data.overall)
      setStagesFilter(response.data.stages)
      console.log(response.data)
    })
  }, [])

  const [stagesFilter, setStagesFilter] = useState(stages)

  const handleSearch = (value) => {
    const filteredStages = stages.filter(stage => stage.name.toLowerCase().includes(value.toLowerCase()))
    setStagesFilter(filteredStages)
  }

  const handleTabChange = (tab) => {
    setSelectedTab(tab)
    if (tab === 'all') {
      setStagesFilter(stages)
    } else if (tab === 'completed') {
      setStagesFilter(stages.filter(stage => stage.status === "completed"))
    } else if (tab === 'unlocked') {
      setStagesFilter(stages.filter(stage => stage.locked === false))
    } else {
      setStagesFilter(stages.filter(stage => stage.locked === true))
    }
  }

  const getCompleted = () => {
    const filter = stages.filter(stage => stage.status === "completed")
    return filter.length
  }

  const getUnlocked = () => {
    const filter = stages.filter(stage => stage.locked === false)
    return filter.length
  }

  const getLocked = () => {
    const filter = stages.filter(stage => stage.locked === true)
    return filter.length
  }

  return (
    <Container>
      
      <section className="header">
        <h1>Estágios</h1>
        <StageProgress total={overall} completed={completed} started={started} />
      </section>

      <section className="info-area">
        <div className="info-item">
          <span className="info-name">Atividades</span>
          <span className="info-value">{stages.length}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Finalizadas</span>
          <span className="info-value">{getCompleted()}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Liberadas</span>
          <span className="info-value">{getUnlocked()}</span>
        </div>
        <div className="info-item">
          <span className="info-name">Não Liberadas</span>
          <span className="info-value">{getLocked()}</span>
        </div>
      </section>

      <section className="stages-section">
        <div className="stages-tabs"> 
          <span className={selectedTab === "all" ? "selected" : ""} onClick={() => handleTabChange("all")}>Todos</span>
          <span className={selectedTab === "finalized" ? "selected" : ""} onClick={() => handleTabChange("completed")}>Finalizados</span>
          <span className={selectedTab === "unlocked" ? "selected" : ""} onClick={() => handleTabChange("unlocked")}>Liberados</span>
          <span className={selectedTab === "locked" ? "selected" : ""} onClick={() => handleTabChange("locked")}>Não Liberados</span>
          <div className="line"></div>
        </div>
        <div className="search-input">
          <SearchInput label="Buscar" value={search} onChange={(e) => {setSearch(e.target.value); handleSearch(e.target.value)}} />
        </div>
        <div className="stages-container">
          { stagesFilter.map(stage => <StageCard 
            key={stage.id} 
            name={stage.name} 
            locked={stage.locked} 
            completed={stage.activitiesCompleted} 
            total={stage.activitiesTotal} 
            id={stage.id}/>) }
        </div>
      </section>
    </Container>
  )
}

export default StageIndexPage