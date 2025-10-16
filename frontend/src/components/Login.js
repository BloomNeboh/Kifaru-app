import React, {useState} from 'react';
import api from '../api/api';
export default function Login({onLogin}){
  const [email,setEmail]=useState(''),[password,setPassword]=useState('');
  async function submit(e){ e.preventDefault(); try{ const r=await api.post('/auth/login',{email,password}); localStorage.setItem('token', r.data.token); onLogin(r.data.user); }catch(err){alert('login failed')}}
  return (<form onSubmit={submit}><h3>Login</h3><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email'/><input type='password' value={password} onChange={e=>setPassword(e.target.value)} placeholder='password'/><button>Login</button></form>);
}
