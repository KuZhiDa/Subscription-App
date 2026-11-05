import { useEffect, useState } from "react"
import SubscriptionCard from "../component/SubscriptionCard"

function Dashboard(){
    const [search, setSearch] = useState('')

    const [subscriptions, setSubscriptions] = useState([{ id: 1, name: 'Netflix', price: 15, category: 'Entertainment' },
    { id: 2, name: 'Spotify', price: 10, category: 'Music' },
    { id: 3, name: 'YouTube', price: 12, category: 'Video' },])
    
    const addSubscripption = () =>{
        const data = {id: 4,name: 'Disney+',price: 8, category: 'Entertainment'}
        setSubscriptions(prev=>[...prev, data])
    }

    const deleteSubscription = (id: number) =>{
        setSubscriptions(prev=>prev.filter((p)=>p.id !== id))
    }

    const filteredSubscriptions = subscriptions.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))
    
    useEffect(()=>{
        localStorage.setItem("subscription", JSON.stringify(subscriptions))
    }, [subscriptions])

    return (<>
        <input type="text" placeholder="Поиск подписки..." value={search} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setSearch(event.target.value)}></input>
        {filteredSubscriptions.map((s)=><SubscriptionCard key={s.id} id={s.id} name={s.name} price= {s.price} category={s.category} onDelete={deleteSubscription}/>)}
        <button type="button" onClick={addSubscripption}>Добавить подписку</button>
    </>)
}
export default Dashboard