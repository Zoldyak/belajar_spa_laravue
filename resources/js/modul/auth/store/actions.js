import Axios from "axios"
import { setHttpToken } from "../../../helpers";
export const register=({dispatch},{payload,context})=>{
    return Axios
    .post("/api/auth/register",payload)
    .then((result) => {
        console.log(result.data);
    }).catch((err) => {
        context.errors =err.response.data.errors;
    });
}
export const login = ({dispatch}, {payload, context}) => {
    return Axios
        .post('/api/auth/login', payload)
        .then((result) => {
            dispatch("setToken",result.data.meta.token)
            .then(() => {
                console.log(result.data.meta.token);
            }).catch((err) => {
                console.log("error token");
            });
        }).catch((err) => {
            context.errors = err.response.data.errors;
        });
}

export const setToken =({commit},token)=>{
    commit('setToken',token)
    setHttpToken(token)
}