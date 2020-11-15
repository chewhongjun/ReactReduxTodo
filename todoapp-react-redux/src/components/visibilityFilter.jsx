import React from 'react'

export default function visibilityFilter({filters}) {
    return (
        filters.map((filter, i) => <button key={`filter-${i}`}>
            {filter}
        </button>)
    )
}
