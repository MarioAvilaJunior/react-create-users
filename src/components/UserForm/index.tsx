import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IUser } from "../../App";
import { v4 as uuidv4 } from "uuid";
import { AlertDialog } from "../AlertDialog";

export type errorDialog = "empty name or age" | "age lower than one";

const UserForm = (props: { onSubmit: (user: IUser) => void }) => {
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [invalidInput, setInvalidInput] = React.useState<boolean>(false);
  const [alertError, setAlertError] =
    React.useState<errorDialog>("empty name or age");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (parseInt(age, 10) < 1) {
      setAlertError("age lower than one");
      setInvalidInput(true);
      return;
    }
    if (name.trim().length > 0 && age.trim().length > 0) {
      const user: IUser = { id: uuidv4(), name: name, age: parseInt(age, 10) };
      props.onSubmit(user);
      setName("");
      setAge("");
    } else {
      setAlertError("empty name or age");
      setInvalidInput(true);
    }
  };

  const handleClose = () => {
    setInvalidInput(false);
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
        inputProps={{ inputMode: "numeric", pattern: "-?[0-9]*" }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
      {invalidInput && (
        <>
          <AlertDialog handleClose={handleClose} alertError={alertError} />
        </>
      )}
    </Box>
  );
};

export { UserForm };
