import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Typography } from '@mui/material';

export function SocialNetworksFooter() {
	return (
		<Box display="flex" gap={1} justifyContent="center" alignItems="center">
			<Typography component="span" color="gray" fontStyle="italic" fontSize="14px">
				Donne nous un feedback !
			</Typography>

			<Box display="flex" gap={1}>
				<a href="mailto:apphangnow@gmail.com">
					<MailIcon />
				</a>
				<a href="https://twitter.com/HangNowApp">
					<TwitterIcon />
				</a>
				<a href="https://www.facebook.com/HangNow-106397958700765">
					<FacebookIcon />
				</a>
			</Box>
		</Box>
	);
}
