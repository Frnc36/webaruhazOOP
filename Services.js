export default class Services{
    constructor(){

    }
    getAdat(vegpont, callback){
        fetch(vegpont)
            .then(response => response.json())
            .then(data => 
                {console.log(data);
                    callback(data);
                })
            .catch(error=>console.log(error));
    }
}




  