const user=require('../models/user.model')
const {faker}=require('@faker-js/faker')
async function createUser(numOfUsers){
try {
    const usersPromise=[];
    for(let i=0; i<=numOfUsers; i++){
        const tempUser=user.create({
            username:faker.person.fullName(),
            email:faker.internet.email(),
            image:faker.image.avatar()
        })

        usersPromise.push(tempUser)
    }
    await Promise.all(usersPromise)
    console.log('users Created',numOfUsers);
    process.exit(1);

} catch (error) {
    console.log(error);
    process.exit(1)
}
}

module.exports={createUser}