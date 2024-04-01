import React, { useState, useEffect } from 'react'
import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'
import { Element, scroller } from 'react-scroll'
import clsx from 'clsx'

function Work() {
  // add linkability to slides with icon, but dont add to history when scrolling
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleChangeSlide = direction => {
    // needs event throttle
    let nextSlide
    
    if (direction === 'up' && currentSlide > 1) {
      console.log('up')
      nextSlide = currentSlide - 1
    } else if (direction === 'down' && currentSlide < workContent.length - 1) {
      console.log('down')
      nextSlide = currentSlide + 1
    } else {
      return false
    }

    scroller.scrollTo(workContent[nextSlide].title, {
      smooth: 'easeInOutQuint',
      delay: 25,
      offset: -32,
      duration: 500
    })
    setCurrentSlide(nextSlide)
  }

  useEffect(() => {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          handleChangeSlide('up')
          break

        case 'ArrowDown':
          event.preventDefault()
          handleChangeSlide('down')
          break

        default:
          break
      }
    })
  }, [])
  
	return (
    <>
      <ul className={styles.workList}>
        {workContent.map((workItem, i) => (
          <Element name={workItem.title}>
            <li key={workItem.title} >
              <WorkItem
                {...workItem}
                setCurrentSlide={setCurrentSlide}
                slideNumber={i}
              />
            </li>
          </Element>
        ))}
      </ul>
      <div className={styles.prevNextArrows}>
        <div><span>{currentSlide + 1}</span> / <span>{workContent.length}</span></div>
        <a
          onClick={() => handleChangeSlide('up')}
          className={clsx({
            [styles.prevNextArrow]: true,
            [styles.prevNextArrowDisabled]: currentSlide === 0
          })}
        >
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_up</span>
        </a>
        <a
          onClick={() => handleChangeSlide('down')}
          className={clsx({
            [styles.prevNextArrow]: true,
            [styles.prevNextArrowDisabled]: currentSlide >= workContent.length - 1
          })}
        >
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_down</span>
        </a>
      </div>
    </>
	)
}

export default Work