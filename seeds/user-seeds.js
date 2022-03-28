const { User } = require('../models');

const userdata = [
    {
        username: 'randy12',
        email: 'ran12@gmail.com',
        password: '123456'
    },
    {
        username: 'markV5',
        email: 'mark12@gmail.com',
        password: '12345'
    },
    {
        username: 'Gengi1345',
        email: 'gengiluvssoup@gmail.com',
        password: 'password88'
    },
    {
        username: 'RachelAnz321',
        email: 'bballRachel@gmail.com',
        password: 'ricepudding'
    },
    {
        username: 'Stannks5421',
        email: 'stanks@gmail.com',
        password: 'tiramisulover'
    },
    {
        username: 'Hiesenburg52',
        email: 'mrWhite@yahoo.com',
        password: 'ilovechemistry'
    },
    {
        username: 'HankHill43',
        email: 'ilovepeggy@yahoo.com',
        password: 'propaneislife'
    },
    {
        username: 'TheRealClarkKent',
        email: 'hero@theDailyPlanet.com',
        password: 'strongestmanever'
    },
    {
        username: 'Maria32Maria',
        email: 'maria32@gmail.com',
        password: 'marialovespie'
    },
    {
        username: 'Elongated_Muskrat',
        email: 'emusk@spaceX.com',
        password: 'electrifytheworld'
    },
    {
        username: 'WilliardPhonso',
        email: 'wphonso@gmail.com',
        password: '12345678'
    },
    {
        username: 'ehes123',
        email: 'ehes123@gmail.com',
        password: '1234554321'
    },
    {
        username: 'eric34',
        email: 'eric@yahoo.com',
        password: 'bird34'
    },
    {
        username: 'ari164',
        email: 'ari@yahoo.com',
        password: 'whale683'
    },
    {
        username: 'oscar349',
        email: 'oscar@gmail.com',
        password: '7654321'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;