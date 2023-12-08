export function excludeObjectElement(object, key) {
    const newObject = {...object}
    delete newObject[key]
    return newObject;
}
