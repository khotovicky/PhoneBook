export function transformPhoneBookObjectToArray (phoneBook) {
    const array = []
    for (const name in phoneBook) {
        array.push({name: name, number: phoneBook[name]})
    }
    return array
}
