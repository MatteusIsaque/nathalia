import Link from 'next/link'
import styles from './../styles/ViewTable.module.scss'

export default function ViewTable() {

  return (
    <div className={styles.ViewTable}>
      <h2>CONHEÇA MEUS PLANOS</h2>
      <p>VEJA QUAL PACOTE PODE SE ENCAIXAR NA SUA ROTINA</p>
      {/* <Link href="/?counter=#dadTable" scroll={true}>
        <button>VER TABELA</button>
      </Link> */}
    </div>
  )
}