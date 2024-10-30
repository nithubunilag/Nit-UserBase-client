type State = { [key: string]: any };

export const isValueChanged = (initialState: State, newState: State): boolean => {
    const initialKeys = Object.keys(initialState);
    const newKeys = Object.keys(newState);

    // Check if the keys are equal
    if (initialKeys.length !== newKeys.length || !initialKeys.every((key) => newKeys.includes(key))) {
        return true;
    }

    // Compare values
    for (const key of initialKeys) {
        if (initialState[key] != newState[key]) {
            return true;
        }
    }

    return false;
};
