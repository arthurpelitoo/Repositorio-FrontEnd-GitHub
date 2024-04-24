import { ChangeEvent } from "react";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import "./Person.css"

    //criar componente, tinha decidido antes adicionar uma foto e uns textos, porém era melhor mudar o foco. Nesse componente, foi adicionado o MyInput e o MyButton.


    interface PersonProps{
        inputValue: string;

        onButtonClick: () => void;
        onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    }

    function Person({inputValue, onButtonClick, onInputChange}: PersonProps) {
        return(

            <div className="placeholder">
                <MyInput
                class="CriaItens"
                type="text"
                placeholder="Digite algo..."
                onChange={onInputChange}
                value={inputValue}
                />
                <MyButton class="ConfirmaItens" onClick={onButtonClick}><h2>Adicionar Items</h2></MyButton>
            </div>

        );
    }
    export default Person;