import React from 'react';
import { RiMailSendFill } from 'react-icons/ri'
import ButtonSendSticker from '../sticker-button';

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
        className="w-10/12 sm:w-full text-slate-900 p-2 mr-1
        outline-none rounded-lg border-2 border-transparent
        focus:border-cyan-500"/>

      <div className="flex justify-around items-center">
        <ButtonSendSticker />

        <button
          type="submit"
          className="w-full h-full p-2 ml-1
          font-bold text-center text-2xl btn-cyan
          outline-none rounded-lg border-2 border-transparent
          transition duration-300 ease-out hover:ease-in">
          <RiMailSendFill />
        </button>
      </div>
    </form>
  );
};

export default ChatForms;