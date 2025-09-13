const heroes = [
    {name: 'Hulk', strength: 90000},
    {name: 'Spider-Man', strength: 25000},
    {name: 'Hawk Eye', strength: 136},
    {name: 'Thor', strength: 100000},
    {name: 'Black Widow', strength: 136},
    {name: 'Vision', strength: 5000},
    {name: 'Scarlet Witch', strength: 60},
    {name: 'Mystique', strength: 120},
    {name: 'Namora', strength: 75000},
    {name: 'Captain America', strength: 362},
    {name: 'Deadpool', strength: 1814},
    {name: 'Black Panther', strength: 1814},
];
function isHulk(hero) {
    return hero.strength === 136;
}
    const hulk = heroes.filter(isHulk);
    console.log(hulk); // [{name: 'Hawk Eye', strength: 136}, {name: 'Black Widow', strength: 136}]

const thor = heroes.find(hero => hero.name === 'Thor');
console.log(thor); // {name: 'Thor', strength: 100000}                                                                 

    const names = heroes.map(hero => hero.name);
    console.log(names); // ['Hulk', 'Spider-Man', 'Hawk Eye', 'Thor', 'Black Widow', 'Vision', 'Scarlet Witch', 'Mystique', 'Namora', 'Captain America', 'Deadpool', 'Black Panther']
    const extras = [
    {name: 'Cyclops', strength: 136},
    {name: 'Gambit', strength: 136},
];
    const more = heroes.concat(extras);
    console.log(more);

function sumStrength(total, hero) {
    return total + hero.strength;
}
    const totalStrength = heroes.reduce(sumStrength,0);
    console.log(totalStrength); // 297323