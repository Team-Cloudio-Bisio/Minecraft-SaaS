import '@/app/globals.css'
import React, { useState } from 'react';
import { ServerUpdater } from '@/components/Server';
import AlertPopup from '@/components/AlertServer';
import { ServerProperties } from '@/components/Server'

export type ClosePopup = {  
  serverUp: ServerUpdater
  newProps: ServerProperties
  closePopupBack: (state: boolean) => void //callback per chiudere il popup
}

export default function EditPopup(serverUpdater: ServerUpdater) {

    const [properties, setProperties] = useState(serverUpdater.serverInstance)
    const [popup, setPopup] = useState(false);

    function onClickSave() { //pulsante "SAVE" del popup inferiore
          setPopup(false)
          serverUpdater.updateCallback(properties)
    }
    
    function onChangeName(value: string) {
        setProperties(p => ({
            ...p,
            name: value
        }))
    }
    function onChangeIP(value: string) {
        setProperties(p => ({
            ...p,
            ip: value
        }))
    }
    function onChangeVersion(value: string) {
        setProperties(p => ({
            ...p,
            version: value
        }))
    }
    function onChangeGameMode(value: string) {
        setProperties(p => ({
            ...p,
            gamemode: +value
        }))
    }
    function onChangeDifficulty(value: string) {
        setProperties(p => ({
            ...p,
            difficulty: +value
        }))
    }
    function onChangeWhiteList(value: boolean) {
        setProperties(p => ({
            ...p,
            whitelist: value
        }))
    }
    function onChangeCracked(value: boolean) {
        setProperties(p => ({
            ...p,
            cracked: value
        }))
    }
    function onChangeFly(value: boolean) {
        setProperties(p => ({
            ...p,
            fly: value
        }))
    }
    function onChangeResourcePack(value: string) {
        setProperties(p => ({
            ...p,
            resourcepack: value
        }))
    }
    

    return (
      <>
        <button
          className= "pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
          type="button"
          onClick={() => setPopup(true)}
        >
            <svg className="w-4 h-4 mr-2" 
                 fill="#000000"
                 viewBox="0 0 369.793 340.792">
                <path d="M320.83,140.434l-1.759-0.627l-6.87-16.399l0.745-1.685c20.812-47.201,19.377-48.609,15.925-52.031L301.11,42.61 c-1.135-1.126-3.128-1.918-4.846-1.918c-1.562,0-6.293,0-47.294,18.57L247.326,60l-16.916-6.812l-0.679-1.684 C210.45,3.762,208.475,3.762,203.677,3.762h-39.205c-4.78,0-6.957,0-24.836,47.825l-0.673,1.741l-16.828,6.86l-1.609-0.669 C92.774,47.819,76.57,41.886,72.346,41.886c-1.714,0-3.714,0.769-4.854,1.892l-27.787,27.16 c-3.525,3.477-4.987,4.933,16.915,51.149l0.805,1.714l-6.881,16.381l-1.684,0.651C0,159.715,0,161.556,0,166.474v38.418 c0,4.931,0,6.979,48.957,24.524l1.75,0.618l6.882,16.333l-0.739,1.669c-20.812,47.223-19.492,48.501-15.949,52.025L68.62,327.18 c1.162,1.117,3.173,1.915,4.888,1.915c1.552,0,6.272,0,47.3-18.561l1.643-0.769l16.927,6.846l0.658,1.693 c19.293,47.726,21.275,47.726,26.076,47.726h39.217c4.924,0,6.966,0,24.859-47.857l0.667-1.742l16.855-6.814l1.604,0.654 c27.729,11.733,43.925,17.654,48.122,17.654c1.699,0,3.717-0.745,4.876-1.893l27.832-27.219 c3.501-3.495,4.96-4.924-16.981-51.096l-0.816-1.734l6.869-16.31l1.64-0.643c48.938-18.981,48.938-20.831,48.938-25.755v-38.395 C369.793,159.95,369.793,157.914,320.83,140.434z M184.896,247.203c-35.038,0-63.542-27.959-63.542-62.3 c0-34.342,28.505-62.264,63.542-62.264c35.023,0,63.522,27.928,63.522,62.264C248.419,219.238,219.92,247.203,184.896,247.203z"/>
            </svg>
        </button>
        {popup ? (
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
                      Properties
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setPopup(false)}
                    >
                    </button>
                  </div>
                  {/*body*/}
                  <div className="mx-3 mt-4 my-3 relative px-4 py-3 flex-auto bg-white rounded-md shadow-md">
                    <p className=" text-slate-500 text-lg leading-relaxed">
                        <div className="mb-2">
                            Name:
                            <input className="ml-2 border w-24"
                                   name='name'
                                   placeholder={serverUpdater.serverInstance.name}
                                   onChange={(event) => onChangeName(event.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            Server IP:
                            <input className="ml-2 border w-36"
                                   name='ip'
                                   placeholder={serverUpdater.serverInstance.ip}
                                   onChange={(event) => onChangeIP(event.target.value)}
                            />.mcsaas.com
                        </div>
                        <div className="mb-2">{/* IMPORTANTE: CREARE LOGICA COERENTE */}
                            <label className="mr-2">Status:</label>
                            {serverUpdater.serverInstance.status ?
                                    <span style={{ color: 'green' }}>
                                        {'Online'}
                                    </span> 
                                    :
                                    <span style={{ color: 'red' }}>
                                        {'Offline'}
                                    </span>}
                        </div>
                        <div className="mb-2">
                            <label>Version:</label>
                            <select className="ml-2 border"
                                    name="version"
                                    id="version"
                                    defaultValue={serverUpdater.serverInstance.version}
                                    onChange={(event) => onChangeVersion(event.target.value)}>
                                <option value="1.18">1.18</option>
                                <option value="1.19">1.19</option>
                                <option value="1.19.4">1.19.4</option>
                                <option value="1.20">1.20</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label>Game mode:</label>
                            <select className="ml-2 border"
                                    name="gamemode"
                                    id="gamemode"
                                    defaultValue={serverUpdater.serverInstance.gamemode}
                                    onChange={(event) => onChangeGameMode(event.target.value)}>
                                <option value="0">Survival</option>
                                <option value="1">Creative</option>
                                <option value="2">Adventure</option>
                                <option value="3">Spectator</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label>Difficulty:</label>
                            <select className="ml-2 border"
                                    name="difficulty"
                                    id="difficulty"
                                    defaultValue={serverUpdater.serverInstance.difficulty}
                                    onChange={(event) => onChangeDifficulty(event.target.value)}>
                                <option value="0">Peaceful</option>
                                <option value="1">Easy</option>
                                <option value="2">Normal</option>
                                <option value="3">Hard</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            White-list:
                            <input className="ml-2"
                                   type="checkbox"                                   
                                   defaultChecked={serverUpdater.serverInstance.whitelist}
                                   onChange={(event) => onChangeWhiteList(event.target.checked)}/>
                        </div>
                        <div className="mb-2">
                            Cracked clients:
                            <input className="ml-2"
                                   type="checkbox"
                                   defaultChecked={serverUpdater.serverInstance.cracked}
                                    onChange={(event) => onChangeCracked(event.target.checked)}/>
                        </div>
                        <div className="mb-2">
                            Fly:
                            <input className="ml-2"
                                   type="checkbox"
                                   defaultChecked={serverUpdater.serverInstance.fly}
                                   onChange={(event) => onChangeFly(event.target.checked)}/>
                        </div>
                        <div className="mb-2">
                            Resource pack:
                            <input className="ml-1 border"
                                   name='resourcePpack'
                                   placeholder='None'
                                   onChange={(event) => onChangeResourcePack(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="formFile"
                                className="inline-block"
                                >World
                            </label>
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="formFile" />
                        </div>
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500  active:bg-red-600 bg-white rounded-md shadow-md font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setPopup(false)}
                    >
                      Close
                    </button>
                    <AlertPopup serverUp={serverUpdater} newProps={properties} closePopupBack={setPopup}></AlertPopup>
                    {/*<button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={onClickSave}
                    >
                      Save Changes
                            </button>*/}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }