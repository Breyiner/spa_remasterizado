const url = 'http://localhost:3000/api';

export const get = async (endpoint) => {
    let data = await fetch(`${url}/${endpoint}`);

    return await data.json();
}

export const post = async (datos, endpoint) => {
    let data = await fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });

    return await data.json();
}

export const put = async (datos, endpoint) => {
  let data = await fetch(`${url}/${endpoint}`, {
        method: 'PUT',
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
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await data.json();
}