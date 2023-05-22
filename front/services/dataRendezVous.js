import DataService from "@/services/dataService";

class DataRendezVous extends DataService {

    async getAll(){
        const response = await fetch(this.baseUrl + "/rendezvous")
        const data = await response.json();

        return data;
    }

    async create(rendezvous) {
        const response = await fetch(this.baseUrl + "/rendezvous", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(rendezvous)
        } );
        if (response.status === 200) {
            return response;
        }
        return null;
    }

    async delete(id) {
        const response = await fetch(this.baseUrl + "/rendezvous/" + id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        } );
        if (response.status === 200) {
            return response;
        }
        return null;
    }
}

export default new DataRendezVous();