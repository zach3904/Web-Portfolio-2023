import styles from './divider.module.css'

type Props = {
  width?: string,
  spacing?: number,
}

function Divider(props: Props) {
  return (
    <hr
      className={styles.divider}
      style={{
        width: props.width ? props.width : 'auto',
        margin: `${props.spacing}px auto`
      }}
    />
  )
}

export default Divider