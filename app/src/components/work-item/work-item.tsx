import React, { useState } from 'react'
import styles from './styles.module.css'
import { Waypoint } from 'react-waypoint'

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
    <Waypoint
      onEnter={() => {
        setCurrentSlide(slideNumber)
      }}
      topOffset="30%"
      bottomOffset="30%"
    >
      <div className={styles.workItem}>
        <h2 className={styles.title}>{title}</h2>
        <img className={styles.imgViewer} src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${images[0]}`} />
        <p className={styles.description}>{description}</p>
      </div>
    </Waypoint>
  )
}

export default WorkItem