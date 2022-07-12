import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title> Home | Ig.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
            <span>👏 Hey, Welcome</span>
            <h1>News about the <span>React</span> World</h1>
            <p>
              Get access to all the publications <br/>
              <span>For $9.90 month</span>
            </p>

            <SubscribeButton />
        </section>
        <picture>
          <img src="/images/avatar.svg" alt="Girl coding " />
        </picture>
        
      </main>
    </>
  )
}
