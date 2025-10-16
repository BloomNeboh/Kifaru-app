import React, {useState} from 'react';
import api from '../api/api';
export default function Register({onRegister}){
  const [name,setName]=useState(''),[email,setEmail]=useState(''),[password,setPassword]=useState('');
  async function submit(e){ e.preventDefault(); try{ const r=await api.post('/auth/register',{name,email,password}); localStorage.setItem('token', r.data.token); onRegister(r.data.user); }catch(err){alert('register failed')} }
  return (<form onSubmit={submit}><h3>Register</h3><input value={name} onChange={e=>setName(e.target.value)} placeholder='name'/><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/><input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/><button>Register</button></form>);
}
