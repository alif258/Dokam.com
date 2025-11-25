import './App.css'
import Home from './components/pages/Home'
import RootLayOut from './components/layout/RootLayOut'
import { Routes, Route } from 'react-router-dom'
import Features from './components/pages/Features'
import Modules from './components/pages/Modules'
import Themes from './components/pages/Themes'
import MobileApps from './components/pages/MobileApps'
import Demo from './components/pages/Demo'
import Resource from './components/pages/Resource'
import Plugins from './components/pages/Plugins'
import Pricing from './components/pages/Pricing'


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home/>} />
          <Route path="features" element={<Features />} />
          <Route path="modules" element={<Modules />} />
          <Route path="themes" element={<Themes />} />
          <Route path="mobile-apps" element={<MobileApps />} />
          <Route path="demo" element={<Demo />} />
          <Route path="resource" element={<Resource />} />
          <Route path="plugins" element={<Plugins />} />
          <Route path="pricing" element={<Pricing />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
