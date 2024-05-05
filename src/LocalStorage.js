const localStorageKey = "tasks";

export const setLocalStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];