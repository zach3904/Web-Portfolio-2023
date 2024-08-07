import React, { useState, useEffect } from 'react'
import WorkItem from '../components/work/work-item'
import styles from './Work.module.css'
import workContent from '../data/work-content'
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

    if (workContent[nextSlide]) {
      scroller.scrollTo(workContent[nextSlide].title, {
        smooth: 'easeInOutQuint',
        delay: 15,
        // offset: -32,
        duration: 150
      })
    }
  }

  useEffect(() => {
    const handleArrowKeys = event => {
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        handleChangeSlide('up')
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        handleChangeSlide('down')
      }
    }

    window.addEventListener('keydown', handleArrowKeys)

    return () => {
      window.removeEventListener('keydown', handleArrowKeys);
    }
  }, [currentSlide])
  
	return (
    <>
      <div className={styles.workList}>
        {workContent.map((workItem, i) => (
          <Element name={workItem.title} key={workItem.title} className={styles.workItemContainer}>
            <WorkItem
              {...workItem}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              slideNumber={i}
            />
          </Element>
        ))}
      </div>
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