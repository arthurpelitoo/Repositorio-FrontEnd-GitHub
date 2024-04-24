import { ReactNode } from "react"
import './MyButton.css'

interface Props{
    class?: string;
    children?: ReactNode;
    onClick?: () => void;
}

function MyButton(props: Props){
    return(
        <div className="botaozin">
            <button className={props.class} onClick={props.onClick}>{props.children}</button>
        </div> 
    )
}

export default MyButton