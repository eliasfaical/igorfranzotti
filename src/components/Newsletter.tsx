import React, { createRef } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';


const url =
  'https://eliasfaical.us1.list-manage.com/subscribe?u=eada3bbba6477790131eb87d6&id=5823c3a3b6'

const Newsletter = () => {
  const emailRef = createRef<HTMLInputElement>()

  return (
    <div>
      <p>Deseja receber um aviso quando lançar?</p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status }) => {
          switch (status) {
            case 'sending':
              return <p>Enviando...</p>
            case 'success':
              return (
                <p>
                  ✔️ Quer concorrer a esse curso de graça? Compartilhe com seus
                  amigos!
                </p>
              )
            case 'error':
              return (
                <p
                  dangerouslySetInnerHTML={{
                    __html: `❌ Ops, algum erro aconteceu...`
                  }}
                />
              )
            default:
              return (
                <form
                  onSubmit={(event) => {
                    event.preventDefault()

                    subscribe({
                      EMAIL: emailRef.current.value
                    })
                  }}
                >
                  <div>
                    <label htmlFor="email">E-mail:</label>
                    <input
                      id="email"
                      type="email"
                      ref={emailRef}
                      required
                      placeholder="quero@evoluir.dev"
                    />
                  </div>
                  <button type="submit">Me avise!</button>
                </form>
              )
          }
        }}
      />
    </div>
  )
}

export default Newsletter