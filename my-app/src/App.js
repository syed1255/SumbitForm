import React, { useState } from "react";


const App = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)

        const { name, value } = event.target;
        setFullName((preValue) => {
            console.log(preValue);

            return {
                ...preValue,
                [name]: value,
            };
        })

    };


    const onSubmits = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>
                            Hello {fullName.fname}  {fullName.fullname}
                        </h1>
                        <p> {fullName.email} </p>
                        <p> {fullName.phone} </p>
                        <p> {fullName.qua} </p>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="fname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />

                        <input
                            type="text"
                            placeholder="Enter Your Last Name"
                            name="lname"
                            onChange={inputEvent}
                            value={fullName.fname}
                        />

                        <input
                            type="email"
                            placeholder="Enter Your email"
                            name="email"
                            onChange={inputEvent}
                            value={fullName.fname}
                            autoComplete="off"
                        />

                        <input
                            type="number"
                            placeholder="Enter Your Mobile"
                            name="phone"
                            onChange={inputEvent}
                            value={fullName.phone}

                        />

                        <input
                            type="text"
                            placeholder="Enter Your Qua"
                            name="qua"
                            onChange={inputEvent}
                            value={fullName.qua} S
                        />
                        <button type="submit">submit Me</button>
                    </div>
                </form>
            </div>
        </>

    );


}


export default App;