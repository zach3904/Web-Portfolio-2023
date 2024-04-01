import React, { useState, useEffect } from 'react'
import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'
import { scroller } from 'react-scroll'

function Work() {
  // add linkability to slides with icon, but dont add to history when scrolling
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleChangeSlide = direction => {
    // needs event throttle
    let nextSlide
    
    if (direction === 'up' && currentSlide > 0) {
      nextSlide = currentSlide - 1
    } else if (direction === 'down' && currentSlide < workContent.length - 1) {
      nextSlide = currentSlide + 1
    } else {
      return false
    }

    scroller.scrollTo(workContent[nextSlide].title, {
      smooth: 'easeInOutQuint',
      delay: 50,
      offset: -32,
      duration: 500
    })
    setCurrentSlide(nextSlide)
  }

  useEffect(() => {
    window.addEventListener('keydown', event => {
      
      switch (event.key) {
        case 'ArrowUp': 
          handleChangeSlide('up')
          break

        case 'ArrowDown':
          handleChangeSlide('down')
          break

        default:
          break
      }
    })
  }, [currentSlide])
  
	return (
    <>
      <ul className={styles.workList}>
        {workContent.map((workItem, i) => (
          <li key={workItem.title}>
            <WorkItem
              {...workItem}
              setCurrentSlide={setCurrentSlide}
              slideNumber={i}
            />
          </li>
        ))}
      </ul>
      <div className={styles.prevNextArrows}>
        <div><span>{currentSlide + 1}</span> / <span>{workContent.length}</span></div>
        <a onClick={() => handleChangeSlide('up')} className={currentSlide === 0 ? 'disabled' : undefined}>
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_up</span>
        </a>
        <a onClick={() => handleChangeSlide('down')} className={currentSlide >= workContent.length - 1 ? 'disabled' : undefined}>
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_down</span>
        </a>
      </div>
    </>
	)
}

export default Work