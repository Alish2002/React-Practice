// make a login form having name email and phone no and show alert when user click on submit
import React, { useState } from "react";

const Task3 = () => {

    const[form, setForm] = useState({
        name: '',
        email: '',
        phoneNo: 0
    })
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e)=> {
        e.preventDefault();
        alert("form is submitted");
    }
    return(
        <>
            <form>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={(e)=>{handleChange(e)}}/>
                <label>Email:</label>
                <input type="text" name="email" value={form.email} onChange={(e)=>{handleChange(e)}}/>
                <label>Phone No:</label>
                <input type="number" name="phoneNo" value={form.phoneNo} onChange={(e)=>{handleChange(e)}}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
export default Task3;