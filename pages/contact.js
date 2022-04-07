import { TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className="iphone-11-pro-x-1 flex-col-hstart-vstart clip-contents">
      <div className="header flex-row-vcenter-hsb">
        <p className="txt-862">
          Hang<span className="txt-8622">Now!</span>
        </p>
        <div className="frame-49220 flex-row-vcenter-hcenter">
          <button className="button-join flex-row-vcenter-hcenter clip-contents">
            <span className="txt-860">Login</span>
          </button>
        </div>
      </div>
      <Typography sx={{ mb: 2 }} variant="h4">
        Inscrit toi!
      </Typography>
      <form
        className="contact-form"
        name="contact"
        method="POST"
        action="badnews"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <TextField fullWidth id="name" name="name" type="text" label="Prénom" />
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
