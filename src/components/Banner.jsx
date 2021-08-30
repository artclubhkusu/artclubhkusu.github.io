import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

export default function Banner({header, subheader, imgName}) {
  const [bannerUrl, setBannerUrl] = useState();

  useEffect(() => {
    if (!bannerUrl && imgName) {
      firebase.fetchImage(`banners/${imgName}`).then((url) =>{
        setBannerUrl(url);
      }).catch(err => {
        console.error(err);
      })
    }
  })

  return (
    <React.Fragment>
      {/* Page Header */}
      <header className="masthead" style={{backgroundImage: `url(${bannerUrl})`}}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>{header}</h1>
                <span className="subheading">{subheader}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
