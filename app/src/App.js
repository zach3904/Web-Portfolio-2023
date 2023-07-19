import './App.css'
import { useState } from 'react'
import {Work, About, Contact} from './pages'

const PAGES = {
  work: Work,
  about: About,
  contact: Contact
}

function App() {
	const [CurrentPage, setCurrentPage] = useState(() => Work)

  const handlePageChange = (e) => {
    e.preventDefault()
    setCurrentPage(() => PAGES[e.target.text])
  }
	
  return (
    <div className="app">
      <div className="sidebar">
        <header className="main-header">
          ZACH<br />
          RICHARDS
        </header>

        <ul className="nav">
          {Object.keys(PAGES).map((page) => (
            <li>
              <a href="#" onClick={handlePageChange}>{page}</a>
            </li>
          ))}
            
        </ul>
      </div>

      <div className="content">
				<CurrentPage />
      </div>
    </div>
  );
}

export default App
