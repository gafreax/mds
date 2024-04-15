import { useParams } from "react-router-dom"
import CardComponent from "../Components/Card"
import Element from "../Components/Element"

function Card() {
    const {id} = useParams()
    const image = `https://picsum.photos/seed/${id}/160/200`
    return <>
        <Element columns={4}>
        </Element>
        <Element columns={4}>
            <CardComponent title="card title" image={image}>Sono un'altra card</CardComponent>
        </Element>
        <Element columns={4}>
        </Element>
    </>
}

export default Card