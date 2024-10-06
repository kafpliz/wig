export let ratingProcent = (part: number): number[] => {
    const procent = (part / 10) * 100;

    if (procent <= 20) {
        return [1]
    } else if (procent <= 40) {
        return [1, 2]
    } else if (procent <= 60) {
        return [1, 2, 3]
    } else if (procent <= 80) {
        return [1, 2, 3, 4]
    } else if (procent <= 100) {
        return [1, 2, 3, 4, 5]
    }
    return []
}

export function unixToDate(unixTime:number | boolean) {
    if(unixTime != false && typeof unixTime == 'number'){
        const date = new Date(unixTime * 1000);
        let time = date.toLocaleDateString(); 
        return {message: 'Активна до ' + time, isSub: true}
    } else {
        return {message: 'Неактивна', isSub:false}
    }
    }
 
    