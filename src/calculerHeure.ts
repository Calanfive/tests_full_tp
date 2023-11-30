export function getValeur(lune: number, terre: number, soleil: number): number {
    const result = lune + terre + soleil 
    return 0
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
