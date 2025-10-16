import React, { useEffect, useState } from 'react';
import api from '../api/api';
export default function Dashboard(){
  const [bookings,setBookings]=useState([]);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token) api.get('/bookings',{ headers: { Authorization: token } }).then(r=>setBookings(r.data)).catch(()=>{});
  },[]);
  return (<div><h3>Dashboard</h3><ul>{bookings.map(b=>(<li key={b._id}>Booking: {b._id} - {b.status}</li>))}</ul></div>);
}
