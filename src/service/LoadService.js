import ky from 'ky';

class LoadService {
    constructor() {
        this.endpoint = process.env.REACT_APP_BACKEND_URL;
    }

    getTopics = async (token) => {

        try {
            let topics = []
            const endpoint = this.endpoint + "/v1/topic/getAllTopic";
            topics = await ky(endpoint, { headers: { 'Authorization': 'Bearer ' + token } }).json();
            return topics;
        } catch (error) {
            console.log("No se pudo obtener los topicos");
            return [];
        }
    }

    getCities = async (token) => {
        try {
            const endpoint = this.endpoint + "/v1/city/getAllCity";
            const response = await ky(endpoint, { headers: { 'Authorization': 'Bearer ' + token } }).json();

            let cities = []
            response.forEach(element => {
                let city = {}
                city["id"] = element.id
                city["state"] = element.state
                city["city"] = element.city
                city["lat"] = element.lat
                city["lon"] = element.lon             
                cities.push(city);
            });
            return cities;

        } catch (error) {
            console.log("No se pudo obtener las ciudades");
            return [];
        }
    }
}

const service = new LoadService();
export default service; 
