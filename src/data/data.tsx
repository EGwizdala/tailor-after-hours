import React from 'react'
import ReactDOM from 'react-dom'


export function useFetch(url: any) {
    const [data, setData] = React.useState<any>()
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState<any>(null)
    React.useEffect(
      () => {
        if (!url) {
          return
        }
        fetch(url)
          .then(data => data.json())
          .then(data => {
            setData(data)
            setLoading(false)
          })
          .catch(err => {
            setError(err.toString())
            setLoading(false)
          })
      },
      [url],
    )
  
    return [loading, error, data]
  }


export async function getCategories() {
    const url = "http://mighty-beyond-31038.herokuapp.com/api/categories";
    try {
        const response = await fetch(url);
        const components = await response.json()
        console.log(components)
        return components;
    } catch (error) {
        console.log(error);
    }
}


const categoriesdata = getCategories()

// const printCategories = async () => {
//     const list = await categoriesdata;
//     return list;
//   };
  
// const categories1 = printCategories();

// const categories = [
//     {
//         "name": "Bluzki"
//     },
//     {
//         "name": "Bluzy"
//     },
//     {
//         "name": "Spodnie"
//     },
//     {
//         "name": "Spódnica"
//     },
//     {
//         "name": "Sukienki"
//     }
// ];
// const urls = categories.map(item => `http://mighty-beyond-31038.herokuapp.com/api/categories/${item.name.toLowerCase()}/items`);

// export async function getProducts() {
//     Promise.all([
//         urls.map(url =>
//             fetch(url)
//               .then(res => res.json())
//           )
//     ]).then(function (responses) {
//         // Get a JSON object from each of the responses
//         return Promise.all(responses.map(function (response) {
//             return response.json();
//         }));
//     }).then(function (data) {
//         // Log the data to the console
//         // You would do something with both sets of data here
//         console.log(data);
//     }).catch(function (error) {
//         // if there's an error, log it
//         console.log(error);
//     });
// }

