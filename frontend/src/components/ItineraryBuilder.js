import React,{useState} from 'react';
import api from '../api/api';
import ItineraryPreview from './ItineraryPreview';
export default function ItineraryBuilder(){ const [form,setForm]=useState({name:'',destinations:'',startDate:'',endDate:'',travelers:1}); const [it,setIt]=useState(null);
  const handle=(e)=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async(e)=>{e.preventDefault(); const res=await api.post('/itineraries/generate',form).catch(()=>null); if(res) setIt(res.data); };
  return (<div className='p-8'><form onSubmit={submit}><input name='name' onChange={handle} placeholder='Name' className='border p-2'/><button type='submit'>Generate</button></form>{it&&<ItineraryPreview itinerary={it}/>}</div>); }
