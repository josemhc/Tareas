import { useState} from 'react'
import './App.css'
import PropTypes from 'prop-types'



const FirstApp = ({value}) => {

  const [counter, setCounter] = useState(value)
  const handleAdd = () => {
    setCounter(counter +1)
  }
  const handleSubs = () => {
    setCounter(counter -1)
  }
  const handleReset = (value) => {
    setCounter(value)
  }

  return (
    <>
    <h1>Counter</h1>
    <span>{counter}</span>
    <button onClick={() => handleAdd()}>+1</button>
    <button onClick={()=>handleSubs()}>-1</button>
    <button onClick={() => handleReset(value)}>reset</button>
    </>
  )
}
FirstApp.propTypes={
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired

}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  value: 0
}
export default FirstApp