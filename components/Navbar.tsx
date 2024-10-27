"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
    const { data: session } = useSession();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/public">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session?.user ? (
                        <>
                            <Link href="/startup/create">Create</Link>
                            <button onClick={() => signOut()}>Logout</button>
                            <Link href={`/user/${session.user.id}`}>
                                <Avatar>
                                    <AvatarImage src={session.user.image || ""} alt={session.user.name || ""} />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <button onClick={() => signIn("github")}>Login</button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
