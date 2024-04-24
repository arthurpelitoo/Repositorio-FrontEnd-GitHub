import { useState } from 'react';
import MyButton from './components/MyButton'
import MyInput from './components/MyInput'

function App() {
  
  const [items, setItems] = useState([''])

  const handleOnClick = () => {
    setItems([...items, "Item " + items.length])
  }
  
  return (
    <>
      <MyInput 
      type='text' 
      placeholder='Usuário' 
      bgColor='red'/>

      <MyInput 
      type='password' 
      placeholder='Senha' 
      bgColor='#f0f0f0'/>

      <MyButton onClick={handleOnClick}><p>Ok</p></MyButton>

      {items.length > 0 && (
        <div className='items-container'>
          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </>
  )
}

export default App
