
import React, { useEffect, useState } from "react";

const AboutSection: React.FC = ({ about }) => {
    // const [aboutData, setAboutData] = useState(null);
        
    //       useEffect(() => {
    //         fetch(
    //           "https://payload-back.onrender.com/api/pages?where[slug][equals]=home&depth=2"
    //         )
    //           .then((res) => res.json())
    //           .then((data) => setAboutData(data.docs[0]));
    //       }, []);
        
    //       console.log(aboutData, 'this is data')
        
    //       if (!aboutData) return ;
        
    // const about = aboutData.layout.find((block) => block.blockType === "about");
    

  return (
    <section className="section home-b-features-section" id="about">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-home-b-features">
          <div className="text-h1">{about.sectionTopHeading}</div>
        </div>
        <div className="w-layout-grid home-b-features-halves">
          <div
            className="home-b-features-left"
            style={{ backgroundColor: about.bg_color }}
          >
            <div className="home-b-features-top-tile">
              <div className="label">{about.sectionName}</div>
              <div className="home-b-subheading">
                <h2 className="no-margins">{about.sectionTitle}</h2>
                <p className="text-big _404-heading">
                  {about.sectionDescription}
                </p>
              </div>
            </div>
            <div className="w-layout-grid home-b-features-grid">
              {about.attributes.map((at, index) => (
                <div className="home-b-feature-tile" key={index}>
                  <div className="icon-home-b-feature w-embed">
                    {/* <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_10002_225)">
                        <path
                          d="M20 6H22C23.103 6 24 5.103 24 4V2C24 0.897 23.103 0 22 0H20C18.897 0 18 0.897 18 2H6C6 0.897 5.103 0 4 0H2C0.897 0 0 0.897 0 2V4C0 5.103 0.897 6 2 6V18C0.897 18 0 18.897 0 20V22C0 23.103 0.897 24 2 24H4C5.103 24 6 23.103 6 22H18C18 23.103 18.897 24 20 24H22C23.103 24 24 23.103 24 22V20C24 18.897 23.103 18 22 18H20C19.763 18 19.536 18.042 19.325 18.118L15.513 14.306C15.816 13.955 16 13.499 16 13V11C16 10.501 15.816 10.045 15.513 9.694L19.325 5.882C19.536 5.958 19.763 6 20 6ZM19 2C19 1.449 19.449 1 20 1H22C22.551 1 23 1.449 23 2V4C23 4.551 22.551 5 22 5H20C19.449 5 19 4.551 19 4V2ZM1 4V2C1 1.449 1.449 1 2 1H4C4.551 1 5 1.449 5 2V4C5 4.551 4.551 5 4 5H2C1.449 5 1 4.551 1 4ZM5 22C5 22.551 4.551 23 4 23H2C1.449 23 1 22.551 1 22V20C1 19.449 1.449 19 2 19H4C4.551 19 5 19.449 5 20V22ZM6 21V20C6 18.897 5.103 18 4 18H3V6H4C5.103 6 6 5.103 6 4V3H18V4C18 4.499 18.184 4.955 18.487 5.306L14.675 9.118C14.464 9.042 14.237 9 14 9H12C10.897 9 10 9.897 10 11V13C10 14.103 10.897 15 12 15H14C14.237 15 14.464 14.958 14.675 14.882L18.487 18.694C18.184 19.045 18 19.501 18 20V21H6ZM15 11V13C15 13.551 14.551 14 14 14H12C11.449 14 11 13.551 11 13V11C11 10.449 11.449 10 12 10H14C14.551 10 15 10.449 15 11ZM22 19C22.551 19 23 19.449 23 20V22C23 22.551 22.551 23 22 23H20C19.449 23 19 22.551 19 22V20C19 19.449 19.449 19 20 19H22Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_10002_225">
                          <rect
                            width="100%"
                            height="100%"
                            fill="currentColor"
                          />
                        </clipPath>
                      </defs>
                    </svg> */}
                    <img src={at.image?.url} alt="" />
                  </div>
                  <div className="text-h6">{at.title}</div>
                </div>
              ))}
              {/* <div className="home-b-feature-tile">
                <div className="icon-home-b-feature w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_10002_1253)">
                      <path
                        d="M20.5 14H10V3.5C10 1.57 8.43 0 6.5 0H3.5C1.57 0 0 1.57 0 3.5V19.5C0 21.981 2.019 24 4.5 24H20.5C22.43 24 24 22.43 24 20.5V17.5C24 15.57 22.43 14 20.5 14ZM23 20.5C23 21.879 21.879 23 20.5 23H4.5C2.57 23 1 21.43 1 19.5V3.5C1 2.121 2.122 1 3.5 1H6.5C7.878 1 9 2.121 9 3.5V4H6.5C6.224 4 6 4.224 6 4.5C6 4.776 6.224 5 6.5 5H9V9H6.5C6.224 9 6 9.224 6 9.5C6 9.776 6.224 10 6.5 10H9V14H6.5C6.224 14 6 14.224 6 14.5C6 14.776 6.224 15 6.5 15H9V17.5C9 17.776 9.224 18 9.5 18C9.776 18 10 17.776 10 17.5V15H14V17.5C14 17.776 14.224 18 14.5 18C14.776 18 15 17.776 15 17.5V15H19V17.5C19 17.776 19.224 18 19.5 18C19.776 18 20 17.776 20 17.5V15H20.5C21.879 15 23 16.121 23 17.5V20.5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10002_1253">
                        <rect width="100%" height="100%" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-h6">Precision Engineered</div>
              </div>
              <div className="home-b-feature-tile">
                <div className="icon-home-b-feature w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8121_3092)">
                      <path
                        d="M4.5 15H12.5C13.327 15 14 14.327 14 13.5V12.5C14 11.673 13.327 11 12.5 11H4.5C3.673 11 3 11.673 3 12.5V13.5C3 14.327 3.673 15 4.5 15ZM4 12.5C4 12.224 4.224 12 4.5 12H12.5C12.776 12 13 12.224 13 12.5V13.5C13 13.776 12.776 14 12.5 14H4.5C4.224 14 4 13.776 4 13.5V12.5ZM16.5 20H19.5C20.327 20 21 19.327 21 18.5V12.5C21 11.673 20.327 11 19.5 11H16.5C15.673 11 15 11.673 15 12.5V18.5C15 19.327 15.673 20 16.5 20ZM16 12.5C16 12.224 16.224 12 16.5 12H19.5C19.776 12 20 12.224 20 12.5V18.5C20 18.776 19.776 19 19.5 19H16.5C16.224 19 16 18.776 16 18.5V12.5ZM4.5 20H12.5C13.327 20 14 19.327 14 18.5V17.5C14 16.673 13.327 16 12.5 16H4.5C3.673 16 3 16.673 3 17.5V18.5C3 19.327 3.673 20 4.5 20ZM4 17.5C4 17.224 4.224 17 4.5 17H12.5C12.776 17 13 17.224 13 17.5V18.5C13 18.776 12.776 19 12.5 19H4.5C4.224 19 4 18.776 4 18.5V17.5ZM19.5 1H4.5C2.019 1 0 3.019 0 5.5V18.5C0 20.981 2.019 23 4.5 23H19.5C21.981 23 24 20.981 24 18.5V5.5C24 3.019 21.981 1 19.5 1ZM23 18.5C23 20.43 21.43 22 19.5 22H4.5C2.57 22 1 20.43 1 18.5V9H23V18.5ZM23 8H1V5.5C1 3.57 2.57 2 4.5 2H19.5C21.43 2 23 3.57 23 5.5V8ZM11 5C11 5.552 10.552 6 10 6C9.448 6 9 5.552 9 5C9 4.448 9.448 4 10 4C10.552 4 11 4.448 11 5ZM5 5C5 5.552 4.552 6 4 6C3.448 6 3 5.552 3 5C3 4.448 3.448 4 4 4C4.552 4 5 4.448 5 5ZM8 5C8 5.552 7.552 6 7 6C6.448 6 6 5.552 6 5C6 4.448 6.448 4 7 4C7.552 4 8 4.448 8 5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_8121_3092">
                        <rect width="100%" height="100%" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-h6">Expert-Led</div>
              </div>
              <div className="home-b-feature-tile">
                <div className="icon-home-b-feature w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_10002_1285)">
                      <path
                        d="M10.239 14.782C10.726 15.259 11.367 15.496 12.006 15.496C12.638 15.496 13.268 15.263 13.742 14.799L16.949 11.95C18.271 10.628 19 8.87 19 7C19 5.13 18.271 3.373 16.949 2.05C15.628 0.728 13.87 0 12 0C10.13 0 8.372 0.728 7.05 2.05C4.321 4.779 4.321 9.22 7.071 11.97L10.239 14.782ZM7.757 2.757C8.891 1.624 10.398 1 12 1C13.602 1 15.109 1.624 16.242 2.757C17.376 3.89 18 5.397 18 7C18 8.603 17.376 10.109 16.264 11.222L13.061 14.067C12.477 14.64 11.525 14.637 10.921 14.05L7.757 11.242C5.418 8.903 5.418 5.096 7.757 2.757ZM12 9.98C13.648 9.98 14.99 8.639 14.99 6.99C14.99 5.341 13.648 4 12 4C10.352 4 9.01 5.341 9.01 6.99C9.01 8.639 10.352 9.98 12 9.98ZM12 5C13.098 5 13.99 5.893 13.99 6.99C13.99 8.087 13.097 8.98 12 8.98C10.903 8.98 10.01 8.087 10.01 6.99C10.01 5.893 10.903 5 12 5ZM24 17.016C24 17.192 23.908 17.355 23.757 17.445L13.447 23.631C13.001 23.899 12.501 24.033 12 24.033C11.499 24.033 10.999 23.898 10.553 23.631L0.243 17.444C0.092 17.354 0 17.191 0 17.015C0 16.839 0.092 16.676 0.243 16.586L5.243 13.586C5.477 13.443 5.787 13.521 5.929 13.758C6.072 13.994 5.994 14.302 5.757 14.444L1.472 17.015L11.067 22.772C11.643 23.118 12.358 23.118 12.934 22.772L22.529 17.015L18.218 14.428C17.981 14.286 17.904 13.979 18.046 13.742C18.189 13.505 18.498 13.428 18.732 13.57L23.757 16.586C23.908 16.677 24 16.839 24 17.015V17.016Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10002_1285">
                        <rect width="100%" height="100%" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-h6">Tested Excellence</div>
              </div> */}
            </div>
          </div>
          <div className="home-b-features-image">
            {/* <img
              src="https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
              srcSet="
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   500w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   800w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1080w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1600w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2000w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2600w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3200w,
                https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D        5464w
              "
              alt=""
              className="image-cover"
            /> */}
            <img
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, 95vw"
              src={about.finalImage?.url}
              alt=""
              className="image-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;