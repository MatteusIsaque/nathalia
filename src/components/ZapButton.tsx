import styles from './../styles/ZapButton.module.scss'
import Image from 'next/image'

import Whatsapp from './../images/whatsapp.png'
import Link from 'next/link'


export default function ZapButton() {

  return (
    <div id="buttonZap" className={styles.main}>
      <Link href="https://api.whatsapp.com/send?phone=5511951134884">
        <Image id="buttonZap" src={Whatsapp} width={60} height={60} />
      </Link>
    </div>
  )
}