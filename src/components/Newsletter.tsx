import React, { createRef } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import styles from '../styles/Newsletter.module.css';

const url =
  'https://igorfranzotti.us1.list-manage.com/subscribe/post?u=774acdda0fa58243139046e9e&amp;id=14eeb30763'

const Newsletter = () => {
  const emailRef = createRef<HTMLInputElement>();
  const nameRef = createRef<HTMLInputElement>();

  return (
    
    <div className={styles.containerNewsletter}>
      <h2>Baixe grátis seu e-book</h2>

        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status }) => {
            switch (status) {
              case 'sending':
                return <p className={styles.msgSucesso}>Enviando...</p>
              case 'success':
                return (
                  <p className={styles.msgSucesso}>
                    Inscrição realizada com sucesso!<br />
                    <a 
                      href="https://igorfranzotti.com/images/ebook_introducao_aos_fundamentos_da_aquarela.pdf" 
                      className={styles.button} 
                      title="Download E-book" 
                      target="_blank" rel="noopener noreferrer"
                    >
                      Aqui está o seu E-book!
                    </a>
                  </p>
                )
              case 'error':
                return (
                  <p
                    className={styles.msgSucesso}
                    dangerouslySetInnerHTML={{
                      __html: `❌  Ops, algum erro aconteceu...`
                    }}
                  />
                )
              default:
                return (
                  <form
                    className={styles.formEbook}
                    onSubmit={(event) => {
                      event.preventDefault()

                      subscribe({
                        EMAIL: emailRef.current.value,
                        NAME: nameRef.current.value
                      })
                    }}
                  >
                    <input
                      id="name"
                      type="text"
                      ref={nameRef}
                      required
                      placeholder="Seu nome"
                      className={styles.inputForm} 
                    />
                    <input
                      id="email"
                      type="email"
                      ref={emailRef}
                      required
                      placeholder="Seu e-mail"
                      className={styles.inputForm} 
                    />
                  
                  <button type="submit" className={styles.button}>Enviar</button>
                </form>
              )
            }
          }}
        />
      <p>
        Preencha os dados corretamente. <br />
        Você receberá seu E-book “Fundamentos da Aquarela” <br />
        direto em sua caixa de e-mail.
      </p>
    </div>
  )
}

export default Newsletter