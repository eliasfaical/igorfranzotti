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
      <header className={styles.header}>
        <h1>
          <img src="/igor-franzzoti.svg" alt="Igor Franzotti - Aquarelista"/>
        </h1>
      </header>

      <main className={styles.main}>
        <img src="/banner.jpg" alt="Banner Aquarelas - Igor Franzotti" className={styles.imgFluid} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.containerFooter}>
          <h2>Baixe grátis seu e-book</h2>
          
          <form className={styles.formEbook}>
            <input 
              type="text" 
              name="name" 
              placeholder="Nome completo" 
              className={styles.inputForm} 
              onChange={handleChange}
            />
            <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              className={styles.inputForm} 
              onChange={handleChange}
            />
            <button 
              type="button" 
              className={styles.button}
              onClick={handlePress}
            >
                Enviar
              </button>
          </form>

          <Newsletter />

          <p>
            Preencha os dados corretamente. <br />
            Você receberá seu E-book “Fundamentos da Aquarela” <br />
            direto em sua caixa de e-mail.
          </p>
        </div>

        <div className={styles.rodape}>
          <p>© Igor Franzotti - Todos os direitos resevados</p>
        </div>
      </footer>
    </>
  )
}
