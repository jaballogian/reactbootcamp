import React, {useState} from 'react'

function App(){
    const [inputData, setInputData] = useState({firstname: "", lastname: ""})
    const [contactsData, setContactsData] = useState([])

    function handleOnChange(event){
        const {name, value} = event.target
        setInputData((previousInputData) => {
            return{
                ...previousInputData,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        setContactsData((previousContactsData) => {
            return(
                [...previousContactsData,
                inputData]
            )
        })
    }

    const contacts = contactsData.map((contact) => {
        return(
            <h2 key={contact.firstname + contact.lastname}>
                {contact.firstname} {contact.lastname}
            </h2>
        )
    })

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="First Name"
                    name="firstname"
                    value={inputData.firstname}
                    onChange={handleOnChange}/>
                
                <input
                    placeholder="Last Name"
                    name="lastname"
                    value={inputData.lastname}
                    onChange={handleOnChange}/>

                <br/>
                <button>Add Contact</button>
            </form>

            {contacts}
        </>
    )
}

export default App