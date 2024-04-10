import Card from "../Components/Card"
import Element from "../Components/Element"
import Container from "../Components/Container"

function CardExample() {


    return <Container>
        <Element columns={4}>
            <Card title="card title" image="https://picsum.photos/seed/12/160/200">Card</Card>
        </Element>
        <Element columns={4}>
            <Card title="card title 2" image="https://picsum.photos/seed/23/160/200">Sono un'altra card</Card>
        </Element>
        <Element columns={4}>
            <Card title="card title 2" image="https://picsum.photos/seed/34/160/200">Sono un'altra card</Card>
        </Element>
    </Container>
}

export default CardExample