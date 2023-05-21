import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Layout({children}) {

    return (
        <div className={inter.className}>
            <Header/>
            <main className="container mx-auto px-4">
                {children}
            </main>
            <Footer/>
        </div>

    )
}