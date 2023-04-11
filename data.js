// Modify these lines to make the website your own
const header = 'TeoPotato Scratch Projects';
const footer = 'All projects on this site were created in Scratch by <a href="https://scratch.mit.edu/users/-TeoPotato-/">-TeoPotato-</a>';
const logo = 'img/rokcoder.gif';

// TurboWarp is a branch of Scratch (by @GarboMuffin) with many speed and operational improvements
const useTurboWarp = false;

// The projects can be broken up into genres - by default I'm using Ports, Arcade, Games, Multiplayer and Other
// Each project can have any accompanying informational tabs as shown below - for example, the Tyrian game will present tabs for overview, credits, instructions and controls
const gameList = new Map([
    [
        'Games', new Map([
            [807710261, {
                name: 'FIFA 23',
                overview: 'This is a remake of the popular game FIFA 23 in Scratch.',
                credits: 'The game was originally developed by EA Sports in 2022. All credits for logos go to them.'
            }],
            [805937443, {
                name: 'Potato Clicker',
                overview: 'A simple clicker game based around potatoes.',
            }],
        ])
    ],
    [
        'Simulators', new Map([
            [806675928, {
                name: 'Potato Life Sim'
            }],
        ])
    ],
    [
        'Animations and Drawings', new Map([
            [815334713, {
                name: 'The Potato Community - Parallax'
            }],
        ])
    ],
    [
        'Arcade', new Map([
            [831667117, {
                name: 'Potato Snaek'
        ])
    ],
    [
        'Other', new Map([
            [000000000, {
                name: 'Nill'
            }]
        ])
    ]
]);

