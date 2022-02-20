import db from './db/index'

const userData = [
    {
        "username": "Kevin"
    },
    {
        "username": "Jeff"
    },

]

db.connect.once('open', async() => {
    await db.models.User.deleteMany({});
    await db.models.Pokemon.deleteMany({});

    const users = await db.models.User.insertMany(userData);

    for (let i = 0; i < users.length; i++) {
        const current = users[i];
        const pokemonData = [];

        for (let y = 0; y < 3; y++){ 
            pokemonData.push({
                pokemon: `$(current.username) Pokemon ${y + 1}`,
                user: current._id
            });
        }
        await db.models.Pokemon.collection.insertMany(pokemonData);
    }
    console.log('all done');
    process.exit(0);
});