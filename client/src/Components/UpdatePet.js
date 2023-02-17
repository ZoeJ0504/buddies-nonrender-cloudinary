import React, { useState } from "react";

function UpdatePet({ pet, handlePatchPets }) {

    const [newPet, setNewPet] = useState(pet)



    

    const handleChange = (event) => {
        setNewPet({ ...newPet, [event.target.name]: event.target.value })
    }

    const handleUpdateSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData()
        Object.keys(newPet).forEach(key => formData.append(key, newPet[key]))
        handlePatchPets(formData, pet)
    }

    return (
        <div>
            <form onSubmit={handleUpdateSubmit}>
                <input onChange={handleChange} type="text" placeholder="name" name="name" />
                <input onChange={handleChange} type="text" placeholder="animal-type" name="animal_type" />
                <input onChange={handleChange} type="text" placeholder="breed" name="breed" />
                <input onChange={handleChange} type="date" name="birthday" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePet