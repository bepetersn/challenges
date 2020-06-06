
interface IRequest {
    money: number,
    denominations: number[]
}

interface IChange {
    [denomination: number]: number
}

export function getLargestDenomination(request: IRequest): number {

    /* Pre-condition: request.denominations are sorted, ascending */

    let index: number = 0
    let numDenominations : number = request.denominations.length
    let reverseIndex : number
    while(true) {
        reverseIndex = (numDenominations - index) - 1 
        if(request.money >= request.denominations[reverseIndex]) {
            return request.denominations[reverseIndex]
        }
        index++
    }
}

export default function greedyChange(request: IRequest): IChange {
    let change : IChange = {}
    let newRequest : IRequest = Object.assign({}, request)
    while (newRequest.money > 0) {
        let coin : number = getLargestDenomination(newRequest)
        change[coin] ? change[coin]++ : change[coin] = 1
        newRequest.money -= coin
    }
    return change
}
