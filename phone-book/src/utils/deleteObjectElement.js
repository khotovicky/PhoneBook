export function deleteObjectElement(object, element) {
    const newObject = {}
    for (const item in object) {
        if (item !== element) {
            newObject[item] = object[item]
        }
    }
    return newObject;
}