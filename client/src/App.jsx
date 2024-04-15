import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Dashboard from '../src/pages/Dashboard'
import Projects from '../src/pages/Projects'
import Header from '../src/component/Header'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
 
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  )
}

