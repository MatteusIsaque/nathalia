import styles from './../styles/ContentPrizeDraw.module.scss'
import Treinamento from './../images/treinamento.jpg'

import Image from 'next/image'
import Link from 'next/link'

export default function ContentPrizeDraw() {
  return (
    <div className={styles.Content}>
      <div>
        <Image src={Treinamento} />
      </div>
      <div className={styles.Text}>
        <p>
          Quem é meu aluno já sabe que de tempos em tempos rola sorteios e uns mimos, para motivar e deixar os treinos mais leves.
        </p>
        <p style={{ marginTop: "10px" }}>Então você topa fazer parte da equipe?</p>
        <Link href="https://api.whatsapp.com/send?phone=555511951134884&text=Oi%20Nat!%20Tudo%20bem%3F">
          <button id="buttonZap">
            PARTICIPAR

          </button>
        </Link>
      </div>
    </div>
  )
}