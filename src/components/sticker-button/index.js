import React, { useState } from 'react';
import Image from 'next/image';
import { GiDiamondsSmile } from 'react-icons/gi'
import Titles from '../titles';
import appConfig from '../../../config.json'
//* para esse componente eu usei a lib proposta pela imersao
import { Button } from '@skynexui/components';

const ButtonSendSticker = (props) => {

  const [isOpen, setIsOpen] = useState('')

  return (
    <>
      <Button
        styleSheet={{
          borderRadius: '8px',
          padding: '0.85rem',
          width: '100%',
          height: '100%',
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'bold',
          backgroundColor: '#0891B2',
          hover: {
            backgroundColor: '#164e63',
          },
          focus: {
            backgroundColor: '#0e7490',
          },
        }}
        label={<GiDiamondsSmile />}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="w-52 h-72
            absolute bottom-28 p-2 bg-slate-700/80
            right-24 sm:right-28 lg:right-32 2xl:right-36
            flex flex-col align-center justify-center rounded-lg">

          <Titles tag="h2" content="Stickers" />

          <div className="w-full flex-1 overflow-y-auto mt-2">
            <ul className="flex flex-wrap justify-around flex-1">

              {appConfig.stickers.map(sticker => {
                return (
                  <li
                    onClick={() => { props.handleSticker(sticker) }}
                    key={sticker}>
                    <Image
                      src={sticker}
                      alt="Sticker"
                      width={72}
                      height={72} />
                  </li>)
              })}

            </ul>
          </div>
        </div>
      )
      }
    </>
  )
};

export default ButtonSendSticker;
