export function removeEmptyKeys(inputObject: Record<string, any>): Record<string, any> {
    const resultObject: Record<string, any> = {};

    for (const key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            const value = inputObject[key];

            // Check if the value is not empty (null, undefined, empty string, empty array, empty object)
            if (value !== null && value !== undefined && value !== "" && !isEmptyArray(value) && !isEmptyObject(value)) {
                resultObject[key] = value;
            }
        }
    }

    return resultObject;
}

function isEmptyArray(arr: any[]): boolean {
    return Array.isArray(arr) && arr.length === 0;
}

function isEmptyObject(obj: Record<string, any>): boolean {
    if (obj instanceof File) return false;

    return typeof obj === "object" && Object.keys(obj).length === 0;
}
