import {URL_API_RESERVATION} from "../../app/const";

export function fetchGetAllService() {
    return fetch(`${URL_API_RESERVATION}/chambreServices`).then((res) => res.json());
}

export function fetchGetServiceById(id) {
    return fetch(`${URL_API_RESERVATION}/chambreServices/${id}`).then((res) => res.json());
}

export function fetchSaveService(id, libelle) {
    const headersInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            libelleService: libelle
        })
    };
    return fetch(`${URL_API_RESERVATION}/chambreService/`, headersInit).then((res) => res.json());
}

export function fetchDeleteService(id) {
    return fetch(`${URL_API_RESERVATION}/chambreServices/${id}`, { method: 'DELETE' }).then((res) => res.json());
}

export function fetchUpdateService(id, libelle) {
    const headersInit = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            libelleService: libelle
        })
    };
    return fetch(`${URL_API_RESERVATION}/chambreService/`, headersInit).then((res) => res.json());
}