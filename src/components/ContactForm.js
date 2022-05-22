import { useState } from 'react';

const ContactForm = () => {
    const [inputValue, updateInputValue] = useState('');

    const handleChange = (e) => {
        console.log(e.target.value);
        updateInputValue(e.target.value);
    }

    return (
        <form>
            <input value={inputValue} onChange={handleChange}/>
        </form>
    );
};

export default ContactForm;