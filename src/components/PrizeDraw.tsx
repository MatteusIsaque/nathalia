import Image from "next/image";

import Treinamento from './../images/treinamento.jpg'
import styles from './../styles/PrizeDraw.module.scss'
import ContentPrizeDraw from "./ContentPrizeDraw";


export default function PrizeDraw() {



  return (
    <article id="PrizeDraw" className={styles.Articles}>
      <h2>SORTEIO PARA ALUNOS</h2>
      <p className={styles.subtitle}>Sorteios com brindes exclusivos!</p>
      <ContentPrizeDraw />
    </article>
  )
}