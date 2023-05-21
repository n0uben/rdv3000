import Link from "next/link";

export default function Page2() {
    return (
        <>
            <h1>Bonjour cest la page 2 !</h1>
            <p><Link href="/">Retour a laccueil </Link></p>
        </>
    );
}