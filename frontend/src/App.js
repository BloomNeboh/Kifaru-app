import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItineraryBuilder from './components/ItineraryBuilder';
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';
import FounderSection from './components/FounderSection';
export default function App(){ return (<Router><ThemeToggle/><NavBar/><FounderSection/><Routes><Route path='/' element={<ItineraryBuilder/>}/><Route path='/about' element={<AboutUs/>}/></Routes></Router>); }
