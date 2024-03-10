import { useState, useEffect } from 'react'
import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'
import { scroller } from 'react-scroll'

function Work() {
  // add linkability to slides with icon, but dont add to history when scrolling
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const onChangeSlide = direction => {
    // needs event throttle
    let nextSlide
    
    if (direction === 'up') {
      nextSlide = currentSlide - 1
    } else if (direction === 'down') {
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
    // add up/down key listener
    console.log(currentSlide)
  }, [currentSlide])

  useEffect(() => {
    // update currentSlide while manually scrolling
  }, [])

	return (
    <>
      <ul className={styles.workList}>
        {workContent.map((workItem, i) => (
          <li key={workItem.title} name={workItem.title}>
            <WorkItem
              {...workItem}
              setCurrentSlide={setCurrentSlide}
              slideNumber={i}
            />
          </li>
        ))}
      </ul>
      <div className={styles.prevNextArrows}>
        <div><span>{currentSlide}</span> / <span>{workContent.length}</span></div>
        <a onClick={() => onChangeSlide('up')} disabled={currentSlide === 0}>
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_up</span>
        </a>
        <a onClick={() => onChangeSlide('down')} disabled={currentSlide >= workContent.length - 1}>
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_down</span>
        </a>
      </div>
    </>
	)
}

export default Work