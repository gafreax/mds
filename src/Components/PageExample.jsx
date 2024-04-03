import { useState } from "react"

const DEFAULT_PARTI_ATTIVE = {
    sidebar: true,
    menu: false,
    content: true
}

function PageExample() {
    const [partiAttive, setPartiAttive] = useState(DEFAULT_PARTI_ATTIVE)

    return <div>
        <button onClick={() => setPartiAttive({ ...partiAttive, sidebar: !partiAttive.sidebar })}>
            {partiAttive.sidebar ? "nascondi sidebar" : "visualizza sidebar"}
        </button>
        <button onClick={() => setPartiAttive({ ...partiAttive, menu: !partiAttive.menu })}>
            {partiAttive.menu ? "nascondi menu" : "visualizza menu"}
        </button>
        <button onClick={() => setPartiAttive({ ...partiAttive, content: !partiAttive.content })}>
            {partiAttive.content ? "nascondi content" : "visualizza content"}
        </button>
        <div>
            {partiAttive.menu && <div className='menu'>| menu | </div>}
            <div>
                {partiAttive.sidebar && <span className='sidebar'> ==> sidebar | </span>}
                {partiAttive.content && <span className='content'> Ciao mondo sono un contenuto</span>}
            </div>
        </div>
    </div>
}

export default PageExample