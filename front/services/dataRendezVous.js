import DataService from "@/services/dataService";

class DataRendezVous extends DataService {

    async getAll(){
        const response = await fetch(this.baseUrl + "/rendezvous")
        const data = await response.json();

        return data;
    }

    async getOne(id) {
        const response = await fetch(this.baseUrl + "/rendezvous/" + id);
        const data = await response.json();

        return data;
    }

    async create(rendezvous) {
        console.log("avant envoi en bdd" + JSON.stringify(rendezvous));
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
        if (response.status === 400) {
            alert("IMPOSSIBLE DENREGISTRER LE RDV !\n Un de deux participants a un autre rdv en meme temps !")
        }
        return null;
    }

    async update(rendezvous) {
        const response = await fetch(this.baseUrl + "/rendezvous/" + rendezvous.id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(rendezvous)
        } );
        if (response.status === 200) {
            return response;
        }
        if (response.status === 400) {
            alert("IMPOSSIBLE DENREGISTRER LE RDV !\n Un de deux participants a un autre rdv en meme temps !")
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