import Link from "next/link";
import Layout from "@/components/layout";
import dataRendezVous from "@/services/dataRendezVous";

export async function getStaticProps() {
    const allRendezVous = await dataRendezVous.getAll();

    return {
        props: {
            allRendezVous,
        }
    }
}

export default function Home({allRendezVous}) {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    return (
        <Layout>
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Employee</th>
                    <th className="px-4 py-2">Client</th>
                    <th className="px-4 py-2">Email client</th>
                    <th className="px-4 py-2">Duree</th>
                </tr>
                </thead>
                <tbody>

                {allRendezVous.map(rendezvous => (
                    <tr key={rendezvous.id}>
                        <td className="border px-4 py-2">{new Date(rendezvous.start).toLocaleString('fr-FR', options)}</td>
                        <td className="border px-4 py-2">{rendezvous.employee.firstName} {rendezvous.employee.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.firstName} {rendezvous.client.lastName}</td>
                        <td className="border px-4 py-2">{rendezvous.client.email}</td>
                        <td className="border px-4 py-2">{rendezvous.client.email}</td>
                    </tr>
                ))}
                </tbody>

            </table>


            <p><Link href="/ajout" className="text-cyan-600">Page 2</Link></p>

        </Layout>
    )
}
