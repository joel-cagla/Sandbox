//import Image from "next/image";

import SearchForm from "../components/SearchForm";

export default function Home() {
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
          <SearchForm />
      </section>
    </>
  );
}
