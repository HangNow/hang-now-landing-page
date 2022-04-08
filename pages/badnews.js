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
          <a className="txt-862">
            Hang<span className="txt-8622">Now!</span>
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
              Malheureusement, ce site est un prototype et n'est pas encore terminé,
              il ne sert que de test pour l'instant. Nous espérons que tu trouveras
              ce concept de site utile, n'hésite pas à nous faire part de tes
              remarques !
            </Typography>
            <Typography>
              Mais on t'invite à venir dans nous rencontrer ici ⬇️
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
                <Typography>25 avril au Bulldog à Lausanne FLON</Typography>
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
            text="Envoie nous un mail !"
          />
          <LinkButton
            icon={<FacebookIcon sx={{ color: common.white }} />}
            link="https://www.facebook.com/profile.php?id=100080164084620"
            text="Ajoute nous sur Facebook !"
          />
          <LinkButton
            icon={<TwitterIcon sx={{ color: common.white }} />}
            link="https://twitter.com/HangNowApp"
            text="Follow nous sur Twitter !"
          />
        </Box>
      </Box>
    </div>
  );
}
