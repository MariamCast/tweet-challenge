import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios, axios)

const appService = {

getUserExist(user){
    return Vue.axios.head('https://twitter.com/'+user) .then(response =>{
    return response.status;
})
}
}

export default appService
