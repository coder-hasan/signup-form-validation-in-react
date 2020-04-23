import React from 'react'
import PropTypes from 'prop-types'
import InputForm from './inputField'

const MainForm = ({values, agreement, errors, handleChange, handleAgreement, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <InputForm
                name="name"
                label="Name"
                placeholder="Enter Your Name"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
            />
            <InputForm
                name="email"
                type="email"
                label="Email"
                placeholder="Enter Your Email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <InputForm
                name="password"
                type="password"
                label="Password"
                placeholder="Enter Your Password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <InputForm
                name="birthDate"
                type="date"
                label="Birth Date"
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />
            <div className="form-group">
                <label className="form-group mr-4">
                    <input className="mr-2" type="radio" name="gender" value="Male" onChange={handleChange}/>
                    Male
                </label>
                <label className="form-group mr-4">
                    <input className="mr-2" type="radio" name="gender" value="Female" onChange={handleChange}/>
                    Female
                </label>
                <label className="form-group mr-4">
                    <input className="mr-2" type="radio" name="gender" value="Other" onChange={handleChange}/>
                    Other
                </label>
                {errors.gender && <div className="text-danger">{errors.gender}</div>}
            </div>
            <div className="form-group">
                <label>
                    <input className="mr-2" type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement}/>
                    I agreed terms & Conodition
                </label>
            </div>
            <button className="btn btn-success" type="submit" disabled={!agreement}>Create User</button>
        </form>
    )
}

MainForm.propTypes = {
    values : PropTypes.object.isRequired,
    agreement : PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange : PropTypes.func.isRequired,
    handleAgreement : PropTypes.func.isRequired,
    handleSubmit : PropTypes.func.isRequired
}

export default MainForm