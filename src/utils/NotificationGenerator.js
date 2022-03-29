class NotificationGenerator{


    generate = (form,cities,topics) =>{
console.log('entre')
        const myTopic = topics.filter( el => el.id == form.topic)
        const city = cities.filter( el => el.id == form.region)
        console.log({form})
        console.log({myTopic})
        console.log({city})

        let region =[]
        city.forEach( el => {
            let city_ ={}
            city_["state"] = el.name.split(",")[0].trim("")
            city_["city"] = el.name.split(",")[1].trim("")
            city_["lat"] = el.lat
            city_["lon"] = el.lon
            console.log(city_)
            region.push(city_);
        })
        
console.log('pase');
        let notificaiton ={            
            topic:myTopic[0].name,
            title:form.title,
            message:form.message,
            area:region,
            userCreatedId:1
        }

        console.log("notification generator",notificaiton)

        return notificaiton;
    }
}

const notificationGenerator = new NotificationGenerator();

export default notificationGenerator;