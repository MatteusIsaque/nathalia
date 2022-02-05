import styles from './../styles/firstComponent.module.scss'
import Form from './Form'

export default function FirstComponent(){

  return(
    <div className={styles.firstComponent}>
      <Form />
    </div>
  )
}