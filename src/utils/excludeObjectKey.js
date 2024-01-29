export function excludeObjectKey(object, key) {
    const newObject = {...object}
    delete newObject[key]
    return newObject;
}
