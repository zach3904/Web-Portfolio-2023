import { HTMLInputTypeAttribute, BaseSyntheticEvent } from 'react'
import styles from './input.module.css'

type Props = {
  label: string
  value: string
  updateFn: (value: string) => void
  type?: HTMLInputTypeAttribute
  name?: string
}

function Input({
  label,
  value,
  type="text",
  updateFn,
  name
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        className={styles.input}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
        placeholder=" "
        name={name}
      />
      {label && <label className={styles.label}>{label}</label>}
    </div>
  )
}

export default Input