import SonTable from "./SonTable";

import styles from './../styles/DadTable.module.scss'


export default function DadTable() {
  return (
    <article id="dadTable" className={styles.Articles}>
      <SonTable ColorStrong={'var(--purple)'} colorMonth={'var(--purple)'} TitleTable="PACOTE 1M" Price={150} PriceMonth={150} MonthTraining="1 MÊS DE TREINO" Vantagem1="ACOMPANHAMENTO" Vantagem2="TREINO PERSONALIZADO" Vantagem3="FEEDBACK SEMANAL" Vantagem4="SUPORTE 7/7" Vantagem5="APP EXCLUSIVO" />
      <SonTable ColorStrong={'var(--light-blue)'} colorMonth={'var(--light-blue)'} TitleTable="PACOTE 2M" Price={140} PriceMonth={280} MonthTraining="2 MESES DE TREINO" Vantagem1="ACOMPANHAMENTO" Vantagem2="TREINO PERSONALIZADO" Vantagem3="FEEDBACK SEMANAL" Vantagem4="SUPORTE 7/7" Vantagem5="APP EXCLUSIVO" />
      <SonTable ColorStrong={'var(--purple)'} colorMonth={'var(--purple)'} TitleTable="PACOTE 3M" Price={130} PriceMonth={390} MonthTraining="3 MESES DE TREINO" Vantagem1="ACOMPANHAMENTO" Vantagem2="TREINO PERSONALIZADO" Vantagem3="FEEDBACK SEMANAL" Vantagem4="SUPORTE 7/7" Vantagem5="APP EXCLUSIVO" />
    </article>
  )
}