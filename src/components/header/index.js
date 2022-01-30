import React from 'react';
import Titles from '../titles'

const ChatHeader = (props) => {

  return (
    <div className="w-full p-1 mb-2 flex justify-between items-center bg-slate-800/40 rounded-lg">

      <Titles tag="h1" content="Karikord Chatpage" />

      <button
        onClick={() => props.handleLogout()}
        className="btn hover:bg-cyan-600 text-gray-50"
      >Logout</button>
    </div>
  );
};

export default ChatHeader;
