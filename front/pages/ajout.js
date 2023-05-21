import Link from "next/link";
import Layout from "@/components/layout";
import dataEmployee from "@/services/dataEmployee";
import dataClient from "@/services/dataClient";

export async function getServerSideProps() {
    const allEmployees = await dataEmployee.getAll();
    const allClients = await dataClient.getAll()

    return {
        props: {
            allEmployees,
            allClients,
        }
    }
}

export default function Ajout({allEmployees, allClients}) {

    return (
        <Layout>
            <div className="my-12">
                <Link href="/" className="bg-blue-500 px-5 py-2 rounded-full text-white">Retour à l'accueil</Link>
            </div>

            <h1 className="text-4xl mb-6">Ajouter un rendez-vous</h1>
            <div className="grid grid-cols-1">
                <label className="block">Titre</label>
                <input className="mt-3 block w-full" type="text" placeholder="le titre de votre rdv"/>

                {/*refactorer pour avoir un champ date et deux champs heure ??? */}
                <label className="block mt-6">Date et heure de début</label>
                <input className="mt-3 block w-full" type="datetime-local"/>

                <label className="block mt-6">Date et heure de fin</label>
                <input className="mt-3 block w-full" type="datetime-local"/>

                <label className="block mt-6">Employé</label>
                <select className="mt-3 block w-full">
                    <option>Sélectionner un employé</option>
                    {allEmployees.map((employee) => (
                        <option value={employee.id} key={employee.id}>
                            {employee.firstName} {employee.lastName}
                        </option>
                    ))}
                </select>

                <label className="block mt-6">Client</label>
                <select className="mt-3 block w-full">
                    <option>Sélectionner un client</option>
                    {allClients.map((client) => (
                        <option value={client.id} key={client.id}>
                            {client.firstName} {client.lastName}
                        </option>
                    ))}
                </select>

            </div>
            <div className="mt-9">
                <button onClick={handleClick} className="bg-green-600 px-5 py-2 rounded-full text-white">Ajouter</button>
            </div>
        </Layout>
    );
}

function handleClick() {
    console.log("coucou");
}