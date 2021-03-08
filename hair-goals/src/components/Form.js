import React, {useState} from 'react';

const Form = ({onNewUserSubmit}) => {

    const [name, setName] = useState("");

    const [hairLength, setHairLength] = useState(0);

    const [date, setDate] = useState("");

    const [birthday, setBirthday] = useState("");

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

    const handleBirthdayChange = (evt) => {
        setBirthday(evt.target.value);
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
        const birthdayToSubmit = birthday.trim();
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
        if(!birthdayToSubmit){
            proceed = false
        }
        if(!goalHairLengthToSubmit){
            proceed = false
        }
        
        
        if(proceed === true) {
            onNewUserSubmit({
                name: nameToSubmit,
                hairLength: hairLengthToSubmit,
                date: dateToSubmit,
                birthday: birthdayToSubmit,
                goalHairLength: goalHairLengthToSubmit               
            });           

            setName("");
            setHairLength(0);
            setDate("");
            setBirthday("");
            setGoalHairLength(0);
        } 
    }




    return (
        <form onSubmit={handleFormSubmit}>
            <input
            type="text"
            placeholder="Your Name Please"
            value={name}
            onChange={handleNameChange}
            />
            <input
            type="number"
            placeholder="Your Hair Length Please"
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
            type="text"
            placeholder="Your Birthday Please"
            value={birthday}
            onChange={handleBirthdayChange}
            /> 
            <input
            type="number"
            placeholder="Hair Goal"
            value={goalHairLength}
            onChange={handleGoalHairLengthChange}
            /> 
            <input
                type="Submit"
            />                                   
        </form>
    )
}





export default Form;