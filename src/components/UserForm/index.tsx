import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { User } from "../../App";
import { v4 as uuidv4 } from "uuid";

const UserForm = (props: { onSubmit: (user: User) => void }) => {
  const [name, setName] = React.useState<string>("Mario");
  const [age, setAge] = React.useState<number>(27);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedAge = parseInt(event.target.value);
    updatedAge ? setAge(updatedAge) : setAge(0);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && age) {
      const user: User = { id: uuidv4(), name: name, age: age };
      props.onSubmit(user);
    }
  };
  return (
    <Box
      component="form"
      justifyContent="center"
      flexDirection="column"
      onSubmit={handleFormSubmit}
    >
      <TextField
        id="user-name"
        label="Name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="user-age"
        label="Age (Years)"
        value={age}
        onChange={handleAgeChange}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export { UserForm };
