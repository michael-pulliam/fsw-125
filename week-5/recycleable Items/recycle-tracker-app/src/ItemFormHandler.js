import { useState } from "react";

export default function ItemFormHandler({submit, btnText, title, Description, _id, date}){
    const initialInputs = {title: title || '', Description: Description || '', date: date || ''};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id)
        setInputs(initialInputs)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='title'
            value={inputs.title}
            onChange={handleChange}
            placeholder='Title'
            />
            <input 
            type='text'
            name='Description'
            value={inputs.Description}
            onChange={handleChange}
            placeholder='Description'
            />
             <input 
            type='text'
            name='date'
            value={inputs.date}
            onChange={handleChange}
            placeholder='date'
            />
            <button>{btnText}</button>

        </form>
    )
}