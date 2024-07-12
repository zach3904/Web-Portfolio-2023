import styles from "./experience-work-item.module.css"

type Props = {
  company: string,
  role: string,
  location: string,
  period: string,
  responsibilities?: string[]
}

function ExperienceWorkItem(props: Props) {
  return (
    <div>
      <h3 className={styles.company}>{props.company}</h3>
      <h5 className={styles.role}>{props.role}</h5>
      <div className={styles.dateTime}>
        <span>{props.location}</span> | <span>{props.period}</span>
      </div>
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