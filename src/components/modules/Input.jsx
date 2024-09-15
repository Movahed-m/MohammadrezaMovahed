import { useState } from "react";
import cities from "../../constants/cities";

import styles from "../../styles/Input.module.css";

const Input = () => {
  const [value, setValue] = useState("");
  const [hint, setHint] = useState(null);

  const handleChange = (event) => {
    const userValue = event.target.value;
    setValue(userValue);
    const hint = cities.filter((city) => city.startsWith(userValue));

    const random = Math.floor(Math.random() * hint.length);

    userValue === "" ? setHint(null) : setHint(hint[random]);
  };

  return (
    <div className={styles.input}>
      <label htmlFor="input">City: </label>
      <input
        type="text"
        id="input"
        placeholder="Search for city..."
        onChange={handleChange}
        value={value}
      ></input>
      <p>{hint}</p>
    </div>
  );
};

export default Input;
