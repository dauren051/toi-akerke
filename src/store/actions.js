// import Vue from 'vue'
import my_axios from '../../axios-config.js'
// import router from '../router';
const http = my_axios
const actions = {
    async getServers({ commit }){
		return await new Promise(( resolve,reject )=>{
			http.get(`/api/servers`)
			.then((resp)=>{
				commit('UPDATE_PROVIDER_ORDERS',resp.data)
				resolve(resp.data)
			})
			.catch((err)=>{
				reject(err) 
			})
		})
	},
}

export default actions