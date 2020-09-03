export const pokemons = [
    {
        name: 'Пикачу',
        type: 'electric',
        hp: 274,
        img: './assets/Пикачу.png',
        attacks: [
            {
                name: "thunder jolt",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "electro ball",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "volt tackle",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "thunder crack",
                maxDamage: 160,
                minDamage: 130,
                maxCount: 2,
            }
        ]
    },
    {
        name: 'Чармандер',
        type: 'fire',
        hp: 282,
        img: './assets/Чармандер.png',
        attacks: [
            {
                name: "ember",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "flamethrower",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "burning tail",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "fire spin",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    },
    {
        name: 'Бульбазавр',
        type: 'fire',
        hp: 294,
        img: './assets/Бульбазавр.png',
        attacks: [
            {
                name: "tackle",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "vine whip",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "razor leaf",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "solar beam",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    },
    {
        name: 'Сквиртл',
        type: 'water',
        hp: 292,
        img: './assets/Сквиртл.png',
        attacks: [
            {
                name: "bubble",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "water gun",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "shell attack",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "hydro pump",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    },
    {
        name: 'Пиджи',
        type: 'air',
        hp: 284,
        img: './assets/Пиджи.png',
        attacks: [
            {
                name: "Air Slash",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "Razor Wind",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Heat Wave",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Sky Attack",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    },
    {
        name: 'Мью',
        type: 'air',
        hp: 404,
        img: './assets/Мью.png',
        attacks: [
            {
                name: "Pound",
                maxDamage: 40,
                minDamage: 20,
                maxCount: 100,
            },
            {
                name: "Ancient Power",
                maxDamage: 60,
                minDamage: 45,
                maxCount: 6,
            },
            {
                name: "Aura Sphere",
                maxDamage: 75,
                minDamage: 60,
                maxCount: 4,
            },
            {
                name: "Psychic",
                maxDamage: 130,
                minDamage: 110,
                maxCount: 2,
            }
        ]
    }
];

// const pokemonsNames = []
// pokemons.forEach((item) => {
//     pokemonsNames.push(item.name)
// })

// console.log(pokemonsNames);
// console.log(pokemonsNames.indexOf('Mew'));
// console.log(pokemonsNames.indexOf('Meww'));

// console.log(pokemonsNames.includes('Mew'));
// console.log(pokemonsNames.includes('Meww'));

// console.log(pokemons.find(item => item.name === 'Mew'));
// console.log(pokemons.filter(item => item.hp > 290 ));

// const mapArr = pokemonsNames.map((item, index, arr) => {
//     return {
//         name: item,
//         str: 'hit'
//     }
// })

// console.log(mapArr);

// pokemonsNames.sort()
// console.log(pokemonsNames);

// const str = 'Some string it\'s so strange'
// const split = str.split(' ')
// console.log(split);
// const join = split.join('-')
// const join2 = split.join('')
// console.log(join);
// console.log(join2);