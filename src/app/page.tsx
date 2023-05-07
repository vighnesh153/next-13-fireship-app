import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // redirect('/api/auth/signin')
    return <p>You must be signed in...</p>
  }

  return (
    <main>
      Aur bhai. Kaisa hai?
    </main>
  )
}
