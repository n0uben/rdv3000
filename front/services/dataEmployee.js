class DataEmployee {

    baseUrl = "http://localhost:8080"

    async getAll() {
        const response = await fetch(this.baseUrl + "/employee")
        const data = await response.json();

        return data;
    }

    async getOne(id) {
        const response = await fetch(this.baseUrl + "/employee/" + id);
        console.log(response)
        const data = await response.json();

        return data;
    }
}

export default new DataEmployee();