import { useEffect, useState } from "react";
import SubscriptionCard from "../component/SubscriptionCard";
import "./Dashboard.css";

type Category = "Education" | "Video" | "Music";
type Status = "Active" | "NotActive" | "Suspended";

interface Subscription {
  id: number;
  name: string;
  price: number;
  category: Category;
  status: Status;
}

function Dashboard() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState<Category | "All">("All");

  const [subscriptions, setSubscriptions] = useState<Subscription[]>([
    {
      id: 1,
      name: "Netflix",
      price: 15,
      category: "Education",
      status: "Active",
    },
    {
      id: 2,
      name: "Spotify",
      price: 10,
      category: "Music",
      status: "Suspended",
    },
    { id: 3, name: "YouTube", price: 12, category: "Video", status: "Active" },
  ]);

  const totalSubscriptions = subscriptions.length;
  const monthlySpending = subscriptions.reduce((acc, s) => {
    acc += s.price;
    return acc;
  }, 0);
  const activeSubscriptions = subscriptions.filter(
    (s) => s.status === "Active",
  ).length;

  const addSubscripption = () => {
    const data: Subscription = {
      id: 4,
      name: "Disney+",
      price: 8,
      category: "Video",
      status: "Not active",
    };
    setSubscriptions((prev) => [...prev, data]);
  };

  const deleteSubscription = (id: number) => {
    setSubscriptions((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredSubscriptions = subscriptions
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => {
      if (select === "All") {
        return true;
      }
      return p.category === select;
    });

  useEffect(() => {
    localStorage.setItem("subscription", JSON.stringify(subscriptions));
  }, [subscriptions]);

  return (
    <main className="dashboard-page">
      <section className="dashboard-statistic">
        <p>Подписок: {totalSubscriptions}</p>
        <p>Общая стоимость: {monthlySpending}</p>
        <p>Активных подписок: {activeSubscriptions}</p>
      </section>
      <div className="dashboard-search">
        <input
          type="text"
          placeholder="Поиск подписки..."
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
        ></input>
        <select
          name="category"
          id="category"
          value={select}
          onChange={(event) =>
            setSelect(event.target.value as Category | "All")
          }
        >
          <option value="All">Все категории</option>
          <option value="Music">Музыка</option>
          <option value="Video">Видео</option>
          <option value="Education">Обучение</option>
        </select>
      </div>
      <section className="dashboard-subscriptions">
        <div>
          {filteredSubscriptions.map((s) => (
            <SubscriptionCard
              key={s.id}
              id={s.id}
              name={s.name}
              price={s.price}
              category={s.category}
              status={s.status}
              onDelete={deleteSubscription}
            />
          ))}
        </div>
        <button type="button" onClick={addSubscripption}>
          Добавить подписку
        </button>
      </section>
    </main>
  );
}
export default Dashboard;
