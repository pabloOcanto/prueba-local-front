import ky from 'ky';

class UserService{

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_UR+"/v1/user";
    } 

    auth= async ()=>{

        //TODO quitar
        return "f3saxtesr";

        const response = await ky.post(this.endpoint+"/login", {
            retry: {
                limit: 3,
                methods: ['post'],
                statusCodes: [400]
            }
            }).json();
    
    }
}

const service = new UserService();

export default service; 
