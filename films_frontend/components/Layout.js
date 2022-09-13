import Head from "next/head";
import { UserProvider } from "../lib/authContext";
import Nav from "./Nav";

const Layout = ({ user, loading = false, children }) => {
    return (
    <UserProvider value={{ user, loading}} >
        <Head>
            <title>Film Database</title>
        </Head>
        <Nav />
        <main className="px-4">
            <div
            className="
            flex
            justify-center
            items-center
            bg-white
            mx-auto
            w-2/4
            rounded-lg
            my-16
            p-16">
<div className="text-2xl font-medium">{children}</div>
            </div>
        </main>
    </UserProvider>
    )
}

export default Layout;

/**
 * To make user avaliable in the whole application
 * we user the UserProvider hook
 */