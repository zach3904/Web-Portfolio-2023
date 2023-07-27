function WorkItem(props) {
  const {imgFolder, images, title, description, skills} = props
  
  return (
    <div>
      <h4>{title}</h4>
      <img src={`${process.env.PUBLIC_URL}/images/designs/${imgFolder}/${images[0]}`} />
    </div>
  )
}

export default WorkItem