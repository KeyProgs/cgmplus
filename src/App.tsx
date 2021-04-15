import React, {ReactElement} from 'react';
import './App.css';
import HelloWorld from './HelloWorld'
import userInterface from "./interfaces/UserInterface";
import  UsersList from './UsersList'



let user : userInterface = {id:1,userName :'jOKerr',admin:true};
let  users =[
    'Benomar',
    'Kadri',
    'Bouchikhi',
];
let usersObject=users.map((user,key)=>({id:key,userName:user,admin:false}));

















function App() {
    // var title=' Tout le momde';


    return (
        <div className="App">

            <HelloWorld userProfile={user} />
            <UsersList users={usersObject}/>


        </div>
    );
}

export default App;
