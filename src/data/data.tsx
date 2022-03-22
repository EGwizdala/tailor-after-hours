import React from 'react'

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


export async function getCategories(url) {
  
    try {
        const response = await fetch(url);
        const components = await response.json()
        return components;
    } catch (error) {
        console.log(error);
    }
}

