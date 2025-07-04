

export default function VisionSection({ visionSection  }) {
  return (
    <section className="section testimonial-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="testimonial-wrap-center">
          <div className="testimonial-authors-wrap">
            {/* <div className="testimonial-author-image">
                <img
                  src="https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f98_Member-3.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 44px, 70px"
                  srcSet="
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f98_Member-3.webp 500w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f98_Member-3.webp 800w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f98_Member-3.webp 912w
                "
                  alt=""
                  className="image-cover"
                />
              </div>
              <div className="testimonial-author-image second">
                <img
                  src="https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f8c_Member.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 44px, 70px"
                  srcSet="
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f8c_Member.webp 500w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f8c_Member.webp 800w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064f8c_Member.webp 912w
                "
                  alt=""
                  className="image-cover"
                />
              </div>
              <div className="testimonial-author-image third">
                <img
                  src="https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064ff7_Member-5.webp"
                  loading="lazy"
                  sizes="(max-width: 479px) 44px, 70px"
                  srcSet="
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064ff7_Member-5.webp 500w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064ff7_Member-5.webp 800w,
                  https://cdn.prod.website-files.com/67337f627413b847e2064cec/67337f627413b847e2064ff7_Member-5.webp 912w
                "
                  alt=""
                  className="image-cover"
                />
              </div> */}
          </div>
          <h3 className="no-margins">{visionSection.description}</h3>
        </div>
      </div>
      <div
        data-w-id="f95688bd-f871-6d52-f121-fd95b4a3f926"
        className="circle-testimonial-left"
      ></div>
      <div
        data-w-id="f95688bd-f871-6d52-f121-fd95b4a3f927"
        className="circle-testimonial-right"
      ></div>
    </section>
  );
}