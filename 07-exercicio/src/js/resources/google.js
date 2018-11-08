import axios from 'axios'
import  credentials from '../credentials' 

function googleImageSearch (){
//faz request 
//retorna dados
axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&q=nirvana&searchType=image&imgSize=huge`)
.then (function (response){
    console.log(response)


})

.catch(function (error){
    console.log('error, error')
})
}

export default googleImageSearch