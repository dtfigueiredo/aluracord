import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Header from '../components/header'
import ChatBox from '../components/chatbox'
import ChatForms from '../components/form-chat'

const ChatPage = () => {

  const routes = useRouter()
  const handleLogout = () => routes.push('/')

  const [userMessage, setUserMessage] = useState('')
  const [messageList, setMessageList] = useState([])

  const handleUserMessage = (userMessageInput) => {
    setUserMessage(userMessageInput)
  }

  const handleMessageList = (newMessage) => {
    const messageProps = {
      id: messageList.length + 1,
      user: 'Logged User',
      text: newMessage,
    }
    setMessageList([...messageList, messageProps])
  }

  const handleDeleteMessage = (id) => {
    let filteredMessageList = messageList.filter(message => {
      return (message.id !== id)
    })

    setMessageList(filteredMessageList)
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
