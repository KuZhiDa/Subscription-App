import "./SubscriptionCard.css";

function SubscriptionCard(props: {
  id: number;
  name: string;
  price: number;
  category: string;
  status: string;
  onDelete: (id: number) => void;
}) {
  return (
    <article className="subscription-card">
      <header className="subscription-header">
        <div className="subscription-icon">{props.name.charAt(0)}</div>
        <div className="subscription-main-info">
          <h3>{props.name}</h3>
          <span>{props.category}</span>
        </div>
        <p
          className={`subscription-status subscription-status-${props.status}`}
        >
          {props.status}
        </p>
      </header>
      <button type="button" onClick={() => props.onDelete(props.id)}>
        Удалить
      </button>
    </article>
  );
}

export default SubscriptionCard;
