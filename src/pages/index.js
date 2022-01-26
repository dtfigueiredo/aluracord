import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Titles from '../components/titles';
import Forms from '../components/form';
import CardImg from '../components/img-card';


const HomePage = () => {
  //? constatnte para uso do router nativo do next 
  const routes = useRouter()

  const [username, setUsername] = useState('')

  const handleUsernameChange = (usernameValue) => {
    setUsername(usernameValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    routes.push('/chat')
  }

  // const handleFetchData = async () => {
  //   fetch(`https://api.github.com/users/${username}/`)

  //   const response = await fetch(`https://api.github.com/users/${username}/`)
  //   const result = await response.json()
  //   console.log(result)
  //   return result
  // }

  // useEffect(() => {
  //   handleFetchData()
  // })

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
              content="Bem-vindo de volta ao Karikord" />

            <Titles
              tag="h2"
              content="Título da página" />

            <Forms
              user={username}
              handleSubmit={handleSubmit}
              handleUsernameChange={handleUsernameChange} />
          </div>

          <div className="f-col-m4 card-box">
            <CardImg user={username} />
          </div>

        </section>
      </main >
    </>
  );
};

export default HomePage;