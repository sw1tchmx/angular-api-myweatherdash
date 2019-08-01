import { weatherdata } from "./weatherdata";
// this is a change lunes
export interface wbitdata {
    data: weatherdata[];
    city_name:string;
    lon:number;
    timezone:string;
    lat:number;
    country_code:string;
    state_code:number;
}