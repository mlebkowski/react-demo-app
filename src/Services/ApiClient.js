const defaultUrl = 'https://cdn.contentful.com/spaces/g91wl1tc58wp/entries?access_token=3baa24499858a1a5197abad7fa92fe3585a7c9a57b034962ac9da6b2c2f96909&select=fields';

let data = undefined;
let fetching = false;
const queue = [];

function resolveQueue(data) {
  queue.forEach(resolve => resolve(data));

  queue.length = 0;
}

export default function fetchData(url = defaultUrl) {
  return new Promise((resolve, reject) => {
    queue.push(resolve);

    if (data) {
      return resolveQueue(data);
    }

    if (fetching) {
      return;
    }

    fetching = true;

    fetch(url)
              .then(result => result.json())
              .then(json => resolveQueue(data = json.items.map(item => item.fields)))
              .catch(reject)
    }
  );
}
