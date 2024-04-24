
import './contadordetasks.css'

interface Contador{
    placeholder?: string;
    value?: string;
    class?: string;
}

function contadordetasks(props: Contador) {

    return(
        <h2 className="count">{props.value}</h2>
    );
}

export default contadordetasks;