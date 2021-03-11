async function searchProduct(category, query) {
  let url = ''
  if (category === '')  url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (query === '')  url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
  else url = `https://api.mercadolibre.com/sites/MLB/search?category=${category}_ID&q=${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export default searchProduct;
