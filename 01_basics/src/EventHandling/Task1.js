// Task1 = Input name and age from user and show it on alert dialog box when user click on submit button.

import React, {useState} from "react";
const Task1 = () => {
    const [form, setForm] = useState({
        name: '',
        age: 0
    })

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        // alert("form is successfully submitted");
        // alert(form.name+" "+ form.age);
    }

    return(
        <>
        <form>
            <label>Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <label>Age:</label>
            <input type="number" name="age" value={form.age} onChange={(e)=> {handleChange(e)}} />
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </form>
        {/* if we use here the submit button outside the form then we don't have to write e.preventdefault in handle function */}
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Task1;
