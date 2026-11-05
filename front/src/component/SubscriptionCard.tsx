function SubscriptionCard(props: {
    id: number;
    name: string;
    price: number;
    category: string;
    onDelete: (id: number) => void;
}) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.price} $</p>
            <span>{props.category}</span>
            <button type="button" onClick={()=>props.onDelete(props.id)}>Удалить</button>
        </div>
    );
}

export default SubscriptionCard;