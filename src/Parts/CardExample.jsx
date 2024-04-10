import Card from "../Components/Card"
import Element from "../Components/Element"

function CardExample() {


    return <>
        <Element columns={4}>
            <Card title="card title" image="https://picsum.photos/seed/12/160/200">Card</Card>
        </Element>
        <Element columns={4}>
            <Card title="card title 2" image="https://picsum.photos/seed/23/160/200">Sono un'altra card</Card>
        </Element>
        <Element columns={4}>
            <Card title="card title 2" image="https://picsum.photos/seed/34/160/200">Sono un'altra card</Card>
        </Element>
    </>
}

export default CardExample