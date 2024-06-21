import { HTMLInputTypeAttribute, BaseSyntheticEvent } from 'react'
import styles from './input.module.css'

type Props = {
  label: string
  value: string
  updateFn: (value: string) => void
  type?: HTMLInputTypeAttribute
}

function Input({
  label,
  value,
  type="text",
  updateFn
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        className={styles.input}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
        placeholder=" "
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  )
}

export default Input