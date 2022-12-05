import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardComponent from './components/dashboard/DashboardComponent';
import TopBar from './components/TopBar/TopBar'

export default function App() {

      
      return (
            <>

                  <BrowserRouter>
                  <TopBar/>

                        <Routes>
                              <Route path="/" element={<DashboardComponent />} />
                        </Routes>
                  </BrowserRouter>
                  </>

      )

}