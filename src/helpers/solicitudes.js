const url = 'http://localhost:3000/api';

export const get = async (endpoint) => {
    let data = await fetch(`${url}/${endpoint}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return await data.json();
}

export const post = async (datos, endpoint) => {
    let data = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    });

    return await data.json();
}

export const put = async (datos, endpoint) => {
  let data = await fetch(`${url}/${endpoint}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    return await data.json();
}

export const delet = async (endpoint) => {
  let data = await fetch(`${url}/${endpoint}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await data.json();
}