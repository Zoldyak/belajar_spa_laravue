import Axios from "axios"

export const register=({dispatch},{payload,context})=>{
    return Axios
    .post("/api/auth/register",payload)
    .then((result) => {
        console.log(result.data);
    }).catch((err) => {
        context.errors =err.response.data.errors;
    });
}