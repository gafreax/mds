import Element from '../Element';

import "./style.scss";

function InputText({label, placeholder, size=12}) {
    return <Element size={size}>
        <label className='mds-label'>{label}</label>
        <input className='mds-input' type="text" placeholder={placeholder} />
    </Element>;
}

export default InputText;