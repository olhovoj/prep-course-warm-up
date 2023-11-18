export {};

type HonorCards = "Ace" | "King" | "Queen" | "Jack"

function onlyTheAces(arr: HonorCards[]): HonorCards[] {
    return arr.filter((card) => card === 'Ace')
    // const res: HonoredCards[] = []
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] === 'Ace') {
    //         res.push(arr[i])
    //     }
    // }
    // return res
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
