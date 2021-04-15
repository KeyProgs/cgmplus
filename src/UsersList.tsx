import React, {ReactElement} from "react";
import userInterface from "./interfaces/UserInterface";

const UsersList= (props:any)  =>

       <>
           <ul>
               {props.users.map((user: userInterface) => <li>{user.userName}</li>)}
           </ul>
       </>

export default UsersList;
