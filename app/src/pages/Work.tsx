import React, { useState, useEffect } from 'react'
import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'
import { Element, scroller } from 'react-scroll'
import clsx from 'clsx'
import Fade from '../components/animations/fade'

function Work() {
  // add linkability to slides with an icon button, but dont add to history when scrolling
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const handleChangeSlide = (direction: 'up' | 'down' | 'top') => {
    let nextSlide

    if (direction === 'up' && currentSlide > 0) {
      nextSlide = currentSlide - 1
    } else if (direction === 'down' && currentSlide !== workContent.length - 1) {
      nextSlide = currentSlide + 1
    } else if (direction === 'top') {
      nextSlide = 0
    }

    if (nextSlide) {
      scroller.scrollTo(workContent[nextSlide].title, {
        smooth: 'easeInOutQuint',
        delay: 25,
        offset: -32,
        duration: 350
      })
    }

    // setCurrentSlide(nextSlide)
  }

  useEffect(() => {
    const handleArrowKeys = event => {
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
    }

    window.addEventListener('keydown', handleArrowKeys)

    return () => {
      window.removeEventListener('keydown', handleArrowKeys);
    }
  }, [currentSlide])
  
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
        <div className={styles.prevNextArrow}>
          <a
            onClick={() => handleChangeSlide('up')}
            className={clsx({
              [styles.prevNextArrowDisabled]: currentSlide === 0
            })}
          >
            <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_up</span>
          </a>
        </div>

        <div className={styles.prevNextArrow}>
          <Fade show={currentSlide < workContent.length - 1}>
            <a onClick={() => handleChangeSlide('down')}>
              <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_down</span>
            </a>
          </Fade>
          <Fade show={currentSlide >= workContent.length - 1}>
            <a className={styles.prevNextArrow} onClick={() => handleChangeSlide('top')}>
              <div className={styles.backToTop}>
                Back to <span>TOP</span>
              </div>
            </a>
          </Fade>
        </div>
      </div>
    </>
	)
}

export default Work