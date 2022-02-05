import Image from 'next/image'
import SonBenefit from './SonBenefit';

import Selo from './../images/selo.jpg'
import styles from './../styles/DadBenefit.module.scss'


export default function DadBenefit() {


  return (

    <article id="Benefit" className={styles.Articles}>
      <h2>BENEFÍCIOS DA MINHA CONSULTORIA</h2>
      <p className={styles.subtitle}>VOCÊ SÓ TEM A GANHAR</p>
      <div className={styles.Content}>
        <div>
          <SonBenefit emphasis='Acompanhamento da sua rotina' text='Seus objetivos e suas restrições, irei
          avaliar seu progresso, corrigir eventuais falhas e otimizar sempre os
          seus treinos para que você possa estar em constante evolução.' />
          <SonBenefit emphasis='Treinos personalizados' text=' Sem tabelas pré-definidas. Eu mesma irei analisar
          suas condições atuais e montar um cronograma exclusivo para você seguir.' />
          <SonBenefit emphasis='App exclusivo' text='Tenha meu aplicativo com vídeos sobre a execução dos execícios, facilitando os treinos e otimizando o seu tempo.' />
          <SonBenefit emphasis='Suporte Online' text='Você também terá meu suporte online de segunda a
          segunda.' />
        </div>
        <div>
          <Image src={Selo} />
        </div>
      </div>
    </article>
  )
}