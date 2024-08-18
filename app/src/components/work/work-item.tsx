import React, { useEffect, useRef } from 'react'
import styles from './work-item.module.css'
import { Waypoint } from 'react-waypoint'
import Glide from '@glidejs/glide/dist/glide.modular.esm'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

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
  // const swiperRef = useRef(null)
  // const [glide, setGlide] = React.useState(null)
  let glide = null

  // useEffect(() => {
  //   const handleChangeProjectSlide = event => {
  //     if (event.key === 'ArrowRight') {
  //       glide.go('>')
  //     } else if (event.key === 'ArrowLeft') {
  //       glide.go('<')
  //     }
  //   }
    
  //   if (slideNumber === currentSlide) {
  //     window.addEventListener('keydown', handleChangeProjectSlide)}

  //   return () => {
  //     window.removeEventListener('keydown', handleChangeProjectSlide)
  //   }
  // }, [currentSlide])

  useEffect(() => {
    glide = new Glide(`#glide-${slideNumber}`, {
      keyboard: true
    }).mount()
    // setGlide(newGlide)
  }, [])
  
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
        
        <div className="glide" id={`glide-${slideNumber}`}>
          <div data-glide-el="track" className="glide__track">
            <ul className="glide__slides">
              {images.map(image => (
                <li className="glide__slide" key={image}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${image}`}
                    alt={title}
                  />
                </li>
              ))}
            </ul>

            <div className="glide__arrows" data-glide-el="controls">
              <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
              <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skillsList}>
          {skills && skills.map(skill => (
            <li className={styles.skill} key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </Waypoint>
  )
}

export default WorkItem