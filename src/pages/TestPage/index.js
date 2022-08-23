import { AdminSidebar } from "../../components/AdminSidebar"
import { useUserContext } from "../../contexts/useUserContext";

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
      <AdminSidebar />
    </div>
  )
}

export default TestPage