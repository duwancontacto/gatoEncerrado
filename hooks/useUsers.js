import React, {useState} from "react";

import storage from "../utils/storage";

export default function useUsers(navigation) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setError(false);
    setInput(e);
  };

  const validateFormUser = () => {
    setError(false);

    if (input.trim() === "") {
      setError("El nombre de usuario no puede estar vacío");
      return true;
    } else return false;
  };

  const loginUser = () => {
    if (validateFormUser()) return;

    let dataUser = {
      username: input,
      score: [],
    };

    storage
      .load({
        key: "users",
        id: "1",
      })
      .then((ret) => {
        let tempUsers = ret;
        tempUsers.push(dataUser);

        let findUsername = ret.find((user) => user.username === input);

        if (findUsername) return navigation.navigate("Game");

        storage.save({
          key: "users",
          id: "1",
          data: tempUsers,
          expires: null,
        });

        navigation.navigate("Game");
      })
      .catch((err) => {
        storage.save({
          key: "users",
          id: "1",
          data: [dataUser],
          expires: null,
        });
        navigation.navigate("Game");
      });
  };
  const registerUser = () => {
    if (validateFormUser()) return;

    storage
      .load({
        key: "users",
        id: "1",
      })
      .then((ret) => {
        let findUsername = ret.find((user) => user.username === input);
        if (!findUsername) return setError("Este nombre de usuario no existe");

        navigation.navigate("Menu");
      })
      .catch((err) => {
        setError("Este nombre de usuario no existe");
      });
  };

  return {input, onChange, registerUser, error, loginUser};
}
