import { LazyLoadImage } from "react-lazy-load-image-component";
import { PokemonStatsView } from "./pokemonStats";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Pokemon } from "../App";
import { colorTypeGradients } from "./utils/utils";
import { useEffect, useState } from "react";
import { PokemonBadgesTypes } from "./PokemonBagdesType";

export function PokemonInformations(props: Pokemon) {
    const [finalColor, setFinalColor] = useState<string[]>([]);
    const [types, setTypes] = useState<any>([]);

    useEffect(() => {
        setTypes(props.type);
        if (props && types && types.length !== 0) {
            var filtered = types.filter(function (i: any) {
                return i;
            });
            setColors(filtered);
        }
    }, [props, types]);

    function setColors(filteredArray: any) {
        if (filteredArray.length === 2) {
            setFinalColor(colorTypeGradients(filteredArray[0].type.name, filteredArray.length, filteredArray[1].type.name));
        } else {
            setFinalColor(colorTypeGradients(filteredArray[0].type.name, filteredArray.length, filteredArray[0].type.name));
        }
    }
    return (

        <>
            <div style={{ background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` }}
                className={`shadow-md bg-opacity-5 m-3 w-fit h-max md:mt-10 rounded-3xl flex flex-col-reverse
                md:justify-between md:h-max md:flex-row md:m-auto md:w-full`}>

                <div className="flex flex-col w-[95%] m-auto md:w-full md:ml-10">

                    <div className="bg-slate-200 bg-opacity-70 mt-4 w-[100%] h-fit p-2 rounded-3xl m-auto text-center md:m-0">
                        <p className="font-bold text-red-600 text-xl"> Base Stats </p>
                        <PokemonStatsView
                            hp={props.stats.hp}
                            attack={props.stats.attack}
                            defense={props.stats.defense}
                            specialAttack={props.stats.specialAttack}
                            specialDefense={props.stats.specialDefense}
                            speed={props.stats.speed}
                        />
                    </div>

                    <div className="mt-2 w-full">
                        <div className="shadow-md bg-opacity-60 mt-2  mb-5 w-full h-fit bg-slate-200 p-3 block rounded-3xl md:float-right">
                            <p className="text-center font-bold text-red-600 text-xl"> About</p>
                            <p> {props.bio}</p>
                        </div>
                    </div>
                </div>

                <div className="m-max w-full flex justify-center ">
                    <div className="h-full bg-opacity-60 shadow-md float-right w-[95%] mt-2 flex-col bg-slate-200 flex justify-center items-center rounded-3xl 
                    md:w-max md:h-[24rem] md:mb-6 md:mt-6">
                        <LazyLoadImage
                            visibleByDefault={false}
                            delayMethod={'debounce'}
                            effect="blur"
                            className="w-40 md:w-72"
                            src={props.image}
                            alt="pokemon" />
                        <div className="flex flex-row justify-center w-full mt-3 mb-5">
                            {types.map((type: string) => (
                                <PokemonBadgesTypes
                                    key={types.length++}
                                    type={type}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-around m-3 md:mt-6 md:mb-0">
                <button onClick={() => props.prevPokemon()}
                    className="border-black border bg-[#444] w-24 h-1/4 text-white shadow-md font-medium md:h-1/2 md:w-56">&lt; Prev</button>
                <button onClick={() => props.nextPokemon()}
                    className="bg-[#444] border-black border w-24 h-1/4 text-white shadow-md font-medium md:h-1/2 md:w-56">Next &gt; </button>
            </div>
        </>
    )
}