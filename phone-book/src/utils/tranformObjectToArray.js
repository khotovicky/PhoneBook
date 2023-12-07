export function transformPhoneBookObjectToArray (object) {
    const array = []
    for (const element in object) {
        array.push({name: element, number: object[element]})
    }
    return array
}