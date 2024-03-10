import React from 'react'
import styles from './styles.module.css'
import { Waypoint } from 'react-waypoint'

function WorkItem(props) {
  const {
    imgFolder,
    images,
    title,
    setCurrentSlide,
    slideNumber
  } = props
  const [showTitle, setShowTitle] = React.useState(false)
  
  return (
    <div className={styles.workItem}>
      <Waypoint
        onEnter={() => setCurrentSlide(slideNumber)}
        topOffset="30%"
        bottomOffset="30%"
      >
        <div>
          <h2>{title}</h2>
          <img src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${images[0]}`} />
        </div>
      </Waypoint>
    </div>
  )
}

export default WorkItem