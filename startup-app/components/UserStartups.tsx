import React from "react";
import { startups_by_author_query } from "@/sanity/lib/queries";
import {client} from "@/sanity/lib/client";
import StartupCard, { StartupTypeCard } from "./StartupCard";

const UserStartups = async ({id}: {id: string}) => {
    const startups = await client.fetch(startups_by_author_query, {id})
    return<>
        {startups.length > 0 ? (startups.map((startup: StartupTypeCard) => (
            <StartupCard key={startup._id} post={startup} />
        ))
        ): (
            <p className="no-result">No posts yet</p>
        )}
        </>
}

export default UserStartups;