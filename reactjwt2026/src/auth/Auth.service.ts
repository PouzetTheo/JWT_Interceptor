import { httpClient } from "../api/http-client";

export interface LoginRequest{
    username : string
    password : string

}
export interface LoginResponse{
    username : string
    token : string
}
export async function  login (credentials : LoginRequest){
   const response = await httpClient.post<LoginResponse>("/auth/login", credentials)
localStorage.setItem("token",response.data.token ); 
   return response.data 
   
}
    export function  handleLogout(){
    localStorage.removeItem("token")
    }
    
export function getToken() {
const token = localStorage.getItem("token")
return token
}
export function getRoles() {
const token = getToken()
const parts = token?.split(".")
const payload = parts?.[1]
if (!payload){
    return []
}else{
const decodepayload = atob(payload)
const payloadObject = JSON.parse(decodepayload)
const role = payloadObject.scope
const roles = role.split(" ")
return roles
}}


export function hasRole(role: string) {
const roles = getRoles()
return roles.includes(role)
}