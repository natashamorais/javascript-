import axios from 'axios'
function mbArtistsSearch(){
    //faz request
    //retorna dados

    axios.get("http://musicbrainz.org/ws/2/artist/?query=nirvana&fmt=json")
    .then (function (response){
        


    })

    .catch(function (error){
        console.log('error, error')
    })

}

export default mbArtistsSearch 
