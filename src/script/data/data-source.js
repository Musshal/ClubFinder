import clubs from './clubs.js'

class DataSource {
    static async searchClub(keyword) {
        // return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        // .then(response => {
        //     return response.json();
        // })
        // .then(responseJson => {
        //     if(responseJson.teams) {
        //         return Promise.resolve(responseJson.teams);
        //     } else {
        //         return Promise.reject(`${keyword} is not found`);
        //     }
        // })
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);
            const responseJson = await response.json();
            if (responseJson.teams) {
                return Promise.resolve(responseJson.teams);
            } else {
                throw 'nullPointerException';
            }
        } catch(error) {
            console.error(error);
            return Promise.reject(`${keyword} is not found`);
        }
        // return new Promise((resolve, reject) => {
        //     const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         reject(`${keyword} is not found`);
        //     }
        // });
    }
}

export default DataSource;