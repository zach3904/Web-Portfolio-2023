import WorkItem from '../components/work-item/work-item'
import './Work.css'
import workContent from '../work-content'

function Work() {
	return (
		<div className="work">
			<ul className="work-list">
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