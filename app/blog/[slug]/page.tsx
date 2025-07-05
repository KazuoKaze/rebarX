// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // import { LexicalRichText } from "@payloadcms/richtext-lexical/react";

// import dynamic from 'next/dynamic'
// import { lexicalEditor } from "@payloadcms/richtext-lexical";

// // const LexicalRichText = dynamic(
// //   () =>
// //     import("@payloadcms/richtext-lexical").then((mod) => mod.LexicalRichText),
// //   { ssr: false }
// // );

// export default function SingleBlog() {

//     const [blogData, setBlogData] = useState(null);
//     const params = useParams();

//     useEffect(() => {
//       if (!params?.slug) return;

//         const slug = decodeURIComponent(params.slug);

//       fetch(
//         `https://payload-back.onrender.com/api/blog-posts?where[slug][equals]=${slug}&depth=2`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.docs?.length > 0) {
//             setBlogData(data.docs[0]);
//           }
//         })
//         .catch((err) => {
//           console.error("Failed to fetch blog post:", err);
//         });
//     }, [params?.slug]);

//     if (!blogData) return;

//     const formattedDate = new Date(blogData.date).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });

//     console.log(formattedDate);

//     console.log(blogData, 'thid is data')

//     return (
//       <div>
//         <section className="section hero-article">
//           <div className="w-layout-blockcontainer main-container w-container">
//             <div className="w-layout-grid article-hero-halves">
//               <div className="article-heading-wrap">
//                 <div className="article-top-tile">
//                   <div className="article-category-wrap">
//                     <div className="text-small semibold">{blogData.tag}</div>
//                     <div className="text-small opacity-50">·</div>
//                     <div className="text-small">{formattedDate}</div>
//                   </div>
//                   <h1 className="text-h1">{blogData.title}</h1>
//                 </div>
//                 <a
//                   href="#Article"
//                   className="article-down-button w-inline-block"
//                 >
//                   <div className="icon-down-arrow w-embed">
//                     <svg
//                       width="22"
//                       height="21"
//                       viewBox="0 0 22 21"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M11 0.666992L11 19.3337"
//                         stroke="currentColor"
//                         stroke-width="2"
//                       />
//                       <path
//                         d="M20.334 10L11.0007 19.3333L1.66732 10"
//                         stroke="currentColor"
//                         stroke-width="2"
//                       />
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//               <img
//                 src={blogData.mainImage.url}
//                 loading="lazy"
//                 id="w-node-_16eb1e1e-3eb9-d81a-e596-2ff6728d587f-e2064d69"
//                 alt=""
//                 sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 94vw"
//                 className="article-big-thumbnail"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="section body-article">
//           <div className="w-layout-blockcontainer main-container w-container">
//             <div
//               data-w-id="aa46aa4f-a776-788c-4b98-c2b87dd9e11b"
//               className="section-divider article-divider"
//             ></div>
//             <div className="w-layout-blockcontainer main-container article-container w-container">
//               <div className="article-body-wrap">
//                 <div id="Article" className="post-body w-richtext">
//                   {/* render lexi editor here  */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="section related-blog-section">
//           <div className="w-layout-blockcontainer main-container w-container">
//             <div className="headline-related">
//               <h3 className="no-margins">Latest articles</h3>
//             </div>
//             <div className="related-block w-dyn-list">
//               <div role="list" className="blog-thirds w-dyn-items">
//                 <div role="listitem" className="w-dyn-item">
//                   <a
//                     href="/blog/how-to-optimize-your-business-operations-for-maximum-efficiency-2"
//                     className="article-tile w-inline-block"
//                   >
//                     <div className="image-wrap-blog">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         src="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow.jpg"
//                         sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
//                         // srcset="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-500.jpg 500w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-800.jpg 800w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-1600.jpg 1600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-2000.jpg 2000w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-2600.jpg 2600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-3200.jpg 3200w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow.jpg 3888w"
//                         className="image-cover"
//                       />
//                     </div>
//                     <div className="article-info-wrap">
//                       <div className="article-category-wrap">
//                         <div className="text-small">Welness</div>
//                         <div className="text-small opacity-50">·</div>
//                         <div className="text-small">November 13, 2024</div>
//                       </div>
//                       <div className="text-h5">
//                         How to Optimize Your Business Operations for Maximum
//                         Efficiency
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div role="listitem" className="w-dyn-item">
//                   <a
//                     href="/blog/unlocking-new-markets-a-step-by-step-guide-to-expansion-2"
//                     className="article-tile w-inline-block"
//                   >
//                     <div className="image-wrap-blog">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         src="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da0ec2f2d5cfa12bda5d_Article%20Thumbnail%204.png"
//                         sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
//                         // srcset="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da0ec2f2d5cfa12bda5d_Article%20Thumbnail%204-p-500.png 500w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da0ec2f2d5cfa12bda5d_Article%20Thumbnail%204-p-800.png 800w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da0ec2f2d5cfa12bda5d_Article%20Thumbnail%204-p-1080.png 1080w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da0ec2f2d5cfa12bda5d_Article%20Thumbnail%204.png 1263w"
//                         className="image-cover"
//                       />
//                     </div>
//                     <div className="article-info-wrap">
//                       <div className="article-category-wrap">
//                         <div className="text-small">Welness</div>
//                         <div className="text-small opacity-50">·</div>
//                         <div className="text-small">November 13, 2024</div>
//                       </div>
//                       <div className="text-h5">
//                         Unlocking New Markets: A Step-by-Step Guide to Expansion
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//                 <div role="listitem" className="w-dyn-item">
//                   <a
//                     href="/blog/the-role-of-data-in-shaping-effective-business-strategies"
//                     className="article-tile w-inline-block"
//                   >
//                     <div className="image-wrap-blog">
//                       <img
//                         alt=""
//                         loading="lazy"
//                         src="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf.jpg"
//                         sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
//                         // srcset="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-500.jpg 500w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-800.jpg 800w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-1600.jpg 1600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-2000.jpg 2000w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf-p-2600.jpg 2600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734d9bde5bcef035a56dcce_Leaf.jpg 3024w"
//                         className="image-cover"
//                       />
//                     </div>
//                     <div className="article-info-wrap">
//                       <div className="article-category-wrap">
//                         <div className="text-small">Welness</div>
//                         <div className="text-small opacity-50">·</div>
//                         <div className="text-small">November 13, 2024</div>
//                       </div>
//                       <div className="text-h5">
//                         The Role of Data in Shaping Effective Business
//                         Strategies
//                       </div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
// }

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Lexical Content Renderer
const LexicalContentRenderer = ({ content, className = "" }) => {
  if (!content?.root?.children) {
    return <div className={className}>No content available</div>;
  }

  const renderNode = (node, index) => {
    switch (node.type) {
      case "paragraph":
        if (!node.children || node.children.length === 0) {
          return <br key={index} />;
        }
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {node.children.map((child, childIndex) =>
              renderTextNode(child, childIndex)
            )}
          </p>
        );

      case "heading":
        if (!node.children || node.children.length === 0) return null;
        const level = node.tag || 2;
        const HeadingTag = `h${level}`;
        const headingClasses = {
          1: "text-h1",
          2: "text-h2",
          3: "text-h3",
          4: "text-h4",
          5: "text-h5",
          6: "text-h6",
        };

        return React.createElement(
          HeadingTag,
          { key: index, className: headingClasses[level] || headingClasses[2] },
          node.children.map((child, childIndex) =>
            renderTextNode(child, childIndex)
          )
        );

      case "list":
        const ListTag = node.listType === "number" ? "ol" : "ul";
        const listClasses =
          node.listType === "number"
            ? "list-decimal list-inside mb-4 ml-4 space-y-2"
            : "list-disc list-inside mb-4 ml-4 space-y-2";

        return (
          <ListTag key={index} className={listClasses}>
            {node.children?.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </ListTag>
        );

      case "listitem":
        return (
          <li key={index} className="mb-2">
            {node.children?.map((child, childIndex) => {
              if (child.type === "paragraph") {
                return child.children?.map((textChild, textIndex) =>
                  renderTextNode(textChild, textIndex)
                );
              }
              return renderNode(child, childIndex);
            })}
          </li>
        );

      case "quote":
        return (
          <blockquote
            key={index}
            className="border-l-4 border-blue-500 pl-6 italic mb-6 bg-gray-50 py-4"
          >
            {node.children?.map((child, childIndex) =>
              renderNode(child, childIndex)
            )}
          </blockquote>
        );

      case "upload":
        if (node.value?.cloudinaryUrl) {
          return (
            <div key={index} className="mb-8">
              <img
                src={node.value.cloudinaryUrl}
                alt={node.value.alt || ""}
                className="w-full h-auto rounded-lg"
              />
              {node.value.caption && (
                <p className="text-small text-center mt-3 italic">
                  {node.value.caption}
                </p>
              )}
            </div>
          );
        }
        return null;

      case "horizontalrule":
        return <hr key={index} className="my-8 border-gray-300" />;

      case "link":
        return (
          <a
            key={index}
            href={node.url}
            className="text-blue-600 hover:text-blue-800 underline"
            target={node.newTab ? "_blank" : undefined}
            rel={node.newTab ? "noopener noreferrer" : undefined}
          >
            {node.children?.map((child, childIndex) =>
              renderTextNode(child, childIndex)
            )}
          </a>
        );

      default:
        if (node.children) {
          return (
            <div key={index}>
              {node.children.map((child, childIndex) =>
                renderNode(child, childIndex)
              )}
            </div>
          );
        }
        return null;
    }
  };

  const renderTextNode = (node, index) => {
    if (typeof node === "string") {
      return node;
    }

    if (!node.text && node.text !== "") {
      return null;
    }

    let text = node.text;
    let element = <span key={index}>{text}</span>;

    if (node.bold) {
      element = (
        <strong key={index} className="semibold">
          {element}
        </strong>
      );
    }
    if (node.italic) {
      element = <em key={index}>{element}</em>;
    }
    if (node.underline) {
      element = <u key={index}>{element}</u>;
    }
    if (node.strikethrough) {
      element = <s key={index}>{element}</s>;
    }
    if (node.code) {
      element = (
        <code key={index} className="bg-gray-100 px-2 py-1 rounded text-small">
          {element}
        </code>
      );
    }

    return element;
  };

  return (
    <div className={className}>
      {content.root.children.map((node, index) => renderNode(node, index))}
    </div>
  );
};

// Related Blog Card Component
const RelatedBlogCard = ({ blog }) => {
  if (!blog) return null;

  const formattedDate = new Date(
    blog.date || blog.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a href={`/blog/${blog.slug}`} className="article-tile w-inline-block">
      {blog.mainImage?.cloudinaryUrl && (
        <div className="image-wrap-blog">
          <img
            src={blog.mainImage.cloudinaryUrl}
            loading="lazy"
            alt={blog.mainImage.alt || blog.title}
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
            className="image-cover"
          />
        </div>
      )}
      <div className="article-info-wrap">
        <div className="article-category-wrap">
          <div className="text-small">{blog.tag}</div>
          <div className="text-small opacity-50">·</div>
          <div className="text-small">{formattedDate}</div>
        </div>
        <div className="text-h5">{blog.title}</div>
      </div>
    </a>
  );
};

// Main Blog Post Component
const BlogPost = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (!params?.slug) {
      setLoading(false);
      return;
    }

    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const slug = decodeURIComponent(params.slug);
        const response = await fetch(
          `https://payload-back.onrender.com/api/blog-posts?where[slug][equals]=${slug}&depth=2`
        );

        // https://payload-back.onrender.com/api/blog-posts?where[slug][equals]=${slug}&depth=2

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.docs?.length > 0) {
          setBlogData(data.docs[0]);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError(err.message || "Failed to fetch blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="section hero-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid article-hero-halves">
            <div className="article-heading-wrap">
              <div className="article-top-tile">
                <div className="article-category-wrap">
                  <div className="text-small semibold animate-pulse bg-gray-200 h-4 w-20"></div>
                  <div className="text-small opacity-50">·</div>
                  <div className="text-small animate-pulse bg-gray-200 h-4 w-32"></div>
                </div>
                <div className="text-h1 animate-pulse bg-gray-200 h-12 w-3/4"></div>
              </div>
            </div>
            <div className="article-big-thumbnail animate-pulse bg-gray-200 h-64"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section hero-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="text-center">
            <div className="text-small text-red-600 mb-4">Error: {error}</div>
            <a href="/blog" className="article-tile w-inline-block">
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="section hero-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="text-center">
            <div className="text-small mb-4">Blog post not found</div>
            <a href="/blog" className="article-tile w-inline-block">
              ← Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(
    blogData.date || blogData.createdAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
    
    console.log(blogData, 'this is blogdata')

  return (
    <div>
      <section className="section hero-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid article-hero-halves">
            <div className="article-heading-wrap">
              <div className="article-top-tile">
                <div className="article-category-wrap">
                  <div className="text-small semibold">{blogData.tag}</div>
                  <div className="text-small opacity-50">·</div>
                  <div className="text-small">{formattedDate}</div>
                </div>
                <h1 className="text-h1">{blogData.title}</h1>
              </div>
              <a href="#Article" className="article-down-button w-inline-block">
                <div className="icon-down-arrow w-embed">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 0.666992L11 19.3337"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <path
                      d="M20.334 10L11.0007 19.3333L1.66732 10"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </a>
            </div>
            {blogData.mainImage?.cloudinaryUrl && (
              <img
                src={blogData.mainImage.cloudinaryUrl}
                loading="lazy"
                alt={blogData.mainImage.alt || blogData.title}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, 94vw"
                className="article-big-thumbnail"
              />
            )}
          </div>
        </div>
      </section>

      <section className="section body-article">
        <div className="w-layout-blockcontainer main-container w-container">
          <div
            data-w-id="aa46aa4f-a776-788c-4b98-c2b87dd9e11b"
            className="section-divider article-divider"
          ></div>
          <div className="w-layout-blockcontainer main-container article-container w-container">
            <div className="article-body-wrap">
              <div id="Article" className="post-body w-richtext">
                <LexicalContentRenderer
                  content={blogData.content}
                  className="w-richtext"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />

      {/* {blogData.relatedBlogs && blogData.relatedBlogs.length > 0 && ( */}
      <section className="section related-blog-section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="headline-related">
            <h3 className="no-margins">Latest articles</h3>
          </div>
          <div className="related-block w-dyn-list">
            <div role="list" className="blog-thirds w-dyn-items">
              {/* <div role="listitem" className="w-dyn-item">
                <a
                  href="/blog/how-to-optimize-your-business-operations-for-maximum-efficiency-2"
                  className="article-tile w-inline-block"
                >
                  <div className="image-wrap-blog">
                    <img
                      alt=""
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow.jpg"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
                      srcset="https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-500.jpg 500w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-800.jpg 800w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-1600.jpg 1600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-2000.jpg 2000w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-2600.jpg 2600w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow-p-3200.jpg 3200w, https://cdn.prod.website-files.com/67337f627413b847e2064d1a/6734da2880e071d8ed9bf624_Cow.jpg 3888w"
                      className="image-cover"
                    />
                  </div>
                  <div className="article-info-wrap">
                    <div className="article-category-wrap">
                      <div className="text-small">Welness</div>
                      <div className="text-small opacity-50">·</div>
                      <div className="text-small">November 13, 2024</div>
                    </div>
                    <div className="text-h5">
                      How to Optimize Your Business Operations for Maximum
                      Efficiency
                    </div>
                  </div>
                </a>
              </div> */}
              {/* {blogData.relatedBlogs &&
                blogData.relatedBlogs.length > 0 &&
                blogData.relatedBlogs.map((bb, index) => (
                  <div role="listitem" className="w-dyn-item">
                    <Link
                      href={bb.slug}
                      className="article-tile w-inline-block"
                    >
                      <div className="image-wrap-blog">
                        <img
                          alt=""
                          loading="lazy"
                          src={bb.mainImage.url}
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
                          className="image-cover"
                        />
                      </div>
                      <div className="article-info-wrap">
                        <div className="article-category-wrap">
                                    <div className="text-small">{ bb.tag}</div>
                          <div className="text-small opacity-50">·</div>
                          <div className="text-small">November 13, 2024</div>
                        </div>
                        <div className="text-h5">
                         {bb.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))} */}

              {blogData.relatedBlogs &&
                blogData.relatedBlogs.length > 0 &&
                blogData.relatedBlogs.map((bb, index) => (
                  <div
                    key={bb.id || index}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <Link
                      href={`/blog/${encodeURIComponent(bb.slug)}`}
                      className="article-tile w-inline-block"
                    >
                      <div className="image-wrap-blog">
                        <img
                          alt={bb.mainImage?.alt || bb.title}
                          loading="lazy"
                          src={bb.mainImage?.cloudinaryUrl}
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 44vw, (max-width: 991px) 46vw, 30vw"
                          className="image-cover"
                        />
                      </div>
                      <div className="article-info-wrap">
                        <div className="article-category-wrap">
                          <div className="text-small">{bb.tag}</div>
                          <div className="text-small opacity-50">·</div>
                          <div className="text-small">
                            {new Date(
                              bb.date || bb.createdAt
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                        <div className="text-h5">{bb.title}</div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default BlogPost;