import { invoke } from '@tauri-apps/api'

import { Select } from "ui/components/select";
import { Button } from "ui/components/button";
import { InputText } from "ui/components/input-text";
import styles from "./home.module.scss";

const Home = () => {
  const requestMethods = [
    { label: "GET", value: "get" },
    { label: "POST", value: "post" },
    { label: "PATCH", value: "patch" },
    { label: "DELETE", value: "delete" },
  ];

  const handleSend = () => {
    invoke('hello_world', { name: 'Ashish' })
      .then((response) => console.log(response));
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["urlbar"]}>
        <Select defaultValue={requestMethods[0].value}>
          {requestMethods.map((method, index) => (
            <option value={method.value} key={index}>{method.label}</option>
          ))}
        </Select>
        <InputText
          className={styles["urlbar__input"]}
          placeholder="https://example.com"
        ></InputText>
        <Button varient="primary" onClick={handleSend}>Send</Button>
      </div>
      <div className={styles["response-wrapper"]}>two</div>
    </div>
  );
};

export { Home };
