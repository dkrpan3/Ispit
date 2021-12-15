export default function dohvatRezultat(terminPretrage) {
  return fetch (
      `http://universities.hipolabs.com/search?country=${terminPretrage}`
    ) 
  .then(
    (rezultat) => {
      return rezultat.json();
    }
  );
}