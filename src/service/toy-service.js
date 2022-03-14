import { storageService } from './async-storage-service.js';
import { utilService } from './util-service.js';

const KEY = 'toys';

const gToys = [
    {
        "_id": 221,
        "name": "non pulvinar",
        "price": 92,
        "type": "Adult",
        "createdAt": "1978-05-17T20:36:34.991Z",
        "inStock": true
    },
    {
        "_id": 222,
        "name": "magna eget",
        "price": 23,
        "type": "Adult",
        "createdAt": "1979-09-20T13:57:34.158Z",
        "inStock": true
    },
    {
        "_id": 223,
        "name": "massa in",
        "price": 97,
        "type": "Funny",
        "createdAt": "1997-01-17T12:07:17.297Z",
        "inStock": false
    },
    {
        "_id": 224,
        "name": "placerat turpis",
        "price": 64,
        "type": "Educational",
        "createdAt": "1971-04-09T02:23:10.819Z",
        "inStock": true
    },
    {
        "_id": 225,
        "name": "molestie massa",
        "price": 98,
        "type": "Adult",
        "createdAt": "1978-12-13T06:53:26.426Z",
        "inStock": false
    },
    {
        "_id": 226,
        "name": "placerat amet",
        "price": 46,
        "type": "Educational",
        "createdAt": "1974-05-13T23:45:30.109Z",
        "inStock": true
    },
    {
        "_id": 227,
        "name": "lectus adipiscing",
        "price": 68,
        "type": "Funny",
        "createdAt": "1998-07-07T09:45:28.285Z",
        "inStock": false
    },
    {
        "_id": 228,
        "name": "et vestibulum",
        "price": 82,
        "type": "Funny",
        "createdAt": "1991-06-13T16:23:41.575Z",
        "inStock": true
    },
    {
        "_id": 229,
        "name": "at pharetra",
        "price": 89,
        "type": "Educational",
        "createdAt": "1990-06-16T17:24:28.668Z",
        "inStock": false
    },
    {
        "_id": 230,
        "name": "porttitor egestas",
        "price": 13,
        "type": "Funny",
        "createdAt": "1989-01-19T22:29:33.438Z",
        "inStock": false
    },
    {
        "_id": 231,
        "name": "orci adipiscing",
        "price": 51,
        "type": "Educational",
        "createdAt": "1984-04-28T23:57:39.806Z",
        "inStock": true
    },
    {
        "_id": 232,
        "name": "porttitor suspendisse",
        "price": 1,
        "type": "Educational",
        "createdAt": "1992-09-26T11:09:51.477Z",
        "inStock": true
    },
    {
        "_id": 233,
        "name": "sit tortor",
        "price": 8,
        "type": "Educational",
        "createdAt": "1972-11-29T08:56:19.517Z",
        "inStock": true
    },
    {
        "_id": 234,
        "name": "aliquam mattis",
        "price": 82,
        "type": "Adult",
        "createdAt": "1974-01-24T15:41:28.411Z",
        "inStock": true
    },
    {
        "_id": 235,
        "name": "mattis vitae",
        "price": 86,
        "type": "Educational",
        "createdAt": "1987-02-27T16:49:07.796Z",
        "inStock": true
    },
    {
        "_id": 236,
        "name": "ac dolor",
        "price": 25,
        "type": "Educational",
        "createdAt": "1994-07-26T16:49:47.344Z",
        "inStock": true
    },
    {
        "_id": 237,
        "name": "et sapien",
        "price": 18,
        "type": "Educational",
        "createdAt": "1986-12-08T04:49:21.177Z",
        "inStock": false
    },
    {
        "_id": 238,
        "name": "mattis sed",
        "price": 72,
        "type": "Funny",
        "createdAt": "1983-03-17T23:41:38.912Z",
        "inStock": true
    },
    {
        "_id": 239,
        "name": "rutrum egestas",
        "price": 93,
        "type": "Educational",
        "createdAt": "1976-06-23T17:59:57.439Z",
        "inStock": true
    },
    {
        "_id": 240,
        "name": "lacus dolor",
        "price": 29,
        "type": "Funny",
        "createdAt": "1994-02-28T07:42:32.333Z",
        "inStock": false
    }
];

export const toyService = {
    getEmptyToy,
    save,
    remove,
    getById,
    query,
};

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor'];

const toy = {
    '_id': 't101',
    'name': 'Talking Doll',
    'price': 123,
    'labels': ['Doll', 'Battery Powered', 'Baby'],
    'createdAt': 1631031801011,
    'inStock': true
};


function query() {
    return storageService.query(KEY)
        .then(toys => {
            if (!toys && !toys.length) {
                toys = gToys;
            }
            return toys;
        });
}

function getById(toyId) {
    return storageService.get(KEY, toyId);
}

function remove(toyId) {
    return storageService.remove(KEY, toyId);
}

function save(toy) {
    if (toy.id) return storageService.put(KEY, toy);
    return storageService.post(KEY, toy);
}

function getEmptyToy() {
    return {
        '_id': '',
        'name': 'Talking Doll',
        'price': 123,
        'labels': ['Doll', 'Battery Powered', 'Baby'],
        'createdAt': 1631031801011,
        'inStock': true,
    };
}
