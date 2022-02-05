import type { NextPage } from 'next'
import Head from 'next/head'
import DadBenefit from '../components/DadBenefit'
import DadSocialProof from '../components/DadSocialProof'
import DadTable from '../components/DadTables'
import DadTrainingList from '../components/DadTrainingList'
import FirstComponent from '../components/FirstComponent'
import Footer from '../components/Footer'
import HeaderPage from '../components/header'
import MeetPlans from '../components/MeetPlans'
import PrizeDraw from '../components/PrizeDraw'
import SecureASpot from '../components/SecureASpot'
import ViewTable from '../components/ViewTable'
import ZapButton from '../components/ZapButton'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NATHALIA ORMUNDO - PERSONAL TRAINER</title>
        <meta name="description" content="Personal trainer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <HeaderPage />
        <FirstComponent />
        <DadTrainingList />
        <ViewTable />
        <PrizeDraw />
        <DadBenefit />
        <DadSocialProof />
        <MeetPlans />
        <DadTable />
        <SecureASpot />
        <ZapButton />
      </main>
      <Footer />
    </div>
  )
}

export default Home
