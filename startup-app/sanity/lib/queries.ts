import { defineQuery } from "next-sanity";

export const startups_query = 
    defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc)
  {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image, bio
    },
    views,
    description,
    category,
    image
  }`);

export const startups_by_id_query = defineQuery(`*[_type == 'startup' && _id == $id][0]
  {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image, bio
    },
    views,
    description,
    category,
    image,
    pitch
  }`);