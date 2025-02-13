import axios from 'axios';

const swapiGetter = async (id: number) => {
    return await axios.get(`https://swapi.dev/api/people/${id}/`).then((res) => res.data.name).catch((error) => console.log(error));
}

export default swapiGetter;