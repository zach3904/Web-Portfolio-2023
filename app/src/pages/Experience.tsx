import styles from './Experience.module.css'
import ExperienceWorkItem from '../components/experience/experience-work-item'
import { experienceContent, educationContent } from '../data/experience-content'
import Divider from '../components/divider/divider'

function Experience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>EXPERIENCE</h2>
      {experienceContent.map(item => (
        <ExperienceWorkItem {...item} />
      ))}

      <Divider width="35%" spacing={32} />
      
      <h2 className={styles.title}>EDUCATION</h2>
      {educationContent.map(item => (
        <div className={styles.educationItem}>
          <h5 className={styles.school}>{item.school}</h5>
          <div>{item.degree} | {item.period}</div>
        </div>
      ))}
    </div>
  )
}

export default Experience