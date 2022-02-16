import Link from 'next/link'
import styles from './../styles/SecureASpot.module.scss'

export default function SecureASpot() {


  return (
    <div id="SecureASpot" className={styles.Main}>
      <div className={styles.Content}>
        <h2>NÃO DEIXE PARA DEPOIS, VENHA FALAR COMIGO!</h2>
        <p className={styles.text}>Meu objetivo é cuidar de você e o mais importante, fazer com que a atividade física seja algo natural e prazeroso</p>
        <Link href="https://api.whatsapp.com/send?phone=5511951134884&text=Oi%20Nat!%20Tudo%20bem%3F">
          <button id="buttonZap">GARANTIR MINHA VAGA</button>
        </Link>
      </div>
    </div>
  )
}