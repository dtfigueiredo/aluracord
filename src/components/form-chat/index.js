import React from 'react';
import { RiMailSendFill } from 'react-icons/ri'

const ChatForms = (props) => {

  const handleLista = (event) => {
    event.preventDefault();
    props.handleMessageList(props.userMessage)
    props.handleUserMessage('')
  }

  return (
    <form
      onSubmit={handleLista}
      className="w-full flex justify-center items-center mt-2">

      <input
        value={props.userMessage}
        onChange={event => props.handleUserMessage(event.target.value)}
        type="text"
        placeholder="Digite sua mensagem"
        className="w-full text-slate-900 p-2
        outline-none rounded-lg border-2 border-transparent
        focus:border-cyan-500"/>

      <button
        type="submit"
        className="w-2/12 sm:w-1/12 h-full py-2 px-2 ml-2
        font-bold text-center text-2xl btn-cyan
        outline-none rounded-lg border-2 border-transparent
        transition duration-300 ease-out hover:ease-in">
        <RiMailSendFill />
      </button>

    </form>
  );
};

export default ChatForms;