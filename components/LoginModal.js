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
			<DialogTitle>
				<p className="txt-862">
					Hang<span className="txt-8622">Now!</span>
				</p>
				<b>Inscris toi!</b>
			</DialogTitle>
			<form
				// set no redirection to form
				action="#"
				method="POST"
				onSubmit={e => {
					e.preventDefault();

					onSuccess();

					return false;
				}}
				name="email-login"
				netlify
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
						label="Adresse Mail"
						type="email"
						fullWidth
						variant="outlined"
					/>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={onClose} variant="outlined">
						Fermer
					</Button>
					<Button type="submit" autoFocus onClick={onClose} variant="outlined">
						Envoyer
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}
