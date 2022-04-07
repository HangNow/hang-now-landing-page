import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from '@mui/system';

export function BadNewsModal({ open, onClose }) {
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>
				<p className="txt-862">
					Hang<span className="txt-8622">Now!</span>
				</p>
				Merci de ta participation !
			</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Malheuresement, ce site est un prototype et n'est pas encore terminé, il ne
					sert que de test pour l'instant. Nous espérons que tu trouveras ce concept
					de site utile, n'hésite pas à nous faire part de tes remarques !
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						paddingTop={2}
					>
						<Box display="flex" gap={1}>
							<MailIcon /> <span>apphangnow@gmail.com</span>
						</Box>
						<Box display="flex" gap={1}>
							<TwitterIcon />
							<span>
								<a href="https://twitter.com/HangNowApp">@HangNowApp</a>
							</span>
						</Box>
					</Box>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={onClose} variant="outlined">
					Fermer
				</Button>
			</DialogActions>
		</Dialog>
	);
}
