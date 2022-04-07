import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import mixpanel from 'mixpanel-browser';

export function LoginModal({ open, onClose, onSuccess }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Connect toi!</DialogTitle>
      <form name="email" action="/success" method="POST" data-netlify="true" netlify>
        <input type="hidden" name="form-name" value="email" />

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
            name="email"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            Fermer
          </Button>
          <Button
            onClick={() => {
              mixpanel.track('Sign up');
              onClose();
            }}
            type="submit"
            autoFocus
          >
            Envoyer
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
