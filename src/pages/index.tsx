import Head from 'next/head';
import React, { useState } from 'react';
import Newsletter from '../components/Newsletter';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [state, setState] = useState({ name: '', email: '' });
  
  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  }
  
  const handlePress = () => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: state.name, email: state.email })
    });
  }

  return (
    <>
      <Head>
        <title>Igor Franzotti - Aquarelista</title>
      </Head>

      <header className={styles.header}>
        <h1>
          <img src="/igor.png" alt="Igor Franzotti - Aquarelista"/>
        </h1>
      </header>

      <main className={styles.main}>
        <img src="/banner.jpg" alt="Banner Aquarelas - Igor Franzotti" className={styles.imgFluid} />
      </main>

      <footer className={styles.footer}>
        <Newsletter />

        <div className={styles.rodape}>
          <p>© Igor Franzotti - Todos os direitos resevados</p>
        </div>
      </footer>
    </>
  )
}
