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
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e: BaseSyntheticEvent) => updateFn(e.currentTarget.value)}
      />
    </div>
  )
}

export default Input