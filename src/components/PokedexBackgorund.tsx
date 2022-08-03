import { useState } from "react";
import { Pokemon } from "../App";
import { PokemonInformations } from "./PokemonInformations";

export function PokedexBackgorund(props: Pokemon) {

    return (
        <div className="w-[80%] h-auto md:p-6 justify-center bg-red-600 border-8 rounded-3xl border-red-700 md:w-[65%] md:h-fit">
            <div className="w-[90%] font-medium text-xl capitalize ml-auto mr-auto h-9 mt-3 border-4 rounded-md border-gray-500 p-3 bg-cyan-50 flex text-center items-center justify-between
            md:w-full md:h-fit md:mt-5">
                <span>#{ props.id }</span>
                <input className="bg-transparent w-full p-1 mr-1 ml-1 capitalize text-sm outline-none" 
                onChange={(event) => props.searchPokemon(event.target)}
                type="search" 
                placeholder="Name Or Number"
                required
                />
                <span >{ props.name }</span>
            </div>
            <PokemonInformations
                name={props.name}
                id={props.id}
                image={props.image}
                bio={props.bio}
                stats={props.stats} 
                type={props.type}
                prevPokemon={props.prevPokemon}
                nextPokemon={props.nextPokemon}
                />
        </div>
    )
}