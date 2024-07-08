import { BaseSyntheticEvent } from 'react'
import styles from './input.module.css'
import clsx from 'clsx'

type Props = {
  label: string
  value: string
  updateFn: (value: string) => void
  rows?: number
  name?: string
}

function Textarea({
  label,
  value,
  updateFn,
  rows=5,
  name
}: Props) {
  const textareaClasses = clsx([styles.input, styles.textarea])
  
  return (
    <div className={styles.inputContainer}>
      <textarea
        rows={rows}
        className={textareaClasses}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
        placeholder=" "
        name={name}
      >
        {value}
      </textarea>
      {label && <label className={styles.label}>{label}</label>}
    </div>
  )
}

export default Textarea