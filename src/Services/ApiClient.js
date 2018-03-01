const defaultUrl = 'https://cdn.contentful.com/spaces/g91wl1tc58wp/entries?access_token=3baa24499858a1a5197abad7fa92fe3585a7c9a57b034962ac9da6b2c2f96909&select=fields';

export default function fetchData(url = defaultUrl) {
  return new Promise((resolve, reject) => fetch(url)
    .then(result => result.json())
    .then(json => resolve(json.items.map(item => item.fields)))
    .catch(reject)
  );
}
