import ky from 'ky';


class NotifcationService{

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL+"/v1/notification";
    } 

    send= async (notification) =>{
        console.log("Enviado notificacion ",notification);
        const response = await ky.post(this.endpoint+"/create", {           
          body: JSON.stringify(notification),
            headers: {
                'content-type': 'application/json'
            },
            retry: {
                limit: 3,
                methods: ['post'],
                statusCodes: [401]
            }
            }).json();

        console.log(response);    
    }

    getAll= async (userId) =>{

        const user= userId || 1;

        console.log("Recuperando notificaciones ",userId);

        try {
            const response = await ky.get(this.endpoint+"/getAllNotification?userId="+user, {
                headers: {
                    'content-type': 'application/json'
                },
                retry: {
                    limit: 3,
                    methods: ['post'],
                    statusCodes: [401]
                }
                }).json();
    
            console.log(response);    
            return response;    
       
            
        } catch (error) {
            console.error(error);
            return [];

        }

    }

}

const service = new NotifcationService();

export default service; 