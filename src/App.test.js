import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


import { shallow, mount, render } from 'enzyme';
import Login from './components/logininput';
// describe what we are testing


describe('Login Component', () => {
 
 // make our assertion and what we expect to happen 
 it('should render without throwing an error', () => {
   expect(shallow(<Login />).find('div.form-wrapper1').exists()).toBe(true)
 })
 it('renders a email input', () => {
    expect(shallow(<Login />).find('#emailtextalign').length).toEqual(1)
   })
  it('renders a password input', () => {
    expect(shallow(<Login />).find('#outlined-dense3').length).toEqual(1)
   })

   describe('Email input', () => {
  
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#emailtextalign').simulate('change', {target: {name: 'email', value: 'sivasakthi@gmail.com'}});
     
    expect(wrapper.state('email')).toEqual('sivasakthi@gmail.com');
    })
   })
   
   describe('Password input', () => {
    
    it('should respond to change event and change the state of the Login Component', () => {
     
     const wrapper = shallow(<Login />);
     wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

     expect(wrapper.state('password')).toEqual('cats');
    })
   })





})