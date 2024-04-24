import { ChangeEvent, useState } from 'react'
import Person from '../../components/Person';
import './Firstpag.css'
import Contadordetasks from '../../components/Contadordetasks';

function Firstpag() {

  const[items, setItems] = useState<string[]>([]);
  const[newItem, setNewItem] = useState(''); 

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    setNewItem(e.target.value);
  }

  const handleFormSubmit = () => {

    if(newItem.length > 0){
        setItems([...items, newItem]);
        setNewItem("");
    } else{
      alert('nao é possivel adicionar um novo item sem descrição')
    }
  };

    return (
        <>
            <div className='body'>
                <div className='App'>
                    <Person
                    
                    onButtonClick={handleFormSubmit}
                    onInputChange={handleOnInputChange}
                    inputValue={newItem.length > 0 ? newItem : ""}
                    />

                </div>

                <div className='contador'>
                    <h2>""</h2>
                    <Contadordetasks value={items.length.toString()}          
                    />
                </div>

                <div className='vamopula'>
                    {items.length > 0 && (
                            <div className='items-container'>
                                {items.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        )}
                </div>
            </div>
        </>
    )

}

export default Firstpag