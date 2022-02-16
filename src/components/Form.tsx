import styles from './../styles/form.module.scss'

import axios from 'axios'
import { FormEvent, useState } from 'react'
import router from 'next/router'
import Link from 'next/link'

export default function Form() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  async function sendForm(e: FormEvent) {
    e.preventDefault()
    var data: any = {
      emailTo: 'personalnathaliaormundo@gmail.com',
      domain: 'https://www.nathaliaormundo.com.br',
      message: message,
      name: name,
      number: number,
      title: 'Captura de lead campanha Isaques Estúdios',
    }


    try {
      await axios.post(process.env.NEXT_PUBLIC_LINK + '/sendmail', data)

      await router.push('/parabens')
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <div className={styles.DivForm}>
      <h1>PERSONAL ONLINE</h1>
      <h2>TREINOS PERSONALIZADOS</h2>

      <p>
        Sou Nathalia Ormundo, sou formada em Educação Física, atuo como Personal Trainer há mais de 10 anos!
        Ajudo você mulher  a EMAGRECER de forma saudável com Treinos Rápidos e Intensos.
      </p>

      <p className={styles.doubt}>Você topa treinar comigo e aceita mudar a sua rotina?</p>

      <Link href="https://api.whatsapp.com/send?phone=555511951134884&text=Oi%20Nat!%20Tudo%20bem%3F">
        <button className={styles.button}  id="buttonZap">
        CHAMAR NATHALIA
        </button>
      </Link>
      {/*       <form onSubmit={sendForm}>
        <input type="text" placeholder="Nome" required onChange={(e) => { setName(e.target.value) }} />
        <input type="text" placeholder="Número com DDD" required onChange={(e) => { setNumber(e.target.value) }} />
        <input type="text" placeholder="Seu objetivo com o treino" onChange={(e) => { setMessage(e.target.value) }} />
        <button id="buttonForm" type="submit">SOLICITAR CONTATO</button>
      </form> */}
    </div>
  )
}