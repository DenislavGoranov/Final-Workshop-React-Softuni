async function requester(method, url, data = {}) {
    const options = {}

    if (method !== "GET") {
        options.method = method;
    }

    if (data != {}) {
        options.headers = {
            'Content-Type': "application/json",
        };

        options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    const result = response.json()

    return result;
}

const get = (url) => requester("GET", url);
const post = (url, data) => requester("POST", url, data);
const put = (url, data) => requester("PUT", url, data);
const del = (url, data) => requester("DELETE", url, data);

export default {
    get,
    post,
    put,
    del,
}