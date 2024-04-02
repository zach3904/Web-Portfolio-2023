import Animate from 'react-smooth'

type FadeProps = {
  children: React.ReactNode,
  duration?: number,
  isFadeOut?: boolean,
}

const Fade = ({
  children,
  duration = 250,
  isFadeOut,
}: FadeProps) => {
  return (
    <Animate from={isFadeOut ? 1 : 0} to={isFadeOut ? 0 : 1} attributeName="opacity" duration={duration}>
      {children}
    </Animate>
  )
}

export default Fade