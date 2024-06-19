import { BaseSyntheticEvent } from 'react'
import styles from './input.module.css'

type Props = {
  label: string
  value: string
  updateFn: (value: string) => void
  rows?: number
}

function Textarea({
  label,
  value,
  updateFn,
  rows=5
}: Props) {
  return (
    <div className={styles.inputContainer}>
      {label && <label>{label}</label>}
      <textarea
        rows={rows}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
      >
        {value}
      </textarea>
    </div>
  )
}

export default Textarea