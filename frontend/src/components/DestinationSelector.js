import React, { useEffect, useState } from 'react';
import api from '../api/api';
export default function DestinationSelector({ onChange }){
  const [list, setList] = useState([]);
  useEffect(()=>{ api.get('/destinations').then(r=>setList(r.data)).catch(()=>{}); },[]);
  return (<div>
    <h3>Destinations</h3>
    <select onChange={e=>onChange(e.target.value)}><option value=''>--select--</option>{list.map(d=>(<option key={d._id} value={d.name}>{d.name}</option>))}</select>
  </div>);
}
