import Link from "next/link";

import styles from './../styles/Congratulation.module.scss'

export default function Parabens() {

  return (
    <div className={styles.main}>
      <h1>Parabéns, sua mensagem foi enviada, logo retornaremos o contato.</h1>
      <Link href="/">
        <button>Voltar ao inicial</button>
      </Link>
    </div>
  )
}