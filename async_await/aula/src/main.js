/* Aula 1 - Async/Await
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('Ok')}, 2000);
});

// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// async function executaPromise() {
//     minhaPromise().then(response => {
//         console.log(response);
        
//         minhaPromise().then(response => {
//             console.log(response);

//             minhaPromise().then(response => {
//                 console.log(response);
//             });
//         });
//     });
// }

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise();
*/

/* Aula 2 - Configurando axios */

import axios from 'axios';

class Api {
    static async getInfoUser(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);

            console.log(response.data);
        }
        catch(e) {
            console.warn(e);
        }
    }
}

Api.getInfoUser('diego3g');
Api.getInfoUser('diego3gdwddsaw');