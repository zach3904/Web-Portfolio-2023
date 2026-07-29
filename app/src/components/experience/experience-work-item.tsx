import styles from "./experience-work-item.module.css"

type Props = {
  company: string,
  subtitle?: string,
  role: string,
  location: string,
  period: string,
  responsibilities?: string[]
}

function ExperienceWorkItem(props: Props) {
  return (
    <div className={styles.experienceWorkItem}>
      <div className={styles.period}>{props.period}</div>
      <h2 className={styles.company}>{props.company} {props.subtitle && (<span className={styles.subtitle}>{props.subtitle}</span>)}</h2>
      <div className={styles.location}>{props.location}</div>
      <h5 className={styles.role}>{props.role}</h5>
      {props.responsibilities && (
        <ul className={styles.responsibilities}>
          {props.responsibilities.map(responsibility => (
            <li>{responsibility}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceWorkItem