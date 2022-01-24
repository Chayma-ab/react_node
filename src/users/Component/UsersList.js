import React from "react";
//import './UsersList.css' ;
import UsersItem from "./UsersItems";

const UsersList = props => {
   if (props.items.length===0) {
       return(
           <div className="center"> 
               <h1>No users found !</h1>
           </div>
       )
   }
    
   return(
      <ul>
          {props.items.map(user => (
                <UsersItem  key={user.id} 
                id={user.id} 
                user={user.name} 
                image={user.image} 
                placeCount={user.Place}
                /> 

          ))}
      </ul>
   )
};

export default UsersList;