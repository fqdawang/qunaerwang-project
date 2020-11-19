// import axios from 'axios'
export const get = (url, params) => {
    const baseUrl = 'http://127.0.0.1:5500/public/api'
    return new Promise((resolve, reject) => {
        this.axios
            .get(baseUrl + url, ...params)
            .then((res) => {
                if (res.status === 200) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(err => {
                console.log(err);
            })
    })
}