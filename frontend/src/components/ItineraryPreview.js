import React from 'react';
export default function ItineraryPreview({itinerary}){ return (<div className='p-4'><h3>{itinerary.name}</h3><pre>{JSON.stringify(itinerary.packageDetails,null,2)}</pre></div>); }
