import React, { useState } from 'react'
import styles from './styles.module.css'
import { Waypoint } from 'react-waypoint'
import Fade from '../animations/fade'

type WorkItemProps = {
  imgFolder: string,
  images: Array<string>,
  title: string,
  setCurrentSlide: (slideNumber: number) => void,
  slideNumber: number,
  description: string,
}

function WorkItem(props: WorkItemProps) {
  const {
    imgFolder,
    images,
    title,
    setCurrentSlide,
    slideNumber,
    description
  } = props
  
  return (
    <div className={styles.workItem}>
      <Waypoint
        onEnter={() => {
          setCurrentSlide(slideNumber)
        }}
        topOffset="30%"
        bottomOffset="30%"
      >
        <div>
          <h2>{title}</h2>
          <img src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${images[0]}`} />
          <p>{description}</p>
        </div>
      </Waypoint>
    </div>
  )
}

export default WorkItem