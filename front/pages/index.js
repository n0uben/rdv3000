import Link from "next/link";
import Layout from "@/components/layout";
import dataRendezVous from "@/services/dataRendezVous";
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSort} from "@fortawesome/free-solid-svg-icons";

export async function getServerSideProps() {
    let allRendezVous = [];
    try {
        allRendezVous = await dataRendezVous.getAll();
    } catch (e) {
        console.error(e);
    }

    return {
        props: {
            allRendezVous,
        }
    }
}

export default function Home({allRendezVous}) {

    const [rendezvousList, setRendezvousList] = useState(allRendezVous);

    const handleDelete = async (event) => {
        const idToDelete = event.target.parentElement.id;
        const response = await dataRendezVous.delete(idToDelete);
        if (response !== null) {
            const updatedList = rendezvousList.filter((rendezvous) => rendezvous.id != idToDelete);
            setRendezvousList(updatedList);
        }
    };

    const handleSort = (event) => {
        let key = event.target.id;

        let sortedData = [...rendezvousList].sort((a , b) => {
            return a[key] < b[key]
        });
        sortedData.forEach(item => console.log(item.title))
        setRendezvousList(sortedData);
    }

    return (
        <Layout>
            <div className="my-12">
                <Link href="/ajout" className="bg-blue-500 px-5 py-2 rounded-full text-white">Ajouter un rendez-vous</Link>
            </div>

            <h1 className="text-4xl mb-6">Liste des rendez-vous</h1>

            <table className="table-auto">
                <thead>
                <tr>
                    <th id="title" className="px-4 py-2" onClick={handleSort}>Titre <FontAwesomeIcon className="ml-2" icon={faSort} /></th>
                    <th id="start" className="px-4 py-2" onClick={handleSort}>Début <FontAwesomeIcon className="ml-2" icon={faSort} /></th>
                    <th id="end" className="px-4 py-2" onClick={handleSort}>Fin <FontAwesomeIcon className="ml-2" icon={faSort} /></th>
                    <th id="employee" className="px-4 py-2" onClick={handleSort}>Employee <FontAwesomeIcon className="ml-2" icon={faSort} /></th>
                    <th id="client" className="px-4 py-2" onClick={handleSort}>Client <FontAwesomeIcon className="ml-2" icon={faSort} /></th>
                    <th className="px-4 py-2">Email client</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>

                {rendezvousList.map(rendezvous => (
                    <tr key={rendezvous.id} id={rendezvous.id}>
                        <td className="border px-4 py-2">{rendezvous.title}</td>
                        <td className="border px-4 py-2">{rendezvous.start.toString().replace("T", " ").slice(0, 16)}</td>
                        <td className="border px-4 py-2">{rendezvous.end.toString().replace("T", " ").slice(0, 16)}</td>
                        <td className="border px-4 py-2">{rendezvous.employee.firstName} {rendezvous.employee.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.firstName} {rendezvous.client.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.email}</td>
                        <td className="border px-4 py-2 text-blue-400 cursor-pointer">
                            <Link href={`/edit/${rendezvous.id}`}>
                                Modifier
                            </Link>
                        </td>
                        <td onClick={handleDelete} className="border px-4 py-2 text-red-600 cursor-pointer">Supprimer</td>
                    </tr>
                ))}
                </tbody>

            </table>

            <div>
                {rendezvousList.length === 0 ? 'Il n’y a aucune données à afficher. Si le problème persiste, contactez votre adminsitrateur' : ''}
            </div>
        </Layout>
    )
}
