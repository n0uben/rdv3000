import DataService from "@/services/dataService";

class DataClient extends DataService {

    async getAll() {
        const response = await fetch(this.baseUrl + "/client")
        const data = await response.json();

        return data;
    }

    async getOne(id) {
        const response = await fetch(this.baseUrl + "/client/" + id);
        const data = await response.json();

        return data;
    }
}

export default new DataClient();