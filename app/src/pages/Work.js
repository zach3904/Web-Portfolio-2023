import WorkItem from '../components/work-item/work-item'
import styles from './Work.module.css'
import workContent from '../work-content'

function Work() {
	return (
    <>
      <ul className={styles.workList}>
        {workContent.map(workItem => (
          <li key={workItem.title}>
            <WorkItem {...workItem} />
          </li>
        ))}
      </ul>
      <div className={styles.prevNextArrows}>
        <a href="#prev">
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_up</span>
        </a>
        <a href="#next">
          <span className={`${styles.prevNextIcons} material-icons`}>keyboard_arrow_down</span>
        </a>
      </div>
    </>
	)
}

export default Work