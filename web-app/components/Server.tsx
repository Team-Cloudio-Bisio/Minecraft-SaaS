import { useContext, useEffect, useState } from 'react';
import '@/app/globals.css'
import EditPopup from '@/components/EditPopup'
import { Server, ServerProperties, User } from '@/common/types';
import { useUserContext } from '@/context/UserProvider';
import { getServerFromServerProperties, getServerPropertiesFromServer } from '@/common/utils';

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
    updateActiveBack: (server: ServerProperties) => void //callback per aggiornare l'id del server attivo (implementata da updateActive)
    popupIsOpen: boolean
    setPopupIsOpen: (value: boolean) => void
}
  
var serverCount = Object.keys(initState).length
var maxIndex = Object.keys(initState).length

export default function Server() {
    const { user, setUser } = useUserContext();
    const [servers, setServers] = useState(initState); //primo el: stato, secondo el: funzione per aggiornarlo
    const [currentServer, setCurrentServer] = useState<ServerProperties>();
    const [activeServer, setActive] = useState(0);
    const [popup, setPopup] = useState(true);
    const [create, setCreate] = useState(false);

    useEffect(() => {
        fetch(`/api/server/byUser?api=${process.env.NEXT_PUBLIC_API_KEY}`, { method: "POST", body: JSON.stringify({username: user.username, userPassword: user.userPassword})})
            .then(res => res.json())
            .then(res => setServers(res))
            .catch(() => console.log("fetch error"))
        // fetch(`http://51.138.90.192:80/Server/byUser?username=${user.username}`, { method: "GET" } )
        //     .then(res => res.json())
        //     .then((res: Array<Server>) => {
        //         const list: Array<ServerProperties> = [];
        //         res.map((server: Server) => list.push(getServerPropertiesFromServer(server)));
        //         setServers(list)
        //     })
        //     .catch(() => console.log("fetch error"))
    }, []);

    function openPopupWith(server: ServerProperties) {
        setCurrentServer(server);
        setPopup(true);
    }

    // aggiorna server (tasto save changes)
    function updateProps(props: ServerProperties) { //da passare al popup
        const server = getServerFromServerProperties(props, user)

        if(create) {
            fetch(`/api/server?api=${process.env.NEXT_PUBLIC_API_KEY}`, { method: "POST", body: JSON.stringify(server)})
                .then(res => res.json())
                .then(res => {
                    const props = getServerPropertiesFromServer(res);
                    setServers(s => [...s, props]);
                    console.log("server created");
                })
                .catch(() => console.log("creation error"));

            setCreate(false);
        } else {
            setServers(s => {
                return s.map(server => {
                    if (server.id === props.id) {
                        return {...server,...props}
                    }
                    return server
                })
            })
        }

        setPopup(false)
    }

    // TURN ON TURN OFF
    function updateActiveServer(props: ServerProperties) {
        console.log(props.name)
        if(!props.status) {
            fetch(`/api/server/${props.name}/start?api=${process.env.NEXT_PUBLIC_API_KEY}`, { method: "GET", })
                .then(res => res.json())
                .then(res => {
                    if(res.message === "OK") {
                        props.status = true
                        setServers(servers.filter((s) => s.name !== props.name))
                        setServers(s => [...s, props]);
                        console.log("server started");
                    } else {
                        alert("Start error");
                    }
                })
                .catch(() => console.log("[catch]start error"));
        } else {
            fetch(`/api/server/${props.name}/stop?api=${process.env.NEXT_PUBLIC_API_KEY}`, { method: "GET", })
                .then(res => res.json())
                .then(res => {
                    if(res.message === "OK") {
                        props.status = false
                        setServers(servers.filter((s) => s.name !== props.name))
                        setServers(s => [...s, props]);
                        console.log("server stopped");
                    } else {
                        alert("Stop error");
                    }
                })
                .catch(() => console.log("[catch]Stop error"));
        }

        // setServers(s => {
        //     return s.map(server => {
        //         if (server.name === props.name) {
        //             let newServer = server
        //             newServer.status = true
        //             return {...server,...newServer}
        //         } else if (server.id === activeServer) {
        //             let oldServer = server
        //             oldServer.status = false
        //             return {...server,...oldServer}
        //         }
        //         return server
        //     })
        // })
        // setActive(props.id)
        /* da continuare
        setServers(
            foreach => servers.filter((s) => {
            s.id !== id}))
        */
    }

    function removeServer(server: ServerProperties) {
        const s = getServerFromServerProperties(server, user);
        fetch(`/api/server?api=${process.env.NEXT_PUBLIC_API_KEY}`, { method: "DELETE", body: JSON.stringify(s)})
            .then(res => res.json())
            .then(res => {
                if(res.message === 'OK') 
                    setServers(servers.filter((s) => s.name !== server.name))
                else
                    alert("Delete error...")
            })
            .catch(() => console.log("creation error"));

        // if (activeServer == server.id)
        //     alert("Action blocked. The server is running")
        // else {
        //     serverCount--
        //     setServers(servers.filter((s) => s.id !== server.id));
        // }
    }

    function addServer() {
        setPopup(true);
        setCreate(true);
        // serverCount++
        // maxIndex++
        // const newServer = { id: maxIndex, name: "server"+maxIndex, ip: "server"+maxIndex, status: false, version: '1.20', curp: 0, maxp: 5, gamemode: 0,
        // difficulty: 2, whitelist: false, cracked: false, fly: false, resourcepack: "" }
        // setServers(s => [...s, newServer])
    }
    
    return (
        <div className="flex items-center justify-center">
            <div
                className="w-96 pr-0 mx-3 px-3 py-2 bg-white rounded-md shadow-md "
                style={{
                backgroundImage: `url('/assets/bg3.jpg')`,
                height: '700px'
                }}>
                <pre className="grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white text-slate-950 rounded-md shadow-md">
                    {'Name'} &#09;&#09;&#09;&#09;{'Status'} &#09;&#09;{'Version'}
                </pre>
                {popup && currentServer &&
                    <EditPopup active={0} popupIsOpen={true} serverInstance={currentServer} setPopupIsOpen={setPopup} updateActiveBack={updateActiveServer} updateCallback={updateProps}/>
                }
                {servers.map(server => {
                        return <pre className="grid grid-cols-6 gap-20 mx-3 mt-3 px-3 py-2 bg-white rounded-md shadow-md"
                                    key={server.id}>
                                        <span className="text-slate-950">
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
                                    <span className="text-slate-950">
                                        {server.version}
                                    </span>
                                    <span className="">
                                        {/* <EditPopup popupIsOpen={popup} setPopupIsOpen={setPopup} serverInstance={server} updateCallback={updateProps} active={activeServer} updateActiveBack={updateActiveServer}/> */}
                                        <button
                                        className= "pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                        type="button"
                                        onClick={() => openPopupWith(server)}
                                        >
                                            <svg className="w-4 h-4 mr-2" 
                                                fill="#000000"
                                                viewBox="0 0 369.793 340.792">
                                                <path d="M320.83,140.434l-1.759-0.627l-6.87-16.399l0.745-1.685c20.812-47.201,19.377-48.609,15.925-52.031L301.11,42.61 c-1.135-1.126-3.128-1.918-4.846-1.918c-1.562,0-6.293,0-47.294,18.57L247.326,60l-16.916-6.812l-0.679-1.684 C210.45,3.762,208.475,3.762,203.677,3.762h-39.205c-4.78,0-6.957,0-24.836,47.825l-0.673,1.741l-16.828,6.86l-1.609-0.669 C92.774,47.819,76.57,41.886,72.346,41.886c-1.714,0-3.714,0.769-4.854,1.892l-27.787,27.16 c-3.525,3.477-4.987,4.933,16.915,51.149l0.805,1.714l-6.881,16.381l-1.684,0.651C0,159.715,0,161.556,0,166.474v38.418 c0,4.931,0,6.979,48.957,24.524l1.75,0.618l6.882,16.333l-0.739,1.669c-20.812,47.223-19.492,48.501-15.949,52.025L68.62,327.18 c1.162,1.117,3.173,1.915,4.888,1.915c1.552,0,6.272,0,47.3-18.561l1.643-0.769l16.927,6.846l0.658,1.693 c19.293,47.726,21.275,47.726,26.076,47.726h39.217c4.924,0,6.966,0,24.859-47.857l0.667-1.742l16.855-6.814l1.604,0.654 c27.729,11.733,43.925,17.654,48.122,17.654c1.699,0,3.717-0.745,4.876-1.893l27.832-27.219 c3.501-3.495,4.96-4.924-16.981-51.096l-0.816-1.734l6.869-16.31l1.64-0.643c48.938-18.981,48.938-20.831,48.938-25.755v-38.395 C369.793,159.95,369.793,157.914,320.83,140.434z M184.896,247.203c-35.038,0-63.542-27.959-63.542-62.3 c0-34.342,28.505-62.264,63.542-62.264c35.023,0,63.522,27.928,63.522,62.264C248.419,219.238,219.92,247.203,184.896,247.203z"/>
                                            </svg>
                                        </button>
                                        <button className="pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                                onClick={() => removeServer(server)}>
                                            <svg className="w-4 h-4 mr-2"
                                                viewBox="0 2 17 15">
                                                <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z"/>
                                            </svg>
                                        </button>
                                        <button className="pl-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-10"
                                                onClick={() => updateActiveServer(server)}>
                                            <svg className="w-4 h-4 mr-2"
                                                viewBox="100 115 280 280">
                                                <path d="M256 0c70.68 0 134.7 28.66 181.02 74.98C483.34 121.3 512 185.32 512 256s-28.66 134.69-74.98 181.01C390.7 483.33 326.68 511.99 256 511.99s-134.7-28.66-181.02-74.98C28.66 390.69 0 326.68 0 256c0-70.68 28.66-134.7 74.98-181.02C121.3 28.66 185.32 0 256 0zm-19.16 136.45c0-10.57 8.59-19.16 19.16-19.16s19.16 8.59 19.16 19.16V199c0 10.57-8.59 19.16-19.16 19.16s-19.16-8.59-19.16-19.16v-62.55zm72.94 52.45c-8.17-6.65-9.42-18.69-2.78-26.87 6.65-8.17 18.7-9.42 26.87-2.77 14.26 11.56 25.88 26.2 33.8 42.84 7.67 16.11 11.97 34.14 11.97 53.12 0 34.14-13.85 65.06-36.21 87.42l-1.17 1.08c-22.31 21.74-52.77 35.13-86.26 35.13-34.06 0-64.99-13.86-87.38-36.26-22.41-22.31-36.26-53.23-36.26-87.37 0-18.89 4.29-36.86 11.94-52.97 7.93-16.69 19.53-31.36 33.71-42.9 8.17-6.65 20.22-5.4 26.86 2.77 6.65 8.18 5.4 20.22-2.77 26.87-9.76 7.95-17.76 18.06-23.22 29.57-5.25 11.04-8.2 23.49-8.2 36.66 0 23.56 9.57 44.89 24.99 60.32 15.38 15.47 36.72 24.99 60.33 24.99 23.16 0 44.13-9.18 59.44-24.05l.89-.94c15.42-15.43 24.99-36.76 24.99-60.32 0-13.15-2.96-25.59-8.23-36.66a85.591 85.591 0 0 0-23.31-29.66zm102.97-89.65C372.64 59.15 317.21 34.33 256 34.33c-61.21 0-116.64 24.82-156.75 64.92-40.1 40.11-64.92 95.54-64.92 156.75 0 61.21 24.82 116.63 64.92 156.74 40.11 40.1 95.54 64.92 156.75 64.92 61.21 0 116.64-24.82 156.75-64.92 40.1-40.11 64.92-95.53 64.92-156.74 0-61.21-24.82-116.64-64.92-156.75z"/>
                                            </svg>

                                        </button>
                                    </span>
                                </pre>
                })}
                <button className="mx-3 mt-3 px-3 py-2 bg-white text-slate-950 rounded-md shadow-md"
                        onClick={addServer}>Add</button>
            </div>
            <div className="flex items-center ml-20 mt-3 px-3 py-2 bg-white rounded-md shadow-md"
                 style={{
                 backgroundImage: `url('/assets/bg2.png')`,
                 height: "500px",
                 width: "1000px"
                 }}>
                <div className="self-start px-2 bg-white text-slate-950 rounded-md shadow-md">
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
                                                onClick={() => updateActiveServer(servers[0])}>
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