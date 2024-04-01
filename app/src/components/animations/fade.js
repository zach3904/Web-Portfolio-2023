import Animate from 'react-smooth'

const Fade = ({
  children,
  duration = 250,
  isFadeOut,
}) => {
  return (
    <Animate from={isFadeOut ? 1 : 0} to={isFadeOut ? 0 : 1} attributeName="opacity" duration={duration}>
      {children}
    </Animate>
  )
}

export default Fade