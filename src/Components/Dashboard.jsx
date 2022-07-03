import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/action";

const Dashboard = () => {
  const { users, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState();
  const [query, setQuery] = React.useState("");

  const search = () => {
    dispatch(getUsers(query, page));
  };

  React.useEffect(() => {
    search();
  }, [page]);

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Enter User Name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => search()}>SEARCH</button>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "20px",
          gap: "20px"
        }}
      >
        {users?.map((item) => (
          <div>
            <h4>{item.login}</h4>
            <img src={item.avatar_url} alt="avatar" />
            <a href={item.html_url}>PROFILE</a>
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREV
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
        NEXT
      </button>
    </div>
  );
};

export default Dashboard;
