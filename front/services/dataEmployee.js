import DataService from "@/services/dataService";

class DataEmployee extends DataService {

    async getAll() {
        const response = await fetch(this.baseUrl + "/employee")
        const data = await response.json();

        return data;
    }
}

export default new DataEmployee();