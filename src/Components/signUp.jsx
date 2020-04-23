import React, {Component} from 'react'
// import Classes from './signUp.module.css'
import PropTypes from 'prop-types'
import MainForm from './mainForm'

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
};

class SignUp extends Component {

    state= {
        values : initValues,
        agreement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAgreement = event => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const {isValid,errors} = this.validate()

        if(isValid){
            this.props.createUser(this.state.values)
            console.log(this.state.values)
            event.target.reset()
            this.setState({values : initValues, agreement: false, errors: {}})
        }else{
            this.setState({errors})
            console.log(errors)
        }

        
    }

    validate = () => {
        const errors = {};
        const { values:{name, email, password, birthDate, gender} } = this.state;

        if(!name){
            errors.name = "Please Enter Your Name";
        }

        if(!email){
            errors.email = "Please Enter Your Email";
        }

        if(!password){
            errors.password = "Please Enter Your Password";
        }

        if(!birthDate){
            errors.birthDate = "Please Select Your Birth Date";
        }

        if(!gender){
            errors.gender = "Please Select Your Gender";
        }

        return{
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Sign Up Form</h1>
                <MainForm
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleAgreement={this.handleAgreement}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignUp.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SignUp