import React, {useState} from 'react'

function Input ({label, type, id, placeholder , style , className}){
    const [value, setValue] = useState("");

    const handleChange =(event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type}
            placeholder={placeholder}
            style={style}
            className={className}
            id={id}
            value={value}
            onChange={handleChange}
             />
        </div>
    )
}

export default Input