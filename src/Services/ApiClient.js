export default function fetchData(url) {
  return new Promise((resolve, reject) => fetch(url)
    .then(result => result.json())
    .then(json => resolve(json.items.map(item => item.fields)))
    .catch(reject)
  );
}
