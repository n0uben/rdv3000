import Link from "next/link";
import Layout from "@/components/layout";

export default function Ajout() {
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
                    <option>employee 1</option>
                </select>

                <label className="block mt-6">Client</label>
                <select className="mt-3 block w-full">
                    <option>Sélectionner un client</option>
                    <option>client 1</option>
                </select>

            </div>
            <div className="mt-9">
                <button className="bg-green-600 px-5 py-2 rounded-full text-white">Ajouter</button>
            </div>
        </Layout>
    );
}