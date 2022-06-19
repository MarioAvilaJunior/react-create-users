import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { errorDialog } from "../UserForm";

interface IAlertDialogProps {
  handleClose: (close: boolean) => void;
  alertError: errorDialog;
}

const AlertDialog = (props: IAlertDialogProps) => {
  const handleClose = () => {
    props.handleClose(false);
  };

  const alertText =
    props.alertError === "empty name or age"
      ? "Please enter a valid name and age (non-empty values)."
      : "Please enter a positive number.";

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Invalid Input"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alertText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { AlertDialog };
