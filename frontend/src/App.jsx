import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/login-form.jsx';
import { SignupForm } from './components/signup-form.jsx';
import CampusPage from './components/campus.jsx';
import Hostels  from './components/Hostels.jsx';
import HostelDetail from './components/HostelDetail.jsx'
import AddHostel from './components/addHostel.jsx';

import Layout from './layouts/layout.jsx'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/hostels' element={<Layout>
          <Hostels/>
        </Layout>}/>
        <Route path='/hostel/:id' element={<Layout>
          <HostelDetail/>
        </Layout>}/>
        <Route path='/sign-in' element={<Layout>
          
          <LoginForm />
        </Layout>}/>
        <Route path='/sign-up' element={<Layout>
          
          <SignupForm />
        </Layout>}/>

        <Route path='/c' element={<Layout>
          <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
        </Layout>}/>

        <Route path='/add' element={<Layout>
          <AddHostel/>
        </Layout>}/>

        <Route path='/' element={<Layout>
          <CampusPage />
        </Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
