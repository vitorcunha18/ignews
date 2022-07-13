import { GetStaticProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps{
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }:HomeProps) {
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
              <span>For {product.amount} month</span>
            </p>

            <SubscribeButton  prideId={ product.priceId}/>
        </section>
        <picture>
          <img src="/images/avatar.svg" alt="Girl coding " />
        </picture>
        
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1LL4xADjtvZp0u1zMpSyRW7l')

  const product = {
    prideId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency:'USD'
    }).format(price.unit_amount / 100),

  }

  return{
    props: {
      product,
    }, 
    revalidate: 60 * 60 * 24, //24 horas
  }
}