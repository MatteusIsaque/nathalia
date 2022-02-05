import logoSite from './../images/logo-nathalia-ormundo.png'
import Image from 'next/image'
import styles from './../styles/logo.module.scss'


export default function Logo() {
  return (
    <div className={styles.Logo}>
      <Image src={logoSite} layout="responsive"/>
    </div>
  )
}