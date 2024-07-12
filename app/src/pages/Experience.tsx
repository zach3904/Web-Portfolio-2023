import styles from './Experience.module.css'
import ExperienceWorkItem from '../components/experience/experience-work-item'
import experienceContent from '../data/experience-content'

function Experience() {
  return (
    <div>
      {experienceContent.map(item => (
        <ExperienceWorkItem {...item} />
      ))}
    </div>
  )
}

export default Experience