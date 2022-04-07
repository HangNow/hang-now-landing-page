import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

export function Modal({ open, onClose }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <DialogContent>
        <TextField id="firstname" label="Prénom" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
