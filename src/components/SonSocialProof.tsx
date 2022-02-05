import styles from './../styles/SonSocialProof.module.scss'

import Image from 'next/image';

type DadSocialProof = {
  image: any,
  Proof: string
  Social: string
}

export default function SonSocialProof({ image, Proof, Social }: DadSocialProof) {

  return (
    <div className={styles.main}>
      <div className={styles.imageDiv}>
        <Image src={image} />
      </div>
      <h2>{Social}</h2>
      <p>{Proof}</p>
    </div>
  )
}