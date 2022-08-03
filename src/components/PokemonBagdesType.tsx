export function PokemonBadgesTypes(type: any) {
   function getPokemontype() {
        switch (type.type.type.name) {
            case 'grass':
                return (
                    <div className="pkm-type grass"><span>Grass</span></div>
                )
            case 'poison':
                return (
                    <div className="pkm-type poison"><span>Poison</span></div>
                )
            case 'normal':
                return (
                    <div className="pkm-type normal"><span>Normal</span></div>
                )
            case 'fire':
                return (
                    <div className="pkm-type fire"><span>Fire</span></div>
                )
            case 'water':
                return (
                    <div className="pkm-type water"><span>Water</span></div>
                )
            case 'electric':
                return (
                    <div className="pkm-type electrik"><span>Eletric</span></div>
                )
            case 'ice':
                return (
                    <div className="pkm-type ice"><span>Ice</span></div>
                )
            case 'fighting':
                return (
                    <div className="pkm-type fighting"><span>Fighting</span></div>
                )
            case 'ground':
                return (
                    <div className="pkm-type ground"><span>Ground</span></div>
                )
            case 'flying':
                return (
                    <div className="pkm-type flying"><span>Flying</span></div>
                )
            case 'psychic':
                return (
                    <div className="pkm-type psychic"><span>Psychic</span></div>
                )
            case 'bug':
                return (
                    <div className="pkm-type bug"><span>Bug</span></div>
                )
            case 'rock':
                return (
                    <div className="pkm-type rock"><span>Rock</span></div>
                )
            case 'ghost':
                return (
                    <div className="pkm-type ghost"><span>Ghost</span></div>
                )
            case 'dark':
                return (
                    <div className="pkm-type dark"><span>Dark</span></div>
                )
            case 'dragon':
                return (
                    <div className="pkm-type dragon"><span>Dragon</span></div>
                )
            case 'steel':
                return (
                    <div className="pkm-type steel"><span>Steel</span></div>
                )
            case 'fairy':
                return (
                    <div className="pkm-type fairy"><span>Fairy</span></div>
                )
            default:
                return (
                    <div className="pkm-type normal"><span>aaaaaaaaa</span></div>
                )
        }
    }
    return (
        getPokemontype()
    )
}