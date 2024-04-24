import { ChangeEvent, useState } from 'react';
import './App.css'
import axios from 'axios';

interface User{
  id: number;
  nome: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState("");
  const [selectedId, setSelectedId] = useState(-1);

  const handleGetUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");

    setUsers(res.data);

    alert(JSON.stringify (res.data));
  }

  const handleAddOrUpdateUser = async () => {
    if(selectedId < 0){
      await axios.post("http://localhost:8080/users",{
        nome: userName
      });

      alert(`${userName} inserido com sucesso.`);

      handleGetUsers();

      setUserName("");
    }else{
      await axios.put("http://localhost:8080/users",{
        id: selectedId,
        nome: userName
      });

      alert(`Usuário alterado com sucesso.`);

      handleGetUsers();

      setUserName("");
      setSelectedId(-1);

    }
  }

  const handleSelectUser = (id : number) => {
    const user = users.find((user : User) => user.id === id);

      if(user){
        setUserName(user.nome);
        setSelectedId(user.id);
      }

  }

  const handleDeleteUser = async (id : number) => {
    await axios.delete(`http://localhost:8080/users?id=${id}`);

    alert("Usuário removido com sucesso.");

    handleGetUsers();
  }

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <>  
    <h1>
        Gerenciador
    </h1>
    <input placeholder='nome' onChange={handleOnInputChange}
    value={userName.length > 0 ? userName : ""}/>
    <button onClick={handleAddOrUpdateUser}>Salvar</button>
    <button onClick={handleGetUsers}>Listar</button>

    <table style={{margin: "100px 0"}}>
      <tbody>
        <tr>
          <th className='idIni'>Id</th>
          <th className='nomeIni' style={{width: "500px"}}>Nome</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td className='idNum'>{user.id}</td>
            <td className='nomeUser'>{user.nome}</td>
            <td className='DeleteButton'><button onClick={() => {handleDeleteUser(user.id)}}>Remover</button></td>
            <td className='SelectButton'><button onClick={() => {handleSelectUser(user.id)}}>Alterar</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default App
