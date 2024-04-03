import PropTypes from 'prop-types';


const FirstApp = (props) => {

    return (
      <>
     <h1> {props.title} </h1>
     <span>{props.span}</span>
     </>
    )
  }

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}



export default FirstApp;