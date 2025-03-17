//import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({ searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 25,
    author: { _id: 1, name: "WimWam" }, 
    _id: 1,
    description: "Some description",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIF0KazBQXAe-W9Af2GPv5j-Bg8yYd_RCfg&s",
    category: "Some category",
    title: "Some tech startup",
  },
];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br />Connect with entrepreneurs
        </h1>
          <p 
          className="sub-heading !max-w-3xl">Submit your ideas, vote on pitches and get noticed in 
            competitions!
          </p>
          <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}`: 'All startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
