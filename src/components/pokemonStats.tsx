import { PokemonStats } from "../App";

export function PokemonStatsView(props?: PokemonStats) {
    return (
        <div className="text-base h-fit md:text-xl">
            <div className=" flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">HP</span>
                    <span className={`${props && (props.hp < 40) ? 'text-red-600' : props && props.hp > 110 ? 'text-green-600' : ''}`}>{props?.hp}</span>
                </div>
                <div className=" flex flex-col">
                    <span className="font-bold">Attack</span>
                    <span className={`${props && (props.attack < 40) ? 'text-red-600' : props && props.attack > 110 ? 'text-green-600' : ''}`}>{props?.attack}</span>
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">Defense</span>
                    <span className={`${props && (props.defense < 40) ? 'text-red-600' : props && props.defense > 110 ? 'text-green-600' : ''}`}>{props?.defense}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Sp. Atk</span>
                    <span className={`${props && (props.specialAttack < 40) ? 'text-red-600' : props && props.specialAttack > 110 ? 'text-green-600' : ''}`}>{props?.specialAttack}</span>
                </div>
            </div>

            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    <span className="font-bold">Sp. Def</span>
                    <span className={`${props && (props.specialDefense < 40) ? 'text-red-600' : props && props.specialDefense > 110 ? 'text-green-600' : ''}`}>{props?.specialDefense}</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Speed</span>
                    <span className={`${props && (props.speed < 40) ? 'text-red-600' : props && props.speed > 110 ? 'text-green-600' : ''}`}>{props?.speed}</span>
                </div>
            </div>
        </div>
    )
}