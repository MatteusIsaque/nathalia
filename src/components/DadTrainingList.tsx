import styles from './../styles/DadTrainingList.module.scss'
import Image from 'next/image'

import Personal from './../images/Personal.jpg'
import TrainingList from './TrainingList'

import Training from './../images/treino.png'
import Cheers from './../images/saude.png'
import Nutrition from './../images/nutricao.png'
import Clock from './../images/relogio.png'

export default function DadTrainingList() {


  return (
    <article id="training" className={styles.articles}>
      <h2>TREINOS PERSONALIZADOS</h2>
      <p className={styles.paragraph}>TREINOS MONTADOS DE ACORDO COM SEU PERFIL</p>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={Personal} layout="intrinsic" />
        </div>
        <div>
          <TrainingList pathImage={Training} title='TREINOS PERSONALIZADOS'
            text='Treinos de acordo com seus objetivos e respeitando suas restrições físicas, para que você possa aproveitar ao máximo dos exercícios. Você vai acompanhar os treinos, movimentos e as pausas com o auxilio do aplicativo, mas caso tenha alguma dúvida estou a disposição.' />
          <TrainingList pathImage={Cheers} title='XÔ SEDENTARISMO'
            text='Você vai perceber melhoras na sua CONDIÇÃO FÍSICA logo nas primeiras aulas.
            Sua MENTE vai ficar mais tranquila e seu SONO mais profundo e restaurador!' />
          {/* <TrainingList pathImage={Nutrition} title='NUTRICIONISTAS A DISPOSIÇÃO'
            text='Não é preciso deixar de comer tudo que você gosta... Nossa
            nutricionista ira montar um cronograma alimentar para que
            você possa seguir, você vai manter seus resultados sem deixar
            aproveitar a vida.' /> */}
          <TrainingList pathImage={Clock} title='HORÁRIO DO TREINO'
            text='VOCÊ vai pode treinar na Praia, no campo em casa ou na ACADEMIA, vou adaptar os seus TREINOS de acordo com seu horário. Para que você possa ser livre para treinar onde preferir.' />
        </div>
      </div>
    </article>
  )
}