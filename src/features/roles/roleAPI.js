export function fetchGetAllRole() {
    return fetch(`https://back.lab-chatelain.fr/api/roles`).then((res) => res.json());
}
