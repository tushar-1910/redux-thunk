import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = {
      name: name,
      email: email,
      password: password,
      username: username,
      mobile: mobile,
      description: desc
    };
    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      let result = await res.json();
      setError(result.error);
      console.log(error);
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div>
      {!error ? (
        <div>
          <h1>REGISTER</h1>
          <form onSubmit={handleLogin}>
            <label>
              Name :{" "}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />
            <br />{" "}
            <label>
              Email :{" "}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Password :{" "}
              <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              Username :{" "}
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <label>
              mobile :{" "}
              <input
                type="number"
                placeholder="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </label>
            <br />
            <br />{" "}
            <label>
              Description :{" "}
              <input
                type="text"
                placeholder="Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              />
            </label>
            <br />
            <br />
            <input type="submit" value="REGISTER" />
          </form>

        </div>
      ) : (
        <h1>Registration failed, user already exists</h1>
      )}
    </div>
  );
};

export default Login;
