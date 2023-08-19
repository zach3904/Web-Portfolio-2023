import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'

function Work() {
	return (
    <ul className={styles.workList}>
      {workContent.map(workItem => (
        <li>
          <WorkItem {...workItem} />
        </li>
      ))}
    </ul>
	)
}

export default Work