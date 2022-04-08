import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export function LinkButton({ icon, link, text }) {
	return (
		<button
			onClick={() => {
				window.open(link);
			}}
			className="button-link flex-row-vcenter-hcenter clip-contents"
		>
			<Box display="flex" gap={1}>
				<>{icon}</>
				<Typography component="span" color="white">
					{text}
				</Typography>
			</Box>
		</button>
	);
}
