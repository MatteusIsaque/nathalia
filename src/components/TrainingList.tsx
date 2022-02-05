import styles from './../styles/TrainingList.module.scss'
import Image from 'next/image'

type dad = {
  pathImage: StaticImageData
  title: string
  text: string
}

export default function TrainingList({ pathImage, title, text }: dad) {

  return (
    <div className={styles.TrainingList}>
      <div className={styles.Image}>
        <Image src={pathImage}/>
      </div>
      <div className={styles.Content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}