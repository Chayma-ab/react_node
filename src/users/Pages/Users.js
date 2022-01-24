import React from "react";
import UsersList from "../Component/UsersList";



const Users = () =>{

    const USERS = [
        {
        id: 'u1',
        name:'chayma ab',
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPeEgEI0Ul2wo5NjNDFYpXX7GXFUAIUlWwQ&usqp=CAU',
        
        places:'3'
       
    }
];


    return (
            <UsersList   items ={USERS} /> 
    )
    
};

export default Users;