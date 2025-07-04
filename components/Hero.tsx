
"use client";

import { useEffect, useState } from "react";

export default function Hero({ hero  }) {

  // console.log(hero, 'this is hero')

  return (
    <section className="section home-b-hero">
      <div className="w-layout-grid home-b-hero-halves">
        <div
          className="home-b-hero-right"
          style={{ backgroundColor: hero.bgColor?.color_name }}
        >
          <div className="headline-home-b">
            <div className="hero-home-b-top-tile">
              <div className="label">{hero.label}</div>
              <div className="home-b-heading">
                <h1 className="text-h0">{hero.headline}</h1>
              </div>
              <p className="text-big">{hero.subtext}</p>
              <div className="home-b-button-wrap">
                <a
                  href={hero.button?.link}
                  className="cta-main accent w-inline-block"
                >
                  <div className="button-animation-hide">
                    <div className="button-animation-wrap">
                      <div className="button-content-tile">
                        <div>{hero.button?.text}</div>
                        <div className="button-arrow w-embed">→</div>
                      </div>
                      <div className="button-content-tile">
                        <div>{hero.button?.text}</div>
                        <div className="button-arrow w-embed">→</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="rating">
              <div className="rating-icon-wrap">⭐</div>
              <div className="text-body">{hero.rating?.text}</div>
            </div>
          </div>
        </div>

        <div className="home-b-hero-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          >
            <source src={hero.backgroundVideoURL} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}