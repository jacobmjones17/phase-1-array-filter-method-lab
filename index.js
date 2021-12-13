const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    const result = drivers.filter(r => r.toLowerCase() === name.toLowerCase());
    return result
}

function fuzzyMatch(drivers, letters) {
    const result = drivers.filter(r => r.toLowerCase().slice(0, 2) === letters.toLowerCase())
    return result
}

function matchName(drivers, name){
    const result = drivers.filter(r => r.name.toLowerCase() === name.toLowerCase());
    return result
}
