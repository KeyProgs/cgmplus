import React, {useState} from "react";

interface userInterface {
    id: number,
        userName: string,
        admin :boolean,
}

export default  function  HelloWorld ({userProfile}:{userProfile : userInterface} )  {
    const [id,idSet]=useState<number>(1);
    // idSet(2);
    

    return  (<>
        <button onClick={() => idSet(id+1)} >ADD </button>


        <h1>{id} Hello {userProfile.userName}</h1>
        your Id is {userProfile.id} and you are {isAdmin(userProfile.admin)}
    </>)
}