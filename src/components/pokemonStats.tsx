import { PokemonStats } from "../App";

export function PokemonStatsView(props?: PokemonStats) {
    return (
        <div className="text-base h-fit md:text-xl">
            <div className=" flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">HP</span>
                    <span>{props?.hp}</span>
                </div>
                <div className=" flex flex-col">
                    <span className="font-bold">Attack</span>
                    <span>{props?.attack}</span>
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">Defense</span>
                    <span>{props?.defense}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Sp. Atk</span>
                    <span>{props?.specialAttack}</span>
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">Sp. Def</span>
                    <span>{props?.specialDefense}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Speed</span>
                    <span>{props?.speed}</span>
                </div>
            </div>
        </div>
    )
}