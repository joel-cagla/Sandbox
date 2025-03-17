import React from "react";
import Ping from "./Ping";
import { startup_views_query } from "@/sanity/lib/queries";
import {client} from "@/sanity/lib/client";


const View = async ({id}: {id: string}) => {
    const { views: totalViews } = await client
    .withConfig( {useCdn: false} )
    .fetch(startup_views_query, { id });

    return (
        <div className="view-container">
            <div className="absolute -top-2 -right-2">
                <Ping />
            </div>
            <p className="view-text">
                <span className="font-black">Views: {totalViews}</span>
            </p>
        </div>
    )
}

export default View;