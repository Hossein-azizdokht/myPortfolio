import getAccessToken from "../helper/getAccesstoken";
const domain = "https://bapi.parstechnology.ir"

// Join URL
function joinURL(baseURL, url) {
    return `${baseURL}/${url}`
}

// Services
class Services {

    //---REQUEST FUNCTION
    request(url, method = "POST", data = null) {
        const Authorization = getAccessToken();
        const headers = {
            "Accept": "application/json",
            "Content-type": "application/json",
            Authorization: Authorization
        }
        url = joinURL(domain, url);
        
        const options = {
            headers,
            method,
        }
        if (data) {
            options.body = JSON.stringify({ ...data })
        }
        return fetch(url, options)
    }
    //---POST 
    post(url, data) {
        const method = "POST";
        return this.request(url, method, data).then(res => res.json())
    }
    //---GET
    get(url, id) {
        debugger
        const method = "Get";
        if (id) {
            url = `${url}/${id}`
        }
        return this.request(url, method).then(res => res.json())

    }
    delete(url) {
        const method = "DELETE";
        return this.request(url, method).then(res => res.json())
    }

    put() {

    }

    getAll() {


    }

}

export default Services;