
import Link from 'next/link';
import Logo from './Logo';

import styles from './../styles/nav.module.scss'
import { useEffect } from 'react';


export default function HeaderPage() {


  return (
    <nav className={styles.navMenu}>
      <Logo />
      <ul>
        <li>
          <Link href="/?counter=#training" scroll={true}>
            Treinos
          </Link>
        </li>
        <li>
          <Link href="/?counter=#PrizeDraw" scroll={true}>
            Prêmios
          </Link>
        </li>
        <li>
          <Link href="/?counter=#Benefit" scroll={true}>
            Benêficios
          </Link>
        </li>
        <li>
          <Link href="/?counter=#SecureASpot" scroll={true}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  )
}