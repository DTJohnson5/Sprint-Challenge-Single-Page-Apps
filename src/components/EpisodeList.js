import React, { useEffect, useState } from "react";
import Episode from './EpisodeCard';
import axios from 'axios';

export default function EpisodeList() {
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
        .then((res) => {
        setEpisodes(res.data.results);
        })
    }, []);

    return (
    <section className="episodes-list grid-view">
        {episodes.map((details) => {
            return (
                <Episode 
                key={details.id}
                name={details.name}
                episode={details.episode}
                date={details.air_date} 
                />
            )
        })}
    </section>
    );
} 