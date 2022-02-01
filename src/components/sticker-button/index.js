import React from 'react';
import { GiDiamondsSmile } from 'react-icons/gi'

const ButtonSendSticker = () => {
  return (
    <div>
      <button
        type="submit"
        className="w-full h-full p-2
        font-bold text-center text-2xl btn-cyan
        outline-none rounded-lg border-2 border-transparent
        transition duration-300 ease-out hover:ease-in">
        <GiDiamondsSmile />
      </button>
    </div>
  )
};

export default ButtonSendSticker;
