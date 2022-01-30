import React from 'react';
import { FaTrash } from 'react-icons/fa';
import MessageHeader from '../message-header'

const ChatBox = (props) => {

  return (
    //TODO ARRUMAR A DIREÇÃO DO SCROLL
    <div className="w-full flex-1 overflow-y-scroll 
    flex justify-between items-end bg-slate-800/40 rounded-lg">

      <ul className="h-full flex-1">

        {/* map que recebe o array de mensagems do backend e retorna uma li para cada registro dinamicamente */}
        {props.messageList.map(newMessage => {
          return (
            <li key={newMessage.id}
              className="w-full sm:max-w-screen-sm text-white text-lg list-none
              px-2 pb-1 mb-1 rounded-lg bg-cyan-800/80 hover:bg-slate-700/40">

              <div className="flex justify-between items-center">
                {/* message body */}
                <MessageHeader newMessage={newMessage} />

                {/* delete button */}
                <button
                  onClick={() => props.filteredMessageList(newMessage)}
                  className="p-2 rounded-lg hover:bg-cyan-600">
                  <FaTrash />
                </button>
              </div>

              <span className="px-2">{newMessage.content}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ChatBox;