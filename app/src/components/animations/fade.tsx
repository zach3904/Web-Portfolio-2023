import { useState, useEffect } from 'react'
import styles from './fade.module.css'

type FadeProps = {
  children: React.ReactNode,
  duration?: number,
  show?: boolean,
  onAnimationEnd?: () => {}
}

const Fade = ({
  children,
  duration = 250,
  show,
  onAnimationEnd,
}: FadeProps) => {
  const [renderChildren, setRenderChildren] = useState(show)

  useEffect(() => {
    if (show) {
      setRenderChildren(true)
    }
  }, [show])
  
  const handleAnimationEnd = () => {
    if (onAnimationEnd) onAnimationEnd()
    if (!show) setRenderChildren(false)
  }
  
  return renderChildren && (
    <div
      style={{ animation: `${show ? 'fadeIn' : 'fadeOut'} ${duration}ms`}}
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}

export default Fade