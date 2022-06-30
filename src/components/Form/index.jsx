import { Text } from '../Text';
import styles from './styles.module.scss';

export function Form() {
  return (
    <section className={styles.formContainer}>
      <form>
        <h2>Fill in the form to fill out the employee card</h2>
        <Text label='Name' placeholder='Enter your name' />
        <Text label='Role' placeholder='Enter your role' />
        <Text label='Image' placeholder='Enter your image' />
        <Text label='Squad' placeholder='Enter your squad' />
      </form>
    </section>
  )
}