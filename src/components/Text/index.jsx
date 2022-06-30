import styles from './styles.module.scss';

export function Text(props) {
  return (
    <div className={styles.formContainer}>
      <label>{props.label}</label>
      <input 
        type="text"
        placeholder={props.placeholder} 
      />
    </div>
  )
}