import Link from "next/link";
import Layout from "@/components/layout";
import dataRendezVous from "@/services/dataRendezVous";

export async function getServerSideProps() {
    const allRendezVous = await dataRendezVous.getAll();

    return {
        props: {
            allRendezVous,
        }
    }
}

export default function Home({allRendezVous}) {
    const optionsDate = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const optionsHeure = {
        hour: '2-digit',
        minute: '2-digit',
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
                    <th className="px-4 py-2">Titre</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Début</th>
                    <th className="px-4 py-2">Fin</th>
                    <th className="px-4 py-2">Employee</th>
                    <th className="px-4 py-2">Client</th>
                    <th className="px-4 py-2">Email client</th>
                </tr>
                </thead>
                <tbody>

                {allRendezVous.map(rendezvous => (
                    <tr key={rendezvous.id}>
                        <td className="border px-4 py-2">{rendezvous.title}</td>
                        <td className="border px-4 py-2">{new Date(rendezvous.start).toLocaleString('fr-FR', optionsDate)}</td>
                        <td className="border px-4 py-2">{new Date(rendezvous.start).toLocaleString('fr-FR', optionsHeure)}</td>
                        <td className="border px-4 py-2">{new Date(rendezvous.end).toLocaleString('fr-FR', optionsHeure)}</td>
                        <td className="border px-4 py-2">{rendezvous.employee.firstName} {rendezvous.employee.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.firstName} {rendezvous.client.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.email}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </Layout>
    )
}
