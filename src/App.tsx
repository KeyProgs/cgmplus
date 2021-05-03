import React, {ReactElement} from 'react';
import './App.css';
import HelloWorld from './HelloWorld'
import userInterface from "./interfaces/UserInterface";
import  UsersList from './UsersList'

import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { PostList, PostEdit, PostCreate, PostIcon } from './posts';




let user : userInterface = {id:1,userName :'jOKerr',admin:true};
let  users =[
    'Benomar Mohammed',
    'Kadri Nezha',
    'Bouchikhi Abdullah',
];
let usersObject=users.map((user,key)=>({id:key,userName:user,admin:false}));

















function App() {
    // var title=' Tout le momde';


    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
    );
}

export default App;
