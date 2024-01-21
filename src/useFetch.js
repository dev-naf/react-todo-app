import { useEffect,useState } from "react";

const useFetch = (url) => {
    // deklarasi state
    const [data, setData] = useState(null)    
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(true)

    // useEffect akan berjalan jika data berubah
    useEffect(() => {
        // Proses set Timeout
        setTimeout(() => {
            fetch(url)
            .then(res =>{
                if(!res.ok) throw Error(`Server said ${res.status} Error :-(`)
                return res.json()
            })
            .then(data => {
                setData(data)
                setPending(false)
            })
            .catch(err => {
                setError(err.message)
            }) 
        },1000)
    },[url])
    return {data, error, pending}
} 
export default useFetch;