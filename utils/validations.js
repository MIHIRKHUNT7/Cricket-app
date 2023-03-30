export const isNameValid = (name) => {
    if (name === '' || name === null)
        return false

    const regEx = new RegExp("^[A-Za-z][A-Za-z_]{1,12}$");
    if (regEx.test(name))
        return true
}

export const isAgeValid = (age) => {
    if (age === '' || isNaN(age) || age > 100)
        return false;
    else
        return true
}

export const isRunsValid = (runs) => {
    if (runs === '' || isNaN(runs) || runs > 50000)
        return false
    else
        return true
}

export const isCountryValid = (cntry) => {
    const regEx = new RegExp("^[A-Za-z][A-Za-z_]{3,12}$");
    if (regEx.test(cntry))
        return true
    else
        return false
}

export const isMatchCountValid = (match_count) => {
    if (match_count === '' || isNaN(match_count) || match_count > 600)
        return false
    else
        return true
}