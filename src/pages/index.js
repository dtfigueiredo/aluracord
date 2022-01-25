import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Titles from '../components/titles';
import Forms from '../components/form';
import CardImg from '../components/img-card';


const HomePage = () => {

  const user = 'dtfigueiredo'

  return (
    <main className="wrapper">

      <section className="box">

        <div className="text-box">
          <Titles
            tag="h1"
            content="Bem-vindo de volta ao Karikord" />

          <Titles
            tag="h2"
            content="Título da página" />

          <Forms />
        </div>

        <div className="card-box">
          <CardImg
            user={user} />
        </div>

      </section>
    </main >
  );
};

export default HomePage;