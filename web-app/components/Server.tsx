import { useEffect, useState } from 'react';
import '@/app/globals.css'
import EditPopup from '@/components/EditPopup'
import { ServerProperties } from '@/common/types';

const initState: Array<ServerProperties>= [
    { id: 1, name: 'Vanilla', ip: 'Vanilla', status: false, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
    difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: ""},
    { id: 2, name: 'Modded', ip: 'Modded', status: false, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
    difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: ""},
  ];

export type ServerUpdater = {
    serverInstance: ServerProperties
    updateCallback: (props: ServerProperties) => void //callback per aggiornare le impostazioni del server (implementata da updateProps)
    active: number //id del server attivo
    updateActiveBack: (id: number) => void //callback per aggiornare l'id del server attivo (implementata da updateActive)
}
  
var serverCount = Object.keys(initState).length
var maxIndex = Object.keys(initState).length

export default function Server() {
    const [servers, setServers] = useState(initState); //primo el: stato, secondo el: funzione per aggiornarlo

    const [activeServer, setActive] = useState(0);

    function updateProps(props: ServerProperties) { //da passare al popup
        
        setServers(s => {
            return s.map(server => {
                if (server.id === props.id) {
                    return {...server,...props}
                }
                return server
            })
        })
    }

    function updateActiveServer(id: number) {
        setServers(s => {
            return s.map(server => {
                if (server.id === id) {
                    let newServer = server
                    newServer.status = true
                    return {...server,...newServer}
                } else if (server.id === activeServer) {
                    let oldServer = server
                    oldServer.status = false
                    return {...server,...oldServer}
                }
                return server
            })
        })
        setActive(id)
        /* da continuare
        setServers(
            foreach => servers.filter((s) => {
            s.id !== id}))
        */
    }
    

    /* useEffect con GET dal DB
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setUsers(res))
        console.log('load data here')
      }, []) //secondo parametro: dipendenze (se vuoto, questo useEffect è chiamato solo quando il componente viene montato, poi basta)
    */

      const handleClick = () => {
        alert('button click catched');
    };
    function removeServer(id: number) {
        if (activeServer == id)
            alert("Action blocked. The server is running")
        else {
            serverCount--
            setServers(servers.filter((s) => s.id !== id));
        }
    }

    function addServer() {
        serverCount++
        maxIndex++
        const newServer = { id: maxIndex, name: "server"+maxIndex, ip: "server"+maxIndex, status: false, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
        difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: "" }
        setServers(s => [...s, newServer])

      // aggiorna stato con POST (aggiunge l'utente aggiornando la lista sul DB)
      /*
        fetch('https://jsonplaceholder.typicode.com/users', {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify({ name: `user ${Math.random()}`})    
        })
        .then(res => res.json())
        .then(res => setUsers(s => [...s, res]))
      */
    }
    
    return (
        <div className="flex items-center justify-center">
            <div
                className="w-96 pr-0 mx-3 px-3 py-2 bg-white rounded-md shadow-md "
                style={{
                backgroundImage: `url('/assets/bg3.jpg')`,
                height: '700px'
                }}>
                <pre className="grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md">
                    {'Name'} &#09;&#09;&#09;&#09;{'Status'} &#09;&#09;{'Version'}
                </pre>
                {servers.map(server => {
                        return <pre className="grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md"
                                    key={server.id}>
                                        <span className="">
                                            {server.name}
                                        </span>
                                            {server.status ?
                                    <span className=""
                                          style={{ color: 'green' }}>
                                        {'Online'}
                                    </span>
                                    :
                                    <span className=""
                                          style={{ color: 'red' }}>
                                        {'Offline'}
                                    </span>}
                                    <span className="">
                                        {server.version}
                                    </span>
                                    <span className="">
                                        <EditPopup serverInstance={server} updateCallback={updateProps} active={activeServer} updateActiveBack={updateActiveServer}/>
                                        <button className="pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                                onClick={() => removeServer(server.id)}>
                                            <svg className="w-4 h-4 mr-2"
                                                viewBox="0 2 17 15">
                                                <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"/>
                                            </svg>
                                        </button>
                                        <button className="pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                                onClick={() => updateActiveServer(server.id)}>
                                            <svg className="w-4 h-4 mr-2"
                                                viewBox="100 115 280 280">
                                                <path d="M256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.32 512 256s-28.66 134.69-74.98 181.01C390.7 483.33 326.68 511.99 256 511.99s-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.7 74.98-181.02C121.3 28.66 185.32 0 256 0zm-19.16 136.45c0-10.57 8.59-19.16 19.16-19.16s19.16 8.59 19.16 19.16V199c0 10.57-8.59 19.16-19.16 19.16s-19.16-8.59-19.16-19.16v-62.55zm72.94 52.45c-8.17-6.65-9.42-18.69-2.78-26.87 6.65-8.17 18.7-9.42 26.87-2.77 14.26 11.56 25.88 26.2 33.8 42.84 7.67 16.11 11.97 34.14 11.97 53.12 0 34.14-13.85 65.06-36.21 87.42l-1.17 1.08c-22.31 21.74-52.77 35.13-86.26 35.13-34.06 0-64.99-13.86-87.38-36.26-22.41-22.31-36.26-53.23-36.26-87.37 0-18.89 4.29-36.86 11.94-52.97 7.93-16.69 19.53-31.36 33.71-42.9 8.17-6.65 20.22-5.4 26.86 2.77 6.65 8.18 5.4 20.22-2.77 26.87-9.76 7.95-17.76 18.06-23.22 29.57-5.25 11.04-8.2 23.49-8.2 36.66 0 23.56 9.57 44.89 24.99 60.32 15.38 15.47 36.72 24.99 60.33 24.99 23.16 0 44.13-9.18 59.44-24.05l.89-.94c15.42-15.43 24.99-36.76 24.99-60.32 0-13.15-2.96-25.59-8.23-36.66a85.591 85.591 0 0 0-23.31-29.66zm102.97-89.65C372.64 59.15 317.21 34.33 256 34.33c-61.21 0-116.64 24.82-156.75 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.21 24.82 116.63 64.92 156.74 40.11 40.1 95.54 64.92 156.75 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.21-24.82-116.64-64.92-156.75z"/>
                                            </svg>

                                        </button>
                                    </span>
                                </pre>
                })}
                <button className="mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md"
                        onClick={addServer}>Add</button>
            </div>
            <div className="flex items-center ml-20 mt-3 px-3 py-2 bg-white rounded-md shadow-md"
                 style={{
                 backgroundImage: `url('/assets/bg2.png')`,
                 height: "500px",
                 width: "1000px"
                 }}>
                <div className="self-start px-2 bg-white rounded-md shadow-md">
                    Active server
                </div>
                <div>
                    {activeServer!=0 ?
                    <span className="">
                        {
                            servers.map(server => {
                                if (server.id === activeServer) {
                                    return ( //mettere una grid
                                    <div key={server.id} className="flex px-3 py-2 bg-white rounded-md shadow-md">
                                        <div>
                                            <img className="h-52 w-auto mr-10 border-solid border-2 border-gray-400" 
                                                 src="/assets/test.jpg">
                                            </img>
                                            <label htmlFor="message" 
                                                   className="block mt-1"
                                                   resize-none>Log
                                            </label>
                                            <textarea readOnly 
                                                      id="message"
                                                      className="border border-gray-300 block p-2.5 w-56">
                                            </textarea>
                                        </div>
                                        
                                        <div className="mr-40 mb-10">
                                            Name:  {server.name}                                            
                                            <div>
                                                ServerIP:  {server.ip}.mcsaas.com
                                                <div>
                                                    Version: {server.version}
                                                    <div>
                                                        Players: {server.curp}/{server.maxp}
                                                    </div>
                                                </div>                                                    
                                            </div>
                                        </div>
                                        <button className="mb-1 mr-1 self-end"
                                                onClick={() => updateActiveServer(0)}>
                                            <svg className=""
                                                viewBox="0 0 297 297"
                                                fill="#000000"
                                                height="25px" width="25px">
                                                <path d="M148.5,0C66.486,0,0,66.486,0,148.5S66.486,297,148.5,297S297,230.514,297,148.5S230.514,0,148.5,0z M213.292,190.121 c0,12.912-10.467,23.379-23.378,23.379H106.67c-12.911,0-23.378-10.467-23.378-23.379v-83.242c0-12.912,10.467-23.379,23.378-23.379 h83.244c12.911,0,23.378,10.467,23.378,23.379V190.121z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    )
                                }
                            })
                        }
                    </span>:<></>}
                </div>
            </div>
        </div>
      );
    }