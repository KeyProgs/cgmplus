let userName : string;
let email : string ;
userName ='Joker';

interface user {
     userName : string,
     email : string,
    admin : false
}
interface admin {
    userName :string,
    email : string,
    admin : true,
}

type Profiles = admin | user;

function validateProfile ( profile : Profiles){
    if(profile.admin==true) return 'ADMIN'
    else return 'User'

}
let profile : Profiles = {userName : 'jOker',email:'email', admin: false};
validateProfile(profile);
console.log(userName + " "+  email + ' ==> ' + validateProfile(profile)) ;