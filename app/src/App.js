import styles from './App.module.css'
import { useState } from 'react'
import {Work, About, Contact} from './pages'
import clsx from 'clsx'
import LinkedInIcon from './components/icons/linkedin-icon'

const PAGES = {
  work: Work,
  about: About,
  contact: Contact
}

function App() {
  // const pathname = window.location.pathname

	const [CurrentPage, setCurrentPage] = useState(() => PAGES['work'])
  const [nextPage, setNextPage] = useState('work')

  const startPageChange = (e) => {
    e.preventDefault()
    const pageName = e.target.text
    router.replace(`/${pageName}`)
    setNextPage(pageName)
  }

  const contentClasses = clsx({
    [styles.content]: true,
    [styles.fadeOut]: CurrentPage.name.toLowerCase() !== nextPage
  })
	
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarContainer}>
          <header className={styles.mainHeader}>
            ZACH<br />
            RICHARDS
          </header>
          <ul className={styles.nav}>
            {Object.keys(PAGES).map((page) => (
              <li key={page}>
                <a href={`#${page}`} onClick={startPageChange}>{page}</a>
              </li>
            ))}

            {/* <li>
              <a href="http://zrichards.photography" target="_blank"><span className={`material-icons ${styles.icon}`}>open_in_new</span> Photography</a>
            </li> */}
            <div className={styles.navIcons}>
              <LinkedInIcon /> LinkedIn
              Github
              Photography
            </div>
          </ul>
        </div>
      </div>

      <div className={contentClasses} onTransitionEnd={() => setCurrentPage(() => PAGES[nextPage])}>
        <CurrentPage />
      </div>
    </div>
  );
}

export default App
