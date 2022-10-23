import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardComponent from './components/dashboard/DashboardComponent';

export default function App() {

      
      return (
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<DashboardComponent />} />
                        </Routes>
                  </BrowserRouter>
      )

}