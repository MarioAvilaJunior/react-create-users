import React from "react";
import { UserForm, UsersList } from "./components";
import { Box } from "@mui/material";

export interface User {
  id: string;
  name: string;
  age: number;
}

function App() {
  const [usersList, setUsersList] = React.useState<User[]>([]);

  const addUser = (user: User) => {
    const newUsersList = [...usersList];
    newUsersList.push(user);
    setUsersList(newUsersList);
  };

  return (
    <Box>
      <UserForm onSubmit={addUser} />
      <UsersList usersList={usersList} />
    </Box>
  );
}

export default App;
