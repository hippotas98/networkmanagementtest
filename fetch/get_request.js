const axios = require ('axios')

let request = async (number) => {
    let result = []
    for (let i = 0;i<number;++i){
        let response = await axios.get('http://localhost/weather/21.028511/105.804817').then(data => {
            return {
                'id': data.data.id,
                'ver': data.data.ver,
                'time': data.data.response_time
        }
    })
        console.log(i + ': ' + JSON.stringify(response))
        
    }
}
request(10)