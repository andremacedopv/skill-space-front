import { Container } from './styles'

import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import {AiOutlineClose} from 'react-icons/ai'
import FormInput from '../FormInput'
import { api } from "../../services/api"
import SubmitButton from '../SubmitButton'


const SubmissionModal = ({actId, setModal, fetchStage, ...props}) => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [desc, setDesc] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('description', desc);
    api.post(`activity/finish/${actId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      setModal(false)
      fetchStage(actId)
      navigate(`/activity/${actId}`)
    })
  }

  return (
    <Container> 
      <div className="modal-box"> 
        <AiOutlineClose className="close-button" onClick={() => {setModal(false)}}/>
        <h1 className='modal-title'> Submissão - Resenha A República </h1>
        <p>Descrição</p>
        <textarea className="text-submission" placeholder="Nome" name="name" type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <p>Arquivo de Submissão</p>
        <FormInput label="Arquivo" name="file" type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <div className='buttons-container'>
          <SubmitButton onClick={(e) => handleSubmit(e)} color="light-blue">Enviar</SubmitButton>
        </div>
      </div>
    </Container>
  )
}

export default SubmissionModal
