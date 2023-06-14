import { useEffect, useState } from 'react';
import '@/app/globals.css'
import PopupButton from '@/components/EditPopup'


export type ServerProperties = {
    id: number
    name: string
    ip: string
    status: boolean //false-Offline  true-Online
    version: string
    curp: number
    maxp: number
    gamemode: number //0-survival  1-Creative  2-Adventure  3-Spectator
    difficulty: number //0-Peaceful  1-Easy  2-Normal  3-Hard
    whitelist: boolean
    cracked: boolean
    fly: boolean
    resourcepack: string
}

const initState: Array<ServerProperties>= [
    { id: 1, name: 'Vanilla', ip: 'Vanilla', status: true, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
    difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: ""},
    { id: 2, name: 'Modded', ip: 'Modded', status: false, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
    difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: ""},
  ];

export type Culo = {
    serverInstance: ServerProperties
    updateCallback: (props: ServerProperties) => void
}
  
var serverCount = Object.keys(initState).length
var maxIndex = Object.keys(initState).length
var selected = 0

export default function Server() {
    const [servers, setServers] = useState(initState); //primo el: stato, secondo el: funzione per aggiornarlo

    const curServer: ServerProperties = initState[1]

    function update(props: ServerProperties) { //da passare al popup
        
        setServers(s => {
            return s.map(server => {
                if (server.id === props.id) {
                    return {...server,...props}
                }
                return server
            })
        })

        /* quello che fin'ora funziona meglio
        setServers(servers.filter((s) => s.id !== props.id));
        const newServer = { id: props.id, name: props.name, status: props.status, version: props.version, curp: props.curp, maxp: 5, gamemode: 0,
        difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: "" }
        setServers(s => [...s, newServer])
        */
        
        //servers.filter(s => s.id == props.id)
        /*curServer.id = props.id
        curServer.name = props.name
        curServer.status = props.status
        curServer.version = props.version*/
    }

    /* useEffect con GET dal DB
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => setUsers(res))
        console.log('load data here')
      }, []) //secondo parametro: dipendenze (se vuoto, questo useEffect è chiamato solo quando il componente viene montato, poi basta)
    */
    function removeServer(id: number) {
        serverCount--
        setServers(servers.filter((s) => s.id !== id));
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
    
      // versione in locale
    }
    
    return (
        <div className="flex items-center justify-center">
            <div
                className="width mx-3 px-3 py-2 bg-white rounded-md shadow-md "
                style={{
                backgroundImage: `url('/assets/bg3.jpg')`,
                height: '700px'
                }}>
                <pre className="mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md">
                    {'Name'} &#09;&#09;&#09;&#09;{'Status'} &#09;&#09;{'Version'}      {''}
                </pre>
                {servers.map(server => {
                        return <pre className="mx-3 mt-3 flex-right px-3 py-2 bg-white rounded-md shadow-md"
                                    key={server.id}>{server.name}   {server.status ?
                                    <span style={{ color: 'green' }}>
                                        {'Online'}
                                    </span> 
                                    :
                                    <span style={{ color: 'red' }}>
                                        {'Offline'}
                                    </span>}   {server.version}
                                    <PopupButton serverInstance={server} updateCallback={update}/>
                                    <button className="pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                            onClick={() => removeServer(server.id)}>
                                        <svg className="w-4 h-4 mr-2"
                                             viewBox="0 0 17 15">
                                            <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"/>
                                        </svg>
                                    </button>
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
                <div className="self-start mx-50 px-2 bg-white rounded-md shadow-md">
                    Active server
                </div>
            </div>
        </div>
      );
    }