import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import withAuth from '../axios/index';

const newUserAPI = "http://localhost:3000/api/auth/register";

const initialFormValues = {
  id: uuid(),
  name: '',
  user_name: '',
  email: '',
  password: '',
}

export default function AddUser(props) {
  const [user, setUser] = useState(initialFormValues);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = event => {
    withAuth().post(newUserAPI, user)
    .then(res => {
      setUser({
        ...user,
        initialFormValues
      })
    })
    .catch(err => {
      alert(err.response.data.message)
    })
  }

  return(
    <div>
      <h2>Join Us</h2>
      <form>
      <input type='text' placeholder='Name' name='name' value={user.name} onChange={handleChange}/>
      <input type='text' placeholder='Username' name='user_name' value={user.user_name} onChange={handleChange}/>
      <input type='text'placeholder='Email' name='email' value={user.email} onChange={handleChange}/>
      <input type='text'placeholder='Password' name='password' value={user.password} onChange={handleChange}/>
      <button onClick={onSubmit}>Sign Up</button>
      </form>
    </div>
  )
}

