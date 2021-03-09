import React, {useState} from 'react';
import UserData from './UserData';

const NewUserForm = ({onNewUserSubmit}) => {

    const [name, setName] = useState("");

    const [date, setDate] = useState("");

    const [hairLength, setHairLength] = useState(0);

    const [goalHairLength, setGoalHairLength] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleHairLengthChange = (evt) => {
        setHairLength(evt.target.value);
    }

    const handleDateChange = (evt) => {
        setDate(evt.target.value);
    }

    const handleGoalHairLengthChange = (evt) => {
        setGoalHairLength(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        console.log("User has been submitted");
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const hairLengthToSubmit = hairLength;
        const dateToSubmit = date.trim(); // might need to reformat date
        const goalHairLengthToSubmit = goalHairLength;
        

        let proceed = true;

        if(!nameToSubmit){
            proceed = false
        } 
        if(!hairLengthToSubmit){
            proceed = false
        }
        if(!dateToSubmit){
            proceed = false
        }
        if(!goalHairLengthToSubmit){
            proceed = false
        }
        
        
        if(proceed === true) {
            onNewUserSubmit({
                name: nameToSubmit,
                hairLength: hairLengthToSubmit,
                growthRate: 1,
                date: dateToSubmit,
                goalHairLength: goalHairLengthToSubmit, 
            });           

            setName("");
            setHairLength(0);
            setDate("");
            setGoalHairLength(0);
        } 
    }




    return (
        <>
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Your Name Please"
            value={name}
            onChange={handleNameChange}
            />
            <input
            type="number"
            placeholder="Your Hair Length in cm Please"
            value={hairLength}
            onChange={handleHairLengthChange}
            /> 
            <input
            type="text"
            placeholder="What is Today"
            value={date}
            onChange={handleDateChange}
            />
            <input
            type="number"
            placeholder="Hair Goal Length in cm Please"
            value={goalHairLength}
            onChange={handleGoalHairLengthChange}
            /> 
            <input
                type="Submit"
            />                                   
        </form>
        <UserData/>
        </>
    )
}





export default NewUserForm;