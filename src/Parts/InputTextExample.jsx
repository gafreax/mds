import Element from "../Components/Element"
import InputText from "../Components/InputText"

function InputTextExample() {
    return <Element columns={12}>
        <InputText label="Nome" placeholder="Inserisci il tuo nome"/>
        <InputText label="Cognome" placeholder="Inserisci il tuo cognome"/>
    </Element>
}

export default InputTextExample