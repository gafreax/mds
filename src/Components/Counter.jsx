import { useEffect, useState } from "react"
import Typography from "./Typography"
import Colors from "./Colors"

async function updateImage(count, setImage) {
    const url = `https://picsum.photos/id/${count}/300/300`
    console.log("url", url)
    const data = await fetch(url)
    console.log(data.url)
    setImage(data.url)
}

function Counter() {
    const [count, setCount] = useState(0)
    const [image, setImage] = useState("")
    
    useEffect(() => {
        console.log("ogni render")
    })

    useEffect(() => {
        console.log("loading")
        const interval = setInterval(() => console.log("Intervallo"), 30000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        updateImage(count, setImage)
        document.title = `Immagine numero: ${count}`
    }, [count])

    function handleIncrement(increment) {
        if(increment > 0 && increment <= 29 ) {
            setCount(increment)
        } else if( increment === 0 ) {
            setCount(29)
        } else {
            setCount(1)
        }
    }

    return <>
        <Typography componentType="h3" color={Colors.secondary}>{count}</Typography>
        <img src={image} alt="immagine randomica" />
        <button onClick={() => handleIncrement(count-1) }>Indietro</button>
        <button onClick={() => handleIncrement(count+1) }>Avanti</button>
    </>
}

export default Counter