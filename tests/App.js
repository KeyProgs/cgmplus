var userName;
var email;
userName = 'Joker';
function validateProfile(profile) {
    if (profile.admin == true)
        return 'ADMIN';
    else
        return 'User';
}
var profile = { userName: 'jOker', email: 'email', admin: false };
validateProfile(profile);
console.log(userName + " " + email + ' ==> ' + validateProfile(profile));
