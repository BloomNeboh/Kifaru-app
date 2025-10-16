import React, { useEffect, useState } from 'react';
import api from '../api/api';
export default function AccommodationSelector({ onSelect }){
  const [list, setList] = useState([]);
  useEffect(()=>{ api.get('/accommodations').then(r=>setList(r.data)).catch(()=>{}); },[]);
  return (<div>
    <h3>Choose Accommodation</h3>
    <ul>{list.map(a=> (<li key={a._id}><button onClick={()=>onSelect(a)}>{a.name} — ${a.pricePerNight}</button></li>))}</ul>
  </div>);
}
