import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import NewPet from "../Components/NewPet"
import PetCard from "../Components/PetCard"

function Pet({ user }) {
    const [formVisible, setFormVisible] = useState(false)
    const [pets, setPets] = useState([])


    const handleClick = () => {
        setFormVisible(!formVisible)
    }

    useEffect(() =>{
        fetch("/allpets")
            .then(res => res.json())
            .then(data => setPets(data.filter( data => data.user_id === user.id)))
        }
        , [user.id])

  
    



    const handlePetPost = (formData) => {
        fetch("/newpet", {
            method: "POST",
            body: formData,
        }).then((r) => {
            if (r.ok) {
                r.json().then((pet) => setPets([...pets, pet]));
            }
        });
    }

    const handlePatchPets = (formData, pet) => {
        fetch(`/pets/${pet.id}`, {
            method: "PATCH",
            body: formData,
        }).then((r) => {
            if (r.ok) {
                r.json().then(data => setPets(pets => pets.map(pet => pet.id === data.id ? data : pet)));
            }
        });
    }
    
    const handleDeleteClick = (pet) => {
        fetch(`/pet_removal/${pet.id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => setPets(pets.filter(pet => pet.id !== data.id)))
    }
    return (
        <ParentDiv>
            <PetDiv>
                <div>
                    <button onClick={handleClick}>Add New Pet</button>
                    {formVisible ? <NewPet handlePetPost={handlePetPost} loggedInUser={user} setFormVisible={setFormVisible}/> : <p></p>}
                </div>
                <CardDiv>
                    {pets?.map(pet => <PetCard pet={pet} handlePatchPets={handlePatchPets} handleDeleteClick={handleDeleteClick}/>)}
                </CardDiv>
            </PetDiv>
        </ParentDiv>
    )
}

export default Pet;

const PetDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex-wrap: wrap;
background-color: #D2B48C;
border: solid;
border-color: #8A6447;
border-width: 10px;
width: auto;
height: auto;
`
const ParentDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`
const CardDiv = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap;
`
