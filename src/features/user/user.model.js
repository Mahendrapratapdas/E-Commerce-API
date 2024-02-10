
export default class userModel{
    constructor(name, email, password, type){
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
    }
    static addUser(name, email, password, type){
        const newUser = new userModel(name,email,password,type);
        newUser.id = users.length+1;
        users.push(newUser);
        return newUser;
    }
    static userDetails(email, password){
        const user = users.find(u => u.email == email && u.password == password);
        return user;
    }
    static getAllUser(){
        return users;
    }
}

let users = [
    {
        name:'Mahendra',
        email:'mahi@gmail.com',
        password:'abc',
        type:'seller',
        id:1,
    },
    
];