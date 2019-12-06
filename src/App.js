import React, { Component } from 'react'
import './App.css';

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // regular expression for email validation
const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      reenterpassword: '',
      formErrors: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        reenterpassword: '',
      },
      comp :{
          email:'harish.sq@gmail.com',
         password:12345678,
      }
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state.formErrors)) {
      console.log(`
      --SUBMITTING--
      First Name : ${this.state.firstName}
      Last Name : ${this.state.lastName}
      Email : ${this.state.email}
      Password : ${this.state.password}
      Re Enter Password:${this.state.reenterpassword}
      `)
      }
    }
  
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    let valemail = this.state.comp.email;
    let valpassword = this.state.comp.password;
    let password = this.state.password;


    
    let reenterpassword = this.state.reenterpassword;
    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Invalid email id';
        break;
      case 'password':
        formErrors.password =  value.length < 6 ?  '' : 'password should be more than 6';
        break;
      case 'reenterpassword':
        formErrors.reenterpassword = password !== reenterpassword ? '' : 'password does not match';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    console.log(password);
    console.log(valpassword);
    console.log(valemail);
    console.log(this.state.reenterpassword);
  }
  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className={formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name" name="firstName" noValidate onChange={this.handleChange} />
                {formErrors.firstName.length > 0 && (
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </div>
              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name" name="lastName" noValidate onChange={this.handleChange} />
                {formErrors.lastName.length > 0 && (
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" className={formErrors.email.length > 0 ? "error" : null} placeholder="Email" name="email" noValidate onChange={this.handleChange} />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Password" name="password" noValidate onChange={this.handleChange} />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Re-Enter Password</label>
                <input type="password" className={formErrors.reenterpassword.length > 0 ? "error" : null} placeholder="Re-Enter Password" name="reenterpassword" noValidate onChange={this.handleChange} />
                {formErrors.reenterpassword.length > 0 && (
                  <span className="errorMessage">{formErrors.reenterpassword}</span>
                )}
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <a>Already have a Account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

