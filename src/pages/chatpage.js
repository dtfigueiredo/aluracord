import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../components/header'
import ChatBox from '../components/chatbox'
import ChatForms from '../components/form-chat'
import { createClient } from '@supabase/supabase-js'//*import da lib supabase
import { supabaseKey, supabaseUrl } from '../../utils/supabase' //*import das utils do supabase

const supabaseClient = createClient(supabaseUrl, supabaseKey)

/* funcção para atualizar a tabela em tempo real. por ser uma feature opcional é preciso ativar dentro das configurações de database->replications no supabase*/
const realTimeMessageList = (handleUserMessage) => {
  return supabaseClient
    .from('MessageList')
    //!função que é passada como parâmetro para o metodo .on é a mesma que utilizamos para trabalhar com o setUseState da inserção de mensagens
    .on('INSERT', (realTimeMessage) => handleUserMessage(realTimeMessage.new))
    .subscribe();
}

const ChatPage = () => {
  const routes = useRouter()
  const loggedUser = routes.query.username
  const handleLogout = () => routes.push('/')

  const [userMessage, setUserMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  //* UseEffect irá rodar sempre que a página for inicializada e quando houver alteração no estado dos itens dentro do array de dependências.
  useEffect(() => {

    supabaseClient
      .from('MessageList')
      .select('*')
      .order('id', { ascending: false }) //* ordenando o array de mensagenspara que a ultima fique por baixo
      .then(({ data }) => setMessageList(data))

    //!função que foi criada fora do componente para trabalhar com a versão atual da lista, seguindo a documentação do supa e utilizando os metódos sugeridos: utilizando um callback sempre que houver um evento do tipo INSERT
    realTimeMessageList((newMesssage) => {
      //? É passado um callback para o setState para que o react não leia a versão original do array, que é vazio (linha 27)
      setMessageList((realTimeList) => {
        return [newMesssage, ...realTimeList]
      })
    })

  }, [])

  const handleUserMessage = (userMessageInput) => { setUserMessage(userMessageInput) }

  //* insert de mensagens no BD
  const handleMessageList = (userMessage) => {
    //* criando um objeto com os mesmos campos do supabase (menos id, pois gera automático)
    const messageProps = {
      user: loggedUser,
      content: userMessage, //* mensagem que vem do input
    }

    //* inserindo a nova mensagem no banco de dados
    supabaseClient
      .from('MessageList')
      .insert([messageProps])
      .then(({ data }) => {
        console.log('nova mensagem: ', data);
        //   setMessageList([data[0], ...messageList])
      })
  }

  //* delete de mensagens
  const handleDeleteMessage = async (messageList) => {
    const messageId = messageList.id
    const { data, error } = await supabaseClient
      .from('MessageList')
      .delete()
      .match({ id: messageId })

    supabaseClient
      .from('MessageList')
      .select('*')
      .order('id', { ascending: false }) //* ordenando o array de mensagenspara que a ultima fique por baixo
      .then(({ data }) => {
        setMessageList([...data])
      })
  }

  return (
    <>
      <Head>
        <title>Karikacord | Chat</title>
        <meta name="description" content="Página criada para estudo durante a Imersão React da Alura" />
        <meta name="keywords" content="" />
      </Head>

      <main className="wrapper">

        <section className="w-11/12 h-5/6 my-2 p-2 
        flex flex-col justify-center items-center
        border-2 border-white rounded-lg">

          <Header
            handleLogout={handleLogout} />

          <ChatBox
            messageList={messageList}
            filteredMessageList={handleDeleteMessage} />

          <ChatForms
            userMessage={userMessage}
            handleUserMessage={handleUserMessage}
            handleMessageList={handleMessageList} />

        </section>
      </main>
    </>
  );
};

export default ChatPage;
