import React, { useEffect, useRef } from 'react'
import styles from './work-item.module.css'
import { Waypoint } from 'react-waypoint'

type WorkItemProps = {
  imgFolder: string,
  images: Array<string>,
  title: string,
  currentSlide: number,
  setCurrentSlide: (slideNumber: number) => void,
  slideNumber: number,
  description: string,
  skills: Array<string>
}

function WorkItem({
  imgFolder,
  images,
  title,
  currentSlide,
  setCurrentSlide,
  slideNumber,
  description,
  skills
}: WorkItemProps) {
  const swiperRef = useRef(null)

  useEffect(() => {
    const handleChangeProjectSlide = event => {
      if (event.key === 'ArrowRight') {
        swiperRef.current.swiper.slideNext()
      } else if (event.key === 'ArrowLeft') {
        swiperRef.current.swiper.slidePrev()
      }
    }
    
    if (slideNumber === currentSlide) {
      window.addEventListener('keydown', handleChangeProjectSlide)}

    return () => {
      window.removeEventListener('keydown', handleChangeProjectSlide)
    }
  }, [currentSlide])
  
  return (
    <Waypoint
      onEnter={() => {
        setCurrentSlide(slideNumber)
      }}
      topOffset="30%"
      bottomOffset="30%"
    >
      <div className={styles.workItem}>
        <h2 className={styles.title}>{title}</h2>
        <swiper-container navigation="true" pagination="true" ref={swiperRef}>
          {images.map(image => (
            <swiper-slide key={image}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${image}`}
                  alt={title}
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skillsList}>
          {skills && skills.map(skill => (
            <li className={styles.skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Waypoint>
  )
}

export default WorkItem