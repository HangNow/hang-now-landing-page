import mixpanel from 'mixpanel-browser';
import React, { useEffect } from 'react';
import { Modal } from '../components/Modal';

export default function Home() {
  useEffect(() => {
    mixpanel.track('Open page');
  }, []);

  const onClickEvent = () => {
    mixpanel.track('Open event');
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
        <p className="txt-283">Fais des rencontres sans prises de tête en LIVE</p>
        <div className="frame-49221 flex-row-vstart-hstart">
          <ul className="txt-834">
            <li>Rencontre rapidement des personnes autour de toi</li>
            <li>Laisse les gens venir à toi</li>
            <li>Utilise une app simple et efficace</li>
            <li>Rejoins les gens qui sont comme toi</li>
          </ul>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-61%3A5513?alt=media&token=5fcdface-60bf-4f28-abb4-c6ab9998f1fd"
            alt="Not Found"
            className="freepik-characters-inject-37"
          />
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <p className="txt-8106 flex-hcenter">Rejoins nous pour boire une bière!</p>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-I61%3A5690%3B61%3A5734?alt=media&token=d4d4cd36-bc3e-4993-81b3-a4f09c241001"
                alt="Not Found"
                className="location-pin-24-outline"
              />
              <p className="txt-402 flex-hcenter">235m de vous</p>
            </div>
            <div className="peoplelist flex-row-vcenter-hstart">
              <p className="txt-298">5/9 </p>
              <div className="group-10">
                <p className="txt-437">+3</p>
              </div>
            </div>
          </div>
          <div className="tags flex-row-vcenter-hcenter">
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Chill</p>
            </div>
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Beer</p>
            </div>
            <div className="badge-4 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Bar</p>
            </div>
          </div>
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <span className="txt-860">Rejoins l’evenement</span>
          </button>
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label-1">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <p className="txt-8106 flex-hcenter">Descentes en luge</p>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-I61%3A5851%3B61%3A5734?alt=media&token=813d6af4-5787-483e-8354-02ffaa98a022"
                alt="Not Found"
                className="location-pin-24-outline"
              />
              <p className="txt-402 flex-hcenter">512m de vous</p>
            </div>
            <div className="peoplelist flex-row-vcenter-hstart">
              <p className="txt-298">10/13</p>
              <div className="group-101">
                <p className="txt-437">+8</p>
              </div>
            </div>
          </div>
          <div className="tags flex-row-vcenter-hcenter">
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Sport</p>
            </div>
            <div className="badge-4 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Snow</p>
            </div>
          </div>
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <span className="txt-860">Rejoins l’evenement</span>
          </button>
        </div>
      </div>
      <div className="eventcard flex-col-hstart-vstart">
        <div className="image-with-label-2">
          <div className="badgetype flex-row-vstart-hstart"></div>
        </div>
        <div className="container flex-col-hstart-vstart">
          <p className="txt-8106 flex-hcenter">
            Discussion buisness et immobilier autour d’un petit café
          </p>
          <div className="infos flex-row-vcenter-hsb">
            <div className="frame-49220 flex-row-vcenter-hcenter">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-I61%3A5891%3B61%3A5734?alt=media&token=dba72ceb-acbf-4993-afe2-30360847e691"
                alt="Not Found"
                className="location-pin-24-outline"
              />
              <p className="txt-402 flex-hcenter">150m de vous</p>
            </div>
            <div className="peoplelist flex-row-vcenter-hstart">
              <p className="txt-298">4/6</p>
              <div className="group-102">
                <p className="txt-437">+2</p>
              </div>
            </div>
          </div>
          <div className="tags flex-row-vcenter-hcenter">
            <div className="badge-3 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Business</p>
            </div>
            <div className="badge-4 flex-row-vcenter-hcenter clip-contents">
              <p className="txt-121">Cafe</p>
            </div>
          </div>
          <button
            onClick={onClickEvent}
            className="button-join flex-row-vcenter-hcenter clip-contents"
          >
            <span className="txt-860">Rejoins l’evenement</span>
          </button>
        </div>
      </div>
      <div className="frame-49222 flex-col-hcenter-vstart">
        <p className="txt-196 flex-hcenter">Fait avec amour par l’équipe HangNow!</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/zc52p61vvi-61%3A6557?alt=media&token=11605d79-4db7-4e01-a559-5f443ef666fe"
          alt="Not Found"
          className="freepik-characters-inject-49"
        />
        <p className="txt-420 flex-hcenter">@HangNow - 2022</p>
      </div>
      <Modal open={true} />
    </div>
  );
}
