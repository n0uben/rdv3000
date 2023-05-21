import Link from "next/link";
import Layout from "@/components/layout";
import dataEmployee from "@/services/dataEmployee";

export async function getStaticProps() {
    const allEmployees = await dataEmployee.getAll();

    return {
        props: {
            allEmployees,
        }
    }
}

export default function Home({allEmployees}) {
    return (
        <Layout>
            <div>
                <p>
                    Get started by editing&nbsp;
                    <code>app/index.js</code>
                </p>
                <ul>
                    {allEmployees.map(({firstName, lastName}) => (
                            <li>{firstName} {lastName} </li>
                        )
                    )}
                </ul>


                <p><Link href="/ajout" className="text-cyan-600">Page 2</Link></p>

            </div>
        </Layout>
    )
}
