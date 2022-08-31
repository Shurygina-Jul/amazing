export const setData = (data: any, DATA_KEY: any) => {
  return localStorage.setItem(DATA_KEY, JSON.stringify(data));
};

export const getData = (DATA_KEY: any) => {
  return JSON.parse(localStorage.getItem(DATA_KEY) as string);
};
