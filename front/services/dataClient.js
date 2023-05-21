class DataClient {

    baseUrl = "http://localhost:8080"

    async getAll() {
        const response = await fetch(this.baseUrl + "/client")
        const data = await response.json();

        return data;
    }
}

export default new DataClient();