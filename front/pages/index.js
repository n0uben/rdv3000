import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
          <code>app/index.js</code>
        </p>

          <p><Link href="/page2">Page 2</Link></p>

      </div>
    </main>
  )
}
