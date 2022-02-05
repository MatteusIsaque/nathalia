import styles from './../styles/Footer.module.scss'
import Link from 'next/link'

export default function Footer() {


  return (
    <footer className={styles.Footer}>
      <h4><span>Politica de privicade</span> e <span>Termo de uso</span></h4>
      <p>Site desenvolvido por <Link href="https://isaquesestudios.com.br">Isaques Estúdios</Link> | Todos os direitos reservados Nathalia Ormundo</p>
    </footer>
  )
}