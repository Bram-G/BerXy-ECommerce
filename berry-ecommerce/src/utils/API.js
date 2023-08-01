const URL_PREFIX = "http://localhost:3001/"

const API = {
    getAllWatches: () => {
        return fetch(`${URL_PREFIX}api/watches`).then(res => res.json())
    },
    getWatchById: (id) => {
        return fetch(`${URL_PREFIX}api/watches/${id}`).then(res => res.json())
    },
    getWatchByBrand: (brand) => {
        return fetch(`${URL_PREFIX}api/brand/${brand}`).then(res => res.json())
    },
    getRandomWatch: () => {
        return fetch(`${URL_PREFIX}api/random/watch`).then(res => res.json())
    },
    getRandomBrand: () => {
        return fetch(`${URL_PREFIX}api/random/brand`).then(res => res.json())
    },
    getAllBrands: () => {
        return fetch(`${URL_PREFIX}api/brand`).then(res => res.json())
    },
}

export default API;