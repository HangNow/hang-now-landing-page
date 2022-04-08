import { Typography } from '@mui/material';
import mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BadNewsModal } from '../components/BadNewsModal';
import { LoginModal } from '../components/LoginModal';
import Peoples from '../components/Peoples';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [openBadNews, setOpenBadNews] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    mixpanel.track('Open page');
  }, []);

  const onClickEvent = () => {
    mixpanel.track('Open event');
    router.push('/contact');
  };

  return (
    <div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
      <div className="header flex-row-vcenter-hsb">
        <p className="txt-862">
          Hang<span className="txt-8622">Now!</span>
        </p>
        <div className="frame-49220 flex-row-vcenter-hcenter">
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <span className="txt-860">Login</span>
          </button>
        </div>
      </div>
      <div className="frame-49223 flex-col-hstart-vstart">
        <Typography variant="h4">
          Fais des rencontres sans prises de tête en LIVE
        </Typography>
        <div id="summary" className="frame-49221 flex-row-vstart-hstart">
          <ul className="txt-834">
            <Typography component="li">
              Rencontre rapidement des personnes autour de toi
            </Typography>
            <Typography component="li">
              Créer des évènements et laisse les gens venir à toi
            </Typography>
            <Typography component="li">
              Rejoins des évènements en toute simplicité
            </Typography>
            <Typography component="li">
              Trouve des gens aux mêmes centres d'intérêts que toi
            </Typography>
          </ul>
          <img
            src="/women-and-men.svg"
            alt="Women and men"
            height="230px"
            className="freepik-characters-inject-37"
          />
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <Typography variant="h5">Rejoins nous pour boire une bière! 🍻</Typography>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="/map.svg"
                alt="Map icon"
                className="location-pin-24-outline"
              />
              <Typography>235m de vous</Typography>
            </div>
            <Peoples
              pictures={[
                'https://i.imgur.com/DWcrWXJ.jpeg',
                'https://i.imgur.com/lPPHdY0.jpeg',
              ]}
              max={7}
              current={2}
            />
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
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <Typography component="span" color="white">
              Rejoins l’evenement
            </Typography>
          </button>
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label-1">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <Typography variant="h5">Partie de pétanque</Typography>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="/map.svg"
                alt="Map icon"
                className="location-pin-24-outline"
              />
              <Typography>200m de vous</Typography>
            </div>
            <Peoples
              pictures={[
                'https://i.imgur.com/Uk63uxt.jpeg',
                'https://i.imgur.com/shn7hbp.jpeg',
              ]}
              max={8}
              current={4}
            />
          </div>
          <div className="tags flex-row-vcenter-hcenter">
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">🏃‍♂️ Sport</p>
            </div>
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">👓 Chill</p>
            </div>
          </div>
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <Typography component="span" color="white">
              Rejoins l’evenement
            </Typography>
          </button>
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label-2">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <Typography variant="h5">
            Discussion business et immobilier dans un café
          </Typography>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="/map.svg"
                alt="Map icon"
                className="location-pin-24-outline"
              />
              <Typography>300m de vous</Typography>
            </div>
            <Peoples
              pictures={[
                'https://mui.com/static/images/avatar/1.jpg',
                'https://mui.com/static/images/avatar/2.jpg',
              ]}
              max={5}
              current={3}
            />
          </div>
          <div className="tags flex-row-vcenter-hcenter">
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">💸 Business</p>
            </div>
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">☕ Cafe</p>
            </div>
          </div>
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <Typography component="span" color="white">
              Rejoins l’evenement
            </Typography>
          </button>
        </div>
      </div>
      <div className="frame-49222 flex-col-hcenter-vstart">
        <Typography sx={{ mb: 2 }}>Fait avec amour par l’équipe HangNow!</Typography>
        <img
          src="/men-and-men.svg"
          alt="Men and men"
          className="freepik-characters-inject-49"
        />
        <Typography>©HangNow 2022</Typography>
      </div>
      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => setOpenBadNews(true)}
      />
      <BadNewsModal open={openBadNews} onClose={() => setOpenBadNews(false)} />
    </div>
  );
}
