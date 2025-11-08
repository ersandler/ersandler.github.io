// Import React Router for client-side routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Layout component - wraps all pages with Sidebar + Header
import Layout from './components/layout/Layout'

// Import page components
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Personal from './pages/Personal'
import Monologue from './pages/Monologue'
import MonologueDetail from './pages/MonologueDetail'

function App() {
  return (
    // BrowserRouter enables client-side routing
    <BrowserRouter>
      {/* Layout wraps all pages */}
      <Layout>
        {/* Routes defines which component to render based on URL */}
        <Routes>
          {/* Home page at root path */}
          <Route path="/" element={<Home />} />

          {/* Projects page */}
          <Route path="/projects" element={<Projects />} />

          {/* Individual project detail pages */}
          <Route path="/projects/:id" element={<ProjectDetail />} />

          {/* Personal/About page */}
          <Route path="/personal" element={<Personal />} />

          {/* Monologue/Blog listing page */}
          <Route path="/monologue" element={<Monologue />} />

          {/* Individual monologue detail pages */}
          <Route path="/monologue/:id" element={<MonologueDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
