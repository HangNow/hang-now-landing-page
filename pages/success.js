import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
import { common } from '@mui/material/colors';
import { Box } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';
import { LinkButton } from '../components/LinkButton';

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio | Success!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
        <Link href="/" passHref>
          <a>
            <p className="txt-862">
              Hang<span className="txt-8622">Now!</span>
            </p>
          </a>
        </Link>
        <Box
          sx={{
            background: '#00FE98',
            padding: 2,
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            marginTop: 2,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9.79289 15.7071L6.79289 12.7071C6.40237 12.3166 6.40237 11.6834 6.79289 11.2929C7.18342 10.9024 7.81658 10.9024 8.20711 11.2929L10.5 13.5999L15.2929 8.79289C15.6834 8.40237 16.3166 8.40237 16.7071 8.79289C17.0976 9.18342 17.0976 9.81658 16.7071 10.2071L11.2071 15.7071C10.8166 16.0976 10.1834 16.0976 9.79289 15.7071Z"
              fill="black"
            />
          </svg>

          <Typography>Merci ! On a confirmé ta venue.</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingTop={1}
          gap={1}
          width="100%"
          mt={4}
        >
          <LinkButton
            icon={<MailIcon sx={{ color: common.white }} />}
            link="mailto:apphangnow@gmail.com"
            text="Nous contacter par mail"
          />
          <LinkButton
            icon={<FacebookIcon sx={{ color: common.white }} />}
            link="https://www.facebook.com/HangNow-106397958700765"
            text="Nous suivre sur Facebook"
          />
          <LinkButton
            icon={<TwitterIcon sx={{ color: common.white }} />}
            link="https://twitter.com/HangNowApp"
            text="Nous follow sur Twitter"
          />
        </Box>
      </div>
    </div>
  );
}
