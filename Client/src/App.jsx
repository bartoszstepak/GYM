import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashboardComponent from './components/dashboard/DashboardComponent';

export default function App() {

      
      return (
            <div>
                  <BrowserRouter>
                        <Routes>
                              <Route path="/" element={<DashboardComponent />}></Route>
                        </Routes>
                  </BrowserRouter>
            </div>
      )

}