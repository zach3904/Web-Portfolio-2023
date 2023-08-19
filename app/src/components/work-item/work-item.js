import styles from './styles.module.css'

function WorkItem(props) {
  const {imgFolder, images, title, description, skills} = props
  
  return (
    <div className={styles.workItem}>
      <h2>{title}</h2>
      <img src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${images[0]}`} />
    </div>
  )
}

export default WorkItem