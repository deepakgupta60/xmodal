import React, { useState } from 'react'

import "./Modal.css";

const Model = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();



        if (!formData.email.includes("@")) {
            alert("Invalid email. Please check your email address.")
            return
        }

        if (formData.phone.length<10) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return
        }


        let todayDate = new Date();
        let selectedDate = new Date(formData.dob);
        if (selectedDate>todayDate) {
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return
        }


        closeModal()
    }
    return (
        <>
            <div>
                <h1>User Details Modal</h1>
                <button onClick={openModal}>Open Form</button>
                {
                    isOpen && (
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content"  >
                                <button onClick={closeModal} className='close'>&times;</button>
                                <h3>Fill Details</h3>
                                <form onSubmit={handleSubmit}>

                                    <span>Username:</span> <br />
                                    <input name='username' id='username' onChange={handleChange} type='text' required /> <br /> <br />

                                    <span>Email:</span> <br />
                                    <input type='email' id='email' onChange={handleChange} name='email' required /> <br /> <br />

                                    <span>Phone:</span> <br />
                                    <input type='text' id='phone' onChange={handleChange} name='phone' required /> <br /> <br />

                                    <span>Date of Birth:</span> <br />
                                    <input type='date' id='dob'  onChange={handleChange} name="dob" required /><br /> <br />

                                    <br />
                                    <button type='submit' className='submit-button'>Submit</button>
                                </form>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Model