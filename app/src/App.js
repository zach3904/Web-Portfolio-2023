import styles from './App.module.css'
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
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <div>
          <header className={styles.mainHeader}>
            ZACH<br />
            RICHARDS
          </header>
          <ul className={styles.nav}>
            {Object.keys(PAGES).map((page) => (
              <li key={page}>
                <a href="#" onClick={handlePageChange}>{page}</a>
              </li>
            ))}
            <li>
              <a href="http://zrichards.photography" target="_blank"><span className={`material-icons ${styles.icon}`}>open_in_new</span> Photography</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.content}>
				<CurrentPage />
      </div>
    </div>
  );
}

export default App
