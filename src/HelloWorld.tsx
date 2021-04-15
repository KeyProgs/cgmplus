import React, {useState} from "react";
import userInterface from "./interfaces/UserInterface";



export default  function  HelloWorld ({userProfile}:{userProfile : userInterface} )  {
    const [id ,idSet]=useState<number>(1);
    const isAdmin  = (adminVar : boolean) => adminVar==true ? ' an ADMIN ' + adminVar : ' not an ADMIN '+adminVar;

    // idSet(2);


    return  (<>
        <button onClick={() => idSet(id+1)} >ADD </button>


        <h1>{id} Hello {userProfile.userName}</h1>
        your Id is {userProfile.id} and you are {isAdmin(userProfile.admin)}
    </>)

}