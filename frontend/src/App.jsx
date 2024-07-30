import Aluno from "./views/Alunos"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Aluno />
      </div>
    </>
  )
}

export default App