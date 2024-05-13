import PropTypes from 'prop-types';
import {useState} from "react"

const FirstApp = ({title, value}) => {

  const [counter, setCounter] = useState(value);


  const sum = () => {
    setCounter(counter+1);
  }
  const res = () => {
    setCounter(counter-1);
  }
  const reiniciar = () => {
    setCounter(0);
  }

    return (
      <>
     <h1> {title} </h1>
     <span>{counter}</span>
     <button onClick={() => sum()}> +1 </button>
     <button onClick={() => res()}> -1 </button>
     <button onClick={() => reiniciar()}> Reiniciar </button>
     </>
    )
  }

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

FirstApp.defaultProps={
  title:"No hay titulo",
  value: 0
}




export default FirstApp;