import '@/app/globals.css'
import React, { useState } from 'react';
import { ServerUpdater } from '@/components/Server';
import { ClosePopup } from '@/components/EditPopup';

type Properties = {
    id: number
    name: string
    status: boolean //false-Offline  true-Online
    version: string
    curp: number
    maxp: number
    gamemode: number //0-survival  1-Creative  2-Adventure  3-Spectator
    difficulty: number //0-Peaceful  1-Easy  2-Normal  3-Hard
    whitelist: boolean
    cracked: boolean
    fly: boolean
    entities: boolean
    resourcepack: string
}

const test= { id: 1, name: 'Vanilla', status: true, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
              difficulty: 2, whitelist: false, cracked: false, fly: false, entities: true, resourcepack: ""}

export default function AlertPopup(closePopup: ClosePopup) {

    const [overPopup, setOverPopup] = useState(false);

    function checkActive() { //controlla se il server running e quello visualizzato coincidono E se le nuove impostazioni differiscono dalle precedenti,
                         //se sì fa aprire il nuovo popup (setta overPopup=true), altrimenti si procede con il salvataggio dei dati normalmente
      if (closePopup.serverUp.serverInstance.id === closePopup.serverUp.active &&
        closePopup.newProps !== closePopup.serverUp.serverInstance) 
          setOverPopup(true) //apre il popup alert
      else 
      {
          closePopup.closePopupBack(false) //non c'è conflutto, callback per far chiudere il primo popup (la pagina delle impostazioni)
          closePopup.serverUp.updateCallback(closePopup.newProps) //modifica
      }
    }

    function onClickSaveOver() { //PLUSANTE "SAVE" del popup superiore
        setOverPopup(false)
        closePopup.newProps.status = false
        closePopup.serverUp.updateActiveBack(closePopup.serverUp.serverInstance)
        closePopup.closePopupBack(false)
        closePopup.serverUp.updateCallback(closePopup.newProps)
    }

    function handleClick() {
        alert('You clicked me!');
    }

    return (
      <>
        <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => checkActive()}
          >
          Save Changes
        </button>
        {overPopup ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none {/*bg-white*/}"
                style={{
                    backgroundImage: `url('/assets/bg4.jpg')`
                    }}>
                  {/*header*/}
                  <div className="mx-3 my-3 flex items-start justify-between p-2 border-b border-solid bg-white rounded-md shadow-md border-slate-200">
                    <h3 className="text-slate-500 text-3xl font-semibold">
                      Warning 
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md">
                    <p className=" text-slate-500 text-lg leading-relaxed">
                      Changes cannot be applied while the server is running.
                      <br/>
                      Do you want to turn it off and save?
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setOverPopup(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => onClickSaveOver()}
                    >
                      Ok
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }