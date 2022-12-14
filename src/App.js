//parent component
import React from 'react';
import MainLayouts from './component/Layouts/main.layouts';
import Albums from './component/Albums/main.albums';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {
  return(
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<h1>Homepage</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>Posting</h1>} />
          </Routes>
        </Router>
      {/*<Albums title="Image API" description="we fatch random image API from
      third party" />*/}
      </MainLayouts>
    </>
  )
}

export default App
