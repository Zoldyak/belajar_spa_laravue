import { isEmpty } from "lodash";

export const setHttpToken=token=>{
    if (isEmpty(token)) {
        window.Axios.defaults.headers.common["Authorization"]=null
    }
    window.Axios.defaults.headers.common["Authorization"]="Bearer "+token
}