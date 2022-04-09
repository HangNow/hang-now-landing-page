import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Typography } from '@mui/material';
import { LinkButton } from '../components/LinkButton';
import { common } from '@mui/material/colors';
import Link from 'next/link';

export default function badnews() {
  return (
    <div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Link href="/" passHref>
          <a>
            <p className="txt-862">
              Hang<span className="txt-8622">Now!</span>
            </p>
          </a>
        </Link>
        <Typography variant="h4">Désolé, ce n'est qu'un prototype !</Typography>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box>
            <Typography>
              Malheureusement, il ne s'agit que d'un test pour le moment. On espère
              néanmoins que le concept te plait, n'hésite pas à nous faire part de
              ton avis/remarques par mail ou sur les réseaux ! 😉
            </Typography>
            <Typography>
              En attendant, on t'invite tout de même à venir nous rencontrer ici ⬇️
            </Typography>
          </Box>
          <img src="/women-and-men.svg" alt="Not Found" height="230px" />
        </Box>
        <div className="eventcard flex-col-hstart-vstart">
          <div className="image-with-label">
            <div className="badgetype flex-row-vstart-hstart"></div>
          </div>
          <div className="container flex-col-hstart-vstart">
            <Typography variant="h5">
              Pour te consoler, viens boire une bière avec nous ! 🍻
            </Typography>
            <div className="infos flex-row-vcenter-hsb">
              <div className="frame-49220 flex-row-vcenter-hcenter">
                <img
                  src="/map.svg"
                  alt="Map icon"
                  className="location-pin-24-outline"
                />
                <Typography>12 avril au carré à Vevey</Typography>
              </div>
            </div>
            <div className="tags flex-row-vcenter-hcenter">
              <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
                <p className="txt-121">👓 Chill</p>
              </div>
              <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
                <p className="txt-121">🍺 Beer</p>
              </div>
              <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
                <p className="txt-121">🍸 Bar</p>
              </div>
            </div>
            <form
              method="POST"
              action="success"
              className="contact-form"
              name="join-event"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="join-event" />
              <input type="hidden" name="from" value="badnews" />
              <button
                type="submit"
                className="button-join flex-row-vcenter-hcenter clip-contents"
              >
                <Typography component="span" color="white">
                  Je viens
                </Typography>
              </button>
            </form>
          </div>
        </div>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingTop={1}
          gap={1}
          width="100%"
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
      </Box>
    </div>
  );
}
