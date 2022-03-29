import ky from 'ky';

class LoadService{

    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL;
    } 


    getTopics= async ()=>{

        try {
            let topics =[]
            const endpoint= this.endpoint+"/v1/topic/getAllTopic";

            topics = await ky(endpoint).json();

            console.log(topics);
    
            return topics;
        } catch (error) {
            console.log("No se pudo obtener los topicos");

            return[];
        }

    }


    getCities= async ()=>{

        try {
            const endpoint= this.endpoint+"/v1/city/getAllCity";

            const response = await ky(endpoint).json();

            let cities = []
            response.forEach(element => {
                let city ={}
                city["id"]= element.id
                city["name"]= element.state + ", "+element.city
                city["lat"] = element.lat
                city["lon"] = element.lon
                console.log(city);
                cities.push(city);
            });

            console.log(cities);

            return cities;
    
        } catch (error) {

            console.log("No se pudo obtener las ciudades");
            return [];
        }
    
    }


}

const service = new LoadService();

export default service; 
