import React from 'react';
import { useRouter } from 'next/router'

const ChatPage = () => {

  const routes = useRouter()

  return (
    <div>
      <h1>Página de chat</h1>
      <button
        onClick={() => routes.back()}
      >Voltar</button>
    </div>
  );
};

export default ChatPage;
