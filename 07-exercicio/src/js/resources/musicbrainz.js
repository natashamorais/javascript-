import axios from 'axios'
function mbArtistsSearch(){
    //faz request
    //retorna dados

    axios.get(`http://musicbrainz.org/ws/2/artist/?query=${artistSearch}&fmt=json`)
    .then (function (response){
        artist = JSON.parse(response)
            
        for (const artistInfo of artist.items){
            
        }
             
    })

    .catch(function (error){
    

    
    })

}

export default mbArtistsSearch 
