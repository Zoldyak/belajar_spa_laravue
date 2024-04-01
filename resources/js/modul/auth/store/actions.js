import Axios from "axios"

export const register=({dispatch},{payload})=>{
    return Axios
    .post("/api/auth/register",payload)
    .then((result) => {
        console.log(result.data);
    }).catch((err) => {
        console.log(err.response.data.errors);
    });
}