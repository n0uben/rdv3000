import Link from "next/link";
import Layout from "@/components/layout";
import dataEmployee from "@/services/dataEmployee";
import dataClient from "@/services/dataClient";
import {useState} from "react";
import dataRendezVous from "@/services/dataRendezVous";
import {useRouter} from "next/router";

export async function getServerSideProps() {
    let allEmployees = [];
    let allClients = [];

    try {
        allEmployees = await dataEmployee.getAll();
        allClients = await dataClient.getAll();
    } catch (e) {
        console.error(e);
    }


    return {
        props: {
            allEmployees,
            allClients,
        }
    }
}

export default function Ajout({allEmployees, allClients}) {

    const[title, setTitle] = useState('');
    const[debut, setDebut] = useState('');
    const[fin, setFin] = useState('');
    const[employeeId, setEmployeeId] = useState(-1);
    const[clientId, setClientId] = useState(-1);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employee = allEmployees.find(employee => employee.id === employeeId);
        const client = allClients.find(client => client.id === clientId);

        const rendezvous = {title, debut, fin, employee, client}
        const response = await dataRendezVous.create(rendezvous);
        if (response !== null) {
            router.push("/");
        }
    }

    return (
        <Layout>
            <div className="my-12">
                <Link href="/" className="bg-blue-500 px-5 py-2 rounded-full text-white">Retour à l'accueil</Link>
            </div>

            <h1 className="text-4xl mb-6">Ajouter un rendez-vous</h1>
            <form
                className="grid grid-cols-1"
                onSubmit={handleSubmit}
            >
                <label htmlFor="titreInput" className="block">Titre</label>
                <input id="titreInput"
                       type="text"
                       className="mt-3 block w-full"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                required/>

                {/*refactorer pour avoir un champ date et deux champs heure ??? */}
                <label htmlFor="debutInput" className="block mt-6">Date et heure de début</label>
                <input id="debutInput"
                       type="datetime-local"
                       value={debut}
                       onChange={(e) => setDebut(e.target.value)}
                       className="mt-3 block w-full"
                required/>

                <label htmlFor="finInput" className="block mt-6">Date et heure de fin</label>
                <input id="finInput"
                       type="datetime-local"
                       className="mt-3 block w-full"
                       value={fin}
                       onChange={(e) => setFin(e.target.value)}
                required/>

                <label htmlFor="employeeSelect" className="block mt-6">Employé</label>
                <select id="employeeSelect"
                        className="mt-3 block w-full"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(parseInt(e.target.value))}>
                    <option value="-1">Sélectionner un employé</option>

                    {allEmployees.map((employee) => (
                        <option value={employee.id} key={employee.id}>
                            {employee.firstName} {employee.lastName}
                        </option>
                    ))}
                </select>

                <label htmlFor="clientSelect" className="block mt-6">Client</label>
                <select id="clientSelect"
                        className="mt-3 block w-full"
                        value={clientId}
                        onChange={(e) => setClientId(parseInt(e.target.value))}>
                    <option value="-1">Sélectionner un client</option>

                    {allClients.map((client) => (
                        <option value={client.id} key={client.id}>
                            {client.firstName} {client.lastName}
                        </option>
                    ))}
                </select>
                <div className="mt-9">
                    <button type="submit" className="bg-green-600 px-5 py-2 rounded-full text-white">Ajouter</button>
                </div>
            </form>
        </Layout>
    );
}