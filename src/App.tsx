import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {isNumber} from "util";
import {render} from "react-dom";

interface userInterface {
    id: number,
    userName: string,
    admin :boolean,
}
let user : userInterface = {id:1,userName :'jOKerr',admin:true};

let  users =[
    'Benomar',
    'Kadri',
    'Bouchikhi'
];
console.log( users);

let usersObject=users.map((user,key)=>({id:key,userName:user,admin:false}));

console.log(usersObject);
const isAdmin  = (adminVar : boolean) => adminVar==true ? ' an ADMIN ' + adminVar : ' not an ADMIN '+adminVar;

// const GetUsers = (users:any) => users.map((user:userInterface)=><li key={user.id}>{user.userName}</li>)

const  GetUsers2= (props:any) =>
<>
    <ul>
        {props.users.map((user:userInterface)=><li>{user.userName}</li>)}

    </ul>
    {console.log(users)}

</>




const  HelloWorld = ({userProfile}:{userProfile : userInterface} )  =>
<>
    <h1>Hello {userProfile.userName}</h1>
    your Id is {userProfile.id} and you are {isAdmin(userProfile.admin)}
</>








function App() {
    // var title=' Tout le momde';


    return (
    <div className="App">

        <HelloWorld userProfile={user} />
        <GetUsers2 users={usersObject}/>


    </div>
  );
}

export default App;
