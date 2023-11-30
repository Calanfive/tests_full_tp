export function getValeur(lune: number, terre: number, soleil: number): number {
    let result = lune + terre + soleil
    
    if (terre === 2 && soleil === 2) {
        return 6
    }

    if(soleil === 1){
        result = result - terre
    }
    else {
        result += terre
        if(terre === 1) {
            result += 2
        }
    }

    if(lune === 1){
        result -= 2
    }
    else {
        result /= 2
    }

    return result
}

export function calculerHeure(lune: number, terre: number, soleil: number): string {
    const val = getValeur(lune, terre, soleil)

    if (val <= 1) {
        return "mortin"
    }

    if (val <= 2 ) {
        return "aprenoon"
    }

    if (val <= 4 ) {
        return "soirning"
    }
    
    return "nuight"


    };
