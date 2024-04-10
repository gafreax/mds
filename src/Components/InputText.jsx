import Element from './Element';

function InputText({label, size=12}) {
    return <Element size={size}>
        <label>{label}</label>
        <input type="text" />
    </Element>;
}

export default InputText;