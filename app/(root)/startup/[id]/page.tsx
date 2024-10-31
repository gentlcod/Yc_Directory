import React from 'react';
import {notFound} from "next/navigation";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from '@/sanity/lib/client';
import {formatDate} from "@/lib/utils";

export const experimental_ppr = true;

const Page = async ({ params }: { params: { id: string } }) => {
    const id = (await params).id;

    console.log({id})

    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id});
    if(!post) return notFound()

    return (
        <>
            <section
            className='pink_container !min-h-[230px]'
            >
                <p
                className='tag'
                >
                    {formatDate(post?._createdAt)}
                </p>
            </section>
            <h1 className='text-3xl'>{post.title}</h1>
        </>
    );
};

export default Page;

