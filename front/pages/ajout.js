import Link from "next/link";
import Layout from "@/components/layout";

export default function Ajout() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold underline">Bonjour cest la page 2 !</h1>
            <p><Link href="/" className="text-cyan-600">Retour a laccueil </Link></p>
        </Layout>
    );
}