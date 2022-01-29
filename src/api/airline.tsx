import axios from 'axios';
import fetchJson from 'fetch-jsonp';

export interface AirlineData {
    site:string,
    code:string,
    airline:string,
    logoUrl:string,
    name:string,
    phone:string,
}

export const api ={
    async getAll():Promise<AirlineData[]>{
        const data = await fetchJson('http://kayak.com/h/mobileapis/directory/airlines/homework',{
            jsonpCallback:'jsonp'
        })
        console.log(data)
        const response = await data.json()
        return response
    }
}