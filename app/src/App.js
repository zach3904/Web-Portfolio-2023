import styles from './App.module.css'
import '../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import { useState } from 'react'
import {Work, About, Experience} from './pages'
import clsx from 'clsx'
import LinkedInIcon from './components/icons/linkedin-icon'
import GithubIcon from './components/icons/github-icon'
import CameraIcon from './components/icons/camera-icon'

const PAGES = {
  work: Work,
  about: About,
  experience: Experience
}

function App() {
	const [currentPage, setCurrentPage] = useState(() => 'work')
  const [nextPage, setNextPage] = useState('work')
  
  const startPageChange = (e) => {
    e.preventDefault()
    const pageName = e.target.text
    
    // TODO: update url somehow. Or maybe switch to #pageName.
    setNextPage(pageName)
  }

  const contentClasses = clsx({
    [styles.content]: true,
    [styles.fadeOut]: currentPage.toLowerCase() !== nextPage
  })

  const CurrentPageComponent = PAGES[currentPage]
	
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
          </ul>
          <div className={styles.secondaryLinks}>
            <div className={styles.secondaryLinkContainer}>
              <a href="http://www.linkedin.com/in/zachary-richards-94a04720" title="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
            <div className={styles.secondaryLinkContainer}>
              <a href="https://github.com/zach3904/Web-Portfolio-2023" target="_blank" title="Portfolio Github">
                <GithubIcon />
              </a>
            </div>
            <div className={styles.secondaryLinkContainer}>
              <a href="http://zrichards.photography" target="_blank" title="ZRichards Photography">
                <CameraIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={contentClasses} onTransitionEnd={() => setCurrentPage(nextPage)}>
        <CurrentPageComponent />
      </div>
    </div>
  );
}

export default App
