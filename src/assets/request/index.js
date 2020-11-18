export const request = (params) => {
    // 定义公共url
    const baseUrl = "http://127.0.0.1:5500/public"
    return new Promise((resolve, reject) => {
        this.axios
            .get("http://127.0.0.1:5500/public/api/home.json")
            .then((response) => {
                console.log(response.data);
            });
    })
}