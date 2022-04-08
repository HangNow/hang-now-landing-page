import { TextField, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();

  const onClickTitle = () => {
    router.push('/');
  };

  return (
    <div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
      <div className="header flex-row-vcenter-hsb">
        <p className="txt-862" onClick={onClickTitle}>
          Hang<span className="txt-8622">Now!</span>
        </p>
      </div>
      <Typography variant="h4">Inscris toi!</Typography>
      <Typography sx={{ mb: 2 }}>
        Afin de rentrer en communication avec l'organisateur, nous avons besoin de
        tes coordonnées.
      </Typography>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="badnews"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField
          color="primary"
          fullWidth
          id="name"
          name="name"
          type="text"
          label="Prénom"
        />
        <TextField fullWidth id="email" name="email" type="text" label="Email" />
        <button
          type="submit"
          className="button-join flex-row-vcenter-hcenter clip-contents"
        >
          <Typography component="span" color="white">
            Rejoins l’evenement
          </Typography>
        </button>
      </form>
    </div>
  );
}
