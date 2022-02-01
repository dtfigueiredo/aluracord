import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Titles from '../components/titles';
import Forms from '../components/form-login';
import CardImg from '../components/img-card';
import Linkedin from '../components/utils/linkedin'

const HomePage = () => {

  //* constatnte para uso do router nativo do next 
  const routes = useRouter()

  const [username, setUsername] = useState('')
  const [gituser, setGituser] = useState('')

  const handleUsernameChange = (usernameValue) => {
    setUsername(usernameValue)
    handleFetchData(usernameValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    /* passando o valor do usuário por url para receber na página de chat.
    ps: resolução mais "fácil" para esse o simples proprósito de simular autenticação*/
    routes.push(`/chatpage?username=${username}`)
  }

  const handleFetchData = async (usernameValue) => {
    fetch(`https://api.github.com/users/${usernameValue}`)

    const response = await fetch(`https://api.github.com/users/${usernameValue}`)
    const data = await response.json()
    setGituser(data)
  }

  return (
    <>
      <Head>
        <title>Karikacord</title>
        <meta name="description" content="Página criada para estudo durante a Imersão React da Alura" />
        <meta name="keywords" content="" />
      </Head>

      <main className="wrapper">

        <section className="box">

          <div className="f-col-m4 text-box">
            <Titles
              tag="h1"
              content="Bem-vindo ao Karikord" />

            <Titles
              tag="p"
              content={<Linkedin />} />

            <Forms
              user={username}
              handleSubmit={handleSubmit}
              handleUsernameChange={handleUsernameChange} />
          </div>

          <div className="f-col-m4 card-box">
            <CardImg user={gituser} />
          </div>

        </section>
      </main>
    </>
  );
};

export default HomePage;