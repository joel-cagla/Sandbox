import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
    const query = "test query";

    return (
        <Form action="/" scroll={false} className="search-form">
            <input 
                name="query" 
                defaultValue={query}
                className="search-input"
                placeholder="Search startups"
            />

            <div className="flex gap-2">
                {query && <SearchFormReset />}
            </div>
        </Form>
    )
}

export default SearchForm