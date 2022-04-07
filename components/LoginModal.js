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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Dialog>
  );
}
