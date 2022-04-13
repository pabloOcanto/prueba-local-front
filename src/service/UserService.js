import ky from 'ky';

class UserService {

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL + "/v1/user/";  
    }

    auth = async (loginValues) => {
        const response = await ky.post(this.endpoint+'oauth/token', {
            body: JSON.stringify(loginValues),
            headers: {
                'content-type': 'application/json'
            },
            retry: {
                limit: 3,
                methods: ['post'],
                statusCodes: [400]
            }
        }).json();
        return response;
    }

    getAll= async (token) =>{    
        try {
            const response = await ky.get(this.endpoint+"list", {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                retry: {
                    limit: 3,
                    methods: ['post'],
                    statusCodes: [401]
                }
                }).json(); 
            return response;               
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    create= async (user,token) =>{        
        delete user.password2;
      
        const response = await fetch(this.endpoint+"create", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

       return response;  
    }
}

const service = new UserService();

export default service; 
