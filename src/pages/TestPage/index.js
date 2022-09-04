import { AdminSidebar } from "../../components/AdminSidebar"
import { useUserContext } from "../../contexts/useUserContext";
import StageCard from "../../components/StageCard";

const TestPage = () => {

  const { user, sign_out } = useUserContext();

  const consoleUser = () => {
    console.log(user);
  }

  return (
    <div>
      <h2>{user? 'Logado' : "Não logado"}</h2>
      <button onClick={sign_out}>Sair</button>
      <button onClick={consoleUser}>Console Usuario</button>
      <StageCard name="Liberdade 1" totalQnty={14} completedQnty={13} locked={false} />
      <AdminSidebar />
    </div>
  )
}

export default TestPage