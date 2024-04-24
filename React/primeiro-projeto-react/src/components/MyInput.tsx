import { ChangeEvent } from 'react';
import './MyInput.css'

interface Props{
    class?: string;
    type: string;
    placeholder?: string;
    value?: string;
    bgColor?: string;

    onChange?: (e : ChangeEvent<HTMLInputElement>) => void;
}

function MyInput(props: Props) {

    return(
        <div className='textbox'>
            <input 
            className={props.class}
            type= {props.type}
            placeholder = {props.placeholder}
            onChange={props.onChange}
            value={props.value}
            />
        </div>
    );
}

export default MyInput