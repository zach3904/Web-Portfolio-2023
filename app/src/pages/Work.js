import WebItem from '../components/web-item/web-item'
import './Work.css'

function Work() {
	return (
		<div className="work">
			<ul className="work-list">
        <li>
          <WebItem />
        </li>
        <li>
          <WebItem />
        </li>
        <li>
          <WebItem />
        </li>
        <li>
          <WebItem />
        </li>
        <li>
          <WebItem />
        </li>
      </ul>
		</div>
	)
}

export default Work