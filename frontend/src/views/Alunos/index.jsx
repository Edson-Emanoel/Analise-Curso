import './styles.css';

import { useState } from 'react'

import { toast } from 'react-toastify';

function Aluno() {
    const [nome, setNome] = useState("")
    const [sexo, setSexo] = useState("")
    const [serie, setSerie] = useState("")

    const validarCampos = (e) => {
        e.preventDefault()

        if (!nome){
            toast.error("Preencha o Campo de Nome")
        }else if (!sexo || sexo === "Selecione o Sexo"){
            toast.error("Preencha o Campo de Sexo")
        }else if (!serie){
            toast.error("Preencha o Campo de Serie")
        }else {
            toast.success("Cadastrado com Sucesso!")
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>Alunos</h2>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form className="d-flex flex-column gap-2 mb-3" onSubmit={validarCampos}>
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" className="form-control" id="nome" placeholder="Nome do Aluno"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>

                                <div className="col">
                                    <label htmlFor="sexo">Sexo</label>
                                    <select id="sexo" className="form-control"
                                        value={sexo}
                                        onChange={(e) => setSexo(e.target.value)} 
                                    >
                                        <option value="x" selected={true}>Selecione o Sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>
                                </div>

                                <div className="col">
                                    <label htmlFor="serie">Serie</label>
                                    <input type="text" className="form-control" id="serie" placeholder="Serie do Aluno"
                                        value={serie}
                                        onChange={(e) => setSerie(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-success btn-form">Adicionar Aluno</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="table">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th width="100" className='text-center'>Código</th>
                                    <th className='text-center'>Aluno</th>
                                    <th width="100" className='text-center'>Sexo</th>
                                    <th width="100" className='text-center'>Serie</th>
                                    <th width="200" className="text-center">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marcos</td>
                                    <td>Masculino</td>
                                    <td>8º A</td>
                                    <td className="text-center d-flex justify-content-center gap-1 btn-table">
                                        <button className="button btn btn-warning">Editar</button>
                                        <button className="button btn btn-danger">Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Edson</td>
                                    <td>Masculino</td>
                                    <td>9º E</td>
                                    <td className="text-center d-flex justify-content-center gap-1 btn-table">
                                        <button className="button btn btn-warning">Editar</button>
                                        <button className="button btn btn-danger">Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Maria</td>
                                    <td>Feminino</td>
                                    <td>7º A</td>
                                    <td className="text-center d-flex justify-content-center gap-1 btn-table">
                                        <button className="button btn btn-warning">Editar</button>
                                        <button className="button btn btn-danger">Deletar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aluno;