import Head from 'next/head';
import React from 'react';
import Newsletter from '../components/Newsletter';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Igor Franzotti - Aquarelista</title>
      </Head>

      <header className={styles.header}>
        <h1>
          <img src="/images/igor.png" alt="Igor Franzotti - Aquarelista"/>
        </h1>
      </header>

      <main className={styles.main}>
        <figure className={styles.bannerDesktop}>
          <img src="/images/banner-online.jpg" alt="Banner Aquarelas - Igor Franzotti" className={styles.imgFluid} />
        </figure>
        <figure className={styles.bannerMobile}>
          <img src="/images/banner-online-mobile.jpg" alt="Banner Aquarelas - Igor Franzotti" className={styles.imgFluid} />
        </figure>

        <section className={styles.sectionVideo}>
          <div className={styles.container}>
            <div className={styles.compreAgora}>
              <h2>Compre agora</h2>
              <a href="https://pay.hotmart.com/K50418650H?checkoutMode=10" title="Clique aqui" target="_blank" rel="noopener noreferrer" className={styles.btnComprar}>Clique aqui</a>
              <p>
                Você será redirecionado para a plataforma de venda do <br />
                Curso On-line “Introdução aos Fudamentos da Aquarela”.
              </p>
            </div>

            <iframe src="https://www.youtube.com/embed/nILwg40Aby0?rel=0"></iframe>
          </div>
        </section>

        <section className={styles.scetionIntroducao}>
          <div className={styles.container}>
            <h3>INTRODUÇÃO AOS FUDAMENTOS DA AQUARELA</h3>
            <p>Esse é um curso de aquarela teórico e prático para iniciantes ou para quem queira aprimorar a técnica, onde serão apresentados fundamentos introdutórios para que você possa produzir suas próprias obras.</p>
            <p>O conteúdo é dividido em 4 módulos, onde falaremos dos principais materiais, introdução à teoria das cores, técnicas básicas e exercícios práticos.</p>
            <p>Todas as aulas são gravadas e disponibilizadas na plataforma Hotmart para você assistir onde e quando quiser, pelo seu computador, tablet ou smartphone.</p>
            <p>Tudo de uma forma simples e prática e o melhor: disponível para sempre!</p>
          </div>
        </section>

        <section className={styles.scetionModulos}>
          <div className={styles.container}>
            <div className={styles.itemModulo}>
              <h4>4 Módulos</h4>
              <p>São 4 módulos divididos com conteúdo exclusivo, onde você vai aprender de um jeito simples e prático sobre: materiais, teoria das cores, técnicas básicas e exercícios guiados do início ao fim.</p>
            </div>

            <div className={styles.itemModulo}>
              <h4>14 aulas</h4>
              <p>As 14 aulas estão divididas entre os 4 módulos facilitando o seu aprendizado, pois assim você pode assistir e aprender individualmente cada aula, onde e quando quiser.</p>
            </div>

            <div className={styles.itemModulo}>
              <h4>Mais de 4h de aula</h4>
              <p>São mais de 4 horas de estudo onde mais da metade do tempo vamos praticar aquarela e você, junto comigo, vai acompanhar praticando passo-a-passo a execução de vários exercícios.</p>
            </div>

            <div className={styles.itemModulo}>
              <h4>Teoria e prática</h4>
              <p>Não falarei apenas de aquarela, praticaremos muito! Após conhecer os principais materiais, aprenderemos sobre cores e técnicas sempre aliando teoria e prática. Por último, teremos um módulo exclusivo com exercícios, onde você acompanhará cada etapa de um processo de pintura do início ao fim, podendo fazer junto comigo.</p>
            </div>

            <div className={styles.itemModulo}>
              <h4>CONTEÚDO ON-LINE</h4>
              <p>Todas as aulas serão gravadas e ficaram disponíveis, por tempo vitalício, para você assistir onde e quando quiser. Você terá acesso a todo o conteúdo que estará hospedado na plataforma Hotmart.</p>
            </div>
          </div>
        </section>
        
        <section className={styles.scetionTopicos}>
          <div className={styles.container}>
            <h3>O QUE VOCÊ APRENDERÁ</h3>
            <ul>
              <li>Você aprenderá os fundamentos necessários para criar suas próprias aquarelas;</li>
              <li>Conhecerá os principais materiais (linhas estudante e profissional) para começar a pintar;</li>
              <li>Entenderá sobre tipos de papéis, pigmentos e pincéis;</li>
              <li>Teoria da cor por meio do disco cromático;</li>
              <li>Conhecerá as propriedades da cor;</li>
              <li>Aprenderá sobre mistura de cores;</li>
              <li>Como fazer degradés;</li>
              <li>Como pintar utilizando uma única cor (monocromática).</li>
            </ul>
          </div>
        </section>
        
        <section className={styles.scetionValor}>
          <div className={styles.container}>
            <h3>Valor do investimento</h3>
            <strong>R$ 249,00</strong>
            <span>(duzentos e quarenta reias)</span>
            <p>EM ATÉ 12X NO CARTÃO</p>
            <a href="https://pay.hotmart.com/K50418650H?checkoutMode=10" title="Quero comprar" target="_blank" rel="noopener noreferrer" className={styles.btnComprar}>Quero comprar</a>
          </div>
        </section>

        <section className={styles.sectionAbout}>
          <div className={styles.container}>
            <img src="/images/perfil-igor-franzotti.jpg" alt="Igor Franzotti" className={styles.imgFluid} />
              <p>Sou Igor Mendonça Franzotti, designer gráfico há quase 20 anos. Estudei Desenho Industrial na Universidade Federal do Espírito Santo, estado onde nasci e resido até hoje.</p>

              <p>Iniciei minha trajetória artística desde muito jovem no seio da família buscando retratar com fidelidade e graça meus afetos.</p>
              
              <p>Sou autodidata por excelência porque dotado de curiosidade aguçada, busco na pesquisa o conhecimento necessário que aliado ao sentimento - uma tônica da minha obra – enriquecer e abrilhantar o conteúdo de todas as modalidades artísticas que domino.</p>

              <p>Conheci a pintura por meio da técnica à óleo, passei pela acrílica, e assim, cheguei à aquarela, cuja técnica tenho me dedicado, exclusivamente, nos últimos anos.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Newsletter />

        <div className={styles.rodape}>
          <p>© Igor Franzotti - Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  )
}
