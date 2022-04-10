import ky from 'ky';

class UserService {

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL + "/v1/user/oauth/token";
    }

    auth = async (loginValues) => {
        const response = await ky.post(this.endpoint, {
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
}

const service = new UserService();

export default service; 
