export function formatDate(d){ if(!d) return ''; const dt=new Date(d); return dt.toISOString().slice(0,10); }
