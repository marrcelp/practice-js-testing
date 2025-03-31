export default class User {

    constructor({email, password}){

        if(!email.includes('@')){
            throw new Error ('Invalid email format');
        }

        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

}