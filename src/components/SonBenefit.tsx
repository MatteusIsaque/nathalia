import styles from './../styles/SonBenefit.module.scss'


type DadBenefit = {
  emphasis: string
  text: string
}

export default function SonBenefit({ emphasis, text }: DadBenefit) {

  return (
    <div id="Benefit" className={styles.Content}>
      <p><span>{emphasis}</span>: {text}</p>
    </div>
  )
}