import  React from 'react'
import PropTypes from 'prop-types'

const InputForm = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className={props.error ? 'form-control my-2 is-invalid' : 'form-control my-2'}
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
        {/* {console.log(props.error)} */}
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
)

InputForm.propTypes = {
    name : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    error: PropTypes.string
}

InputForm.defaultProps = {
    type : "text",
    lavel : '',
    placeholder : ''
}

export default InputForm