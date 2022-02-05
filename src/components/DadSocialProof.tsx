import styles from './../styles/DadSocialProof.module.scss'
import SonSocialProof from './SonSocialProof'

import proof5 from './../images/proof-5.jpg'
import proof2 from './../images/proof-2.jpg'
import proof3 from './../images/proof-3.jpg'
import proof4 from './../images/proof-4.jpg'


export default function DadSocialProof() {  
  return (
    <>
      <h2 className={styles.title}>QUEM CONHECE APROVA!</h2>
      <article className={styles.Main}>
        <SonSocialProof image={proof3} Social='Aline Macedo, 32 anos @aliinemacedo' Proof='Eu adoro os treinos da Nathalia, são dinâmicos, completos e fazem uma super diferença no meu dia a dia, me sinto muito mais disposta e motivada!' />
        <SonSocialProof image={proof4} Social='Dani Cunha Pires, 50 anos' Proof='Treino com a Nathalia há exatamente 1 ano, perdi 8kg, muitas medidas e ganhei massa magra.
Além disso me sinto muito melhor, antigamente tinha muita queimação no estômago e refluxo, mas depois que comecei a treinar e fazer uma dieta melhorou 100%, hoje em dia não tenho mais nenhum desses sintomas!' />
        <SonSocialProof image={proof5} Social='Marina Sanches, 24 anos @mariinasanches' Proof='Treino com a Nat há mais de 5 anos! Nunca fui fã de academia, mas ela sempre inova nos treinos e não me deixa desmotivar! Melhorou muito minha disposição e minha rotina. Ela é , sem dúvidas, uma profissional diferenciada, sempre preocupada com as alunas' />
        <SonSocialProof image={proof2} Social='Midori Goya 33 anos' Proof='Treino com a Nathalia faz 9 meses, perdi 5 kg e muitas medidas.
      Adoro treinar com ela ,tenho 2 filhos, e ela sempre muito compreensível (muitas vezes as crianças ficam com agente no treino) e flexível....sempre me aconselhando,me motivando ... 
      Depois q comecei a treinar, comecei a me cuidar e consequentemente minha autoestima melhorou.
      Só tenho a agradecer❤️' />
      </article>
    </>
  )
}