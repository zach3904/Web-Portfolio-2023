import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'

function Work() {
	return (
		<div className={styles.work}>
			<ul className={styles.workList}>
        {workContent.map(workItem => (
          <li>
            <WorkItem {...workItem} />
          </li>
        ))}
      </ul>
		</div>
	)
}

export default Work