import "./style.css";
import { useState } from "react";


  export default function App() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = async () => {
      console.log(
        "Submitted",
        `First Name: ${firstname} :: Last Name: ${lastname}
        username:${username}
        city:${city}
        phone:${phone}
        email:${email}`
      );
      // const payload = {
      //   firstname: firstname,
      //   lastname: lastname,
      //  username: username,
      //   city: city,
      //   phone: phone,
      //   email: email
      // };
      // await axios.post("", payload).then((res) => {
      //   console.log("response:", res);
      // });
      alert("submitted");
    };

    return (
      <div className="warpper fl">
        <div className="main">
          <div className="form fl">
            <form method="POST">
              <div className="head">Register New Account</div>
              <div className="first_last">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="pass"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="pass"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="User Name"
                  className="name-inp"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="name-inp"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="name-inp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="name-inp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
  
              <div className="submit">
                <input
                  type="submit"
                  name="sb"
                  value="Create Account"
                  className="sub"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

