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
      <textarea
        rows={rows}
        className={styles.textarea}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
        placeholder=" "
      >
        {value}
      </textarea>
      {label && <label className={styles.label}>{label}</label>}
    </div>
  )
}

export default Textarea