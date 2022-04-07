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
      <DialogTitle>
        <p className="txt-862">
          Hang<span className="txt-8622">Now!</span>
        </p>
        <b>Inscris toi!</b>
      </DialogTitle>
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
            label="Email"
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
