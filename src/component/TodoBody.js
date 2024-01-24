import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import Header from "./Header";
import TodoList from "./TodoList";
import { Button } from "react-bootstrap";
import { ArrowClockwise } from "react-bootstrap-icons";

const TodoBody = () => {
  const title = "Todo-List-Dummy";
  const subtitle =
    "Aplikasi react-js + backend by ExpressJS untuk meng8erjakan daftar pekerjaan ini props";

  // Asli
  // const { data, error, pending } = useFetch("http://localhost:3001/todo");

  // [Purposes Test]

  // [! State, Test Purposes]
  const [data, setData] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(true);

  // [! Function refresh, Testing Purposes ]
  const refreshData = () => {
    fetch("http://localhost:3001/todo")
      .then((res) => {
        if (!res.ok) throw Error(`Server said ${res.status} Error :-(`);
        return res.json();

      })
      .then((Data) => {
        setData(Data.newData);
        setPending(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // [! Komponen Update sekali saat akses , Testing Purposes]
  useEffect(() => {
    // [! refresh interval, testing Purposes]
    const refreshInterval = setInterval(() => {
      refreshData();
    }, 1000);

    // Clean komponen
    return () => clearInterval(refreshData)
  }, []);

  return (
    <div className="TodoBody  p-4">
      <p>{pending}</p>
      {/* Header */}
      <Header title={title} subtitle={subtitle} />
      {/* Pending Process */}
      {pending && (
        <div className="mt-5 text-center fw-light">Is Pending....</div>
      )}
      {/* List kompinen todo belum selesai*/}
      {data && <TodoList title={"Belum Selesai"} todo={data} status="0" />}
      {/* List Komponen todo selesai */}
      {data && <TodoList title={"Selesai"} todo={data} status="1" />}
    </div>
  );
};
export default TodoBody;
