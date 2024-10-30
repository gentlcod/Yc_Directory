import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

    // REAL DYNAMICALLY POSTS FETCHING

    // const posts = await client.fetch(STARTUPS_QUERY)
    // console.log(JSON.stringify(posts, null, 2))
    const params = {search: query || null}
    const {data:posts} = await sanityFetch({query: STARTUPS_QUERY, params})


    // THIS IS MANUALLY (FAKE) POSTS THAT CREATED AT THE FIRST JUST FOR TEST

    // const posts = [
    //     {
    //         _createdAt: '2023-10-26',
    //         views: 55,
    //         author: { _id: 1 },
    //         _id: 1,
    //         description: 'This is a description',
    //         image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //         category: 'Robots',
    //         title: 'We Robots',
    //     },
    // ];

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup,
                    <br />
                    Connect With Entrepreneurs
                </h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote On Pitches & Get Noticed In Virtual Competitions.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for "${query}"` : "All Startups"}
                </p>

                <ul className="mt-7 card_grid">
                    {posts.length > 0 ? (
                        posts.map((post: StartupTypeCard) => (
                            <StartupCard key={post._id}  post={post} />
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>
            <SanityLive/>
        </>
    );
}
