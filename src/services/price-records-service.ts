const root = 'http://localhost:5064';

export const getPrices = async (url: string) => {
  const response = await fetch(`${root}${url}`);
  const data = await response.json();
  return data;
};
