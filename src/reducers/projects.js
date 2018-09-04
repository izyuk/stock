export default function () {
    return 1
}
//
// export default async function getMoviesFromApi() {
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         let responseJson = await response.json();
//         return responseJson.movies;
//     } catch(error) {
//         console.error(error);
//     }
// }