import axios from 'axios';

const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/api/toy/'
    : '//localhost:3030/api/toy/';

// const BASE_URL = '//localhost:3031/api/toy/';

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
};

function query(filterBy) {
    return axios.get(BASE_URL, { params: filterBy }).then((res) => res.data);
}

async function getById(toyId) {
    try {
        const res = await axios.get(BASE_URL + toyId);
        return res.data;
    } catch (err) {
        console.log('err', err);
    }
}

function remove(toyId) {
    console.log('toyId', toyId);
    return axios.delete(BASE_URL + toyId);
}

function save(toy) {
    if (toy._id) return axios.put(BASE_URL + toy._id, toy).then((res) => res.data);
    else return axios.post(BASE_URL, toy).then((res) => res.data);
}

// function getEmptyToy() {
//   return {
//     name: '',
//     price: 0,
//     inStock: false,
//   };
// }

function getEmptyToy() {
    return {
        name: '',
        price: 0,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        inStock: true,
        reviews: ['Good', 'Nice', 'Fun'],
    };
}
