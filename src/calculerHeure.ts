export function getValeur(lune: number, terre: number, soleil: number): number {
    
    let pouvoir = lune + terre + soleil 
    let cadran = 0
    let all = pouvoir + cadran

    if (terre === 2 && soleil === 2) {
        return 6
    }

    if (lune === 1) {
        all -= 2
        cadran += 1
        if(soleil === 1) {
            all -= terre
            cadran += 1
            if (terre === 1) {
                cadran += 1
                pouvoir += 2 
            }
        }
        else if(soleil === 2){
            all += 2*terre
            cadran += 2
        }
    }

    if (lune === 1 && terre === 1) {
        cadran += 2
        if (soleil === 2) {
            all += 1
        }
    }

    if (lune === 2 && soleil === 1 && terre === 1) {
        cadran += 3
        terre = 0
        all /= 2
    }

    if (lune === 2 && terre === 1 && soleil === 2) {
        cadran += 5
        pouvoir += 2*terre + 2
        all /= 2
    }

    return all
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
