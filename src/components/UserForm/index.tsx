import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IUser } from "../../App";
import { v4 as uuidv4 } from "uuid";
import { AlertDialog } from "../AlertDialog";

export type errorDialog = "empty name or age" | "negative age";

const UserForm = (props: { onSubmit: (user: IUser) => void }) => {
  const [name, setName] = React.useState<string>("Mario");
  const [age, setAge] = React.useState<number>(27);
  const [ageString, setAgeString] = React.useState<string>("");
  const [invalidInput, setInvalidInput] = React.useState<boolean>(false);
  const [alertError, setAlertError] =
    React.useState<errorDialog>("empty name or age");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeString(event.target.value);
    const updatedAge = parseInt(event.target.value, 10);
    if (updatedAge) {
      setAge(updatedAge);
    } else {
      setAge(0);
    }
  };

  const handleFormSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (age < 0) {
      setAlertError("negative age");
      setInvalidInput(true);
      return;
    }
    if (name && age) {
      const user: IUser = { id: uuidv4(), name: name, age: age };
      props.onSubmit(user);
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
        value={ageString}
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
