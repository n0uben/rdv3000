import Link from "next/link";
import Layout from "@/components/layout";
import dataEmployee from "@/services/dataEmployee";
import dataClient from "@/services/dataClient";
import {useState} from "react";
import dataRendezVous from "@/services/dataRendezVous";
import {useRouter} from "next/router";

export async function getServerSideProps(context) {
    let allEmployees = [];
    let allClients = [];
    const { id } = context.params;
    let rendezvous = {};

    try {
        allEmployees = await dataEmployee.getAll();
        allClients = await dataClient.getAll();
        rendezvous = await dataRendezVous.getOne(id);
    } catch (e) {
        console.error(e);
    }


    return {
        props: {
            allEmployees,
            allClients,
            rendezvous
        }
    }
}

export default function Edit({allEmployees, allClients, rendezvous}) {

    console.log("debut: " + rendezvous.start);
    console.log("fin: " + rendezvous.end);

    const[id] = useState(rendezvous.id);
    const[title, setTitle] = useState(rendezvous.title);
    const[start, setStart] = useState(() => {
        const startDate = new Date(rendezvous.start);
        //on cut la data jusquau minutes pour coller avec le format attendu
        return startDate.toISOString().slice(0,16);
    });
    const[end, setEnd] = useState(() => {
        const endDate = new Date(rendezvous.end);
        //on cut la data jusquau minutes pour coller avec le format attendu
        return endDate.toISOString().slice(0,16);
    });
    const[employeeId, setEmployeeId] = useState(rendezvous.employee.id);
    const[clientId, setClientId] = useState(rendezvous.client.id);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const employee = allEmployees.find(employee => employee.id === employeeId);
        const client = allClients.find(client => client.id === clientId);

        const rendezvous = {id, title, start, end, employee, client}
        const response = await dataRendezVous.update(rendezvous);
        if (response !== null) {
            router.push("/");
        }
    }

    return (
        <Layout>
            <div className="my-12">
                <Link href="/" className="bg-blue-500 px-5 py-2 rounded-full text-white">Retour à l'accueil</Link>
            </div>

            <h1 className="text-4xl mb-6">Modifier un rendez-vous</h1>
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
                       value={start}
                       onChange={(e) => setStart(new Date(e.target.value).toISOString())}
                       className="mt-3 block w-full"
                       required/>

                <label htmlFor="finInput" className="block mt-6">Date et heure de fin</label>
                <input id="finInput"
                       type="datetime-local"
                       className="mt-3 block w-full"
                       value={end}
                       onChange={(e) => setEnd(new Date(e.target.value).toISOString())}
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
                    <button type="submit" className="bg-green-600 px-5 py-2 rounded-full text-white">Modifier</button>
                </div>
            </form>
        </Layout>
    );
}