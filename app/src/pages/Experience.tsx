import styles from './Experience.module.css'
import ExperienceWorkItem from '../components/experience/experience-work-item'
import { experienceContent, educationContent } from '../data/experience-content'

function Experience() {
  return (
    <div>
      {experienceContent.map(item => (
        <ExperienceWorkItem {...item} />
      ))}
      {educationContent.map(item => (
        <div>
          {item.school}
          {item.degree}
          {item.period}
        </div>
      ))}
    </div>
  )
}

export default Experience