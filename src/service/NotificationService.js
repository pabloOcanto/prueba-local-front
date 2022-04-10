import ky from 'ky';

class NotifcationService{

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL+"/v1/notification/";
    } 

    send= async (notification,token) =>{
        console.log("Enviado notificacion ",notification);       
        delete notification.topicObject;
      
        const response = await fetch(this.endpoint+"create", {
            method: 'POST',
            body: JSON.stringify(notification),
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

       return response;  
    }

    getAll= async (userId,token) =>{
        const user= userId || 1;
        try {
            const response = await ky.get(this.endpoint+"getNotification?user="+user, {
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

}

const service = new NotifcationService();

export default service; 