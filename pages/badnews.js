import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

export default function badnews() {
	const router = useRouter();
	return (
		<div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap={2}
			>
				<p className="txt-862">
					Hang<span className="txt-8622">Now!</span>
				</p>
				<Typography variant="h4">Désolé, ce n'est qu'un prototype !</Typography>
				<img
					src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-61%3A6557?alt=media&token=11605d79-4db7-4e01-a559-5f443ef666fe"
					alt="Not Found"
					className="freepik-characters-inject-49"
				/>
				Malheureusement, ce site est un prototype et n'est pas encore terminé, il ne
				sert que de test pour l'instant. Nous espérons que tu trouveras ce concept de
				site utile, n'hésite pas à nous faire part de tes remarques !
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					paddingTop={1}
				>
					<Box display="flex" gap={1}>
						<MailIcon />
						<span>
							<a href="mailto:apphangnow@gmail.com">apphangnow@gmail.com</a>
						</span>
					</Box>
					<Box display="flex" gap={1}>
						<FacebookIcon />
						<span>
							<a href="https://www.facebook.com/profile.php?id=100080164084620">
								HangNow App
							</a>
						</span>
					</Box>

					<Box display="flex" gap={1}>
						<TwitterIcon />
						<span>
							<a href="https://twitter.com/HangNowApp">@HangNowApp</a>
						</span>
					</Box>
				</Box>
				{/* <button
					onClick={() => {
						router.push('/');
					}}
					className="button-join flex-row-vcenter-hcenter clip-contents"
				>
					<span className="txt-860">Retourner à la maquette !</span>
				</button> */}
			</Box>
		</div>
	);
}
