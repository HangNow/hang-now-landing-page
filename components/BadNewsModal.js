import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

export function BadNewsModal({ open, onClose }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>C'était fake!</DialogTitle>
      <DialogContent>
        <DialogContentText>C'était fake!!!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
