import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartupCard = ({post} : {post: StartupTypeCard}) => {
    const { createdAt, views, author: {_id: authorId, name}, title, category, _id, image } = post
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}></Link>
                    <p className="text-16-medium line-clamp-1">{name}</p>
                </div>
            </div>
        </li>
    )
}

export default StartupCard