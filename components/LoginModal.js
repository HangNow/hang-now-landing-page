import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

export function LoginModal({ open, onClose, onSuccess }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Connect toi!</DialogTitle>
      <form
        // set no redirection to form
        action="#"
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          onSuccess();

          return false;
        }}
        name="email-login"
        netlify
        data-netlify="true"
      >
        <DialogContent>
          <DialogContentText>
            Utilise ton email pour te connecter et pouvoir entrer en communication
            avec la personne qui organise l'évènement.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Fermer
          </Button>
          <Button type="submit" autoFocus onClick={onClose}>
            Envoyer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
