
import React from "react";
import styles from "../../styles/blogpost/BlogPostContent.module.css";
import type { BlogPost } from "../../constants/blogsData";

function renderSafeHtml(html: string): React.ReactNode {
  if (!html) return null;

  const cleaned = html
    .replaceAll("<p><br></p><p><br></p>", "<br/>")
    .replaceAll("<p><br></p>", "<br/>");

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleaned, "text/html");
  let key = 0;
  const allowedTags = new Set([
    "p",
    "br",
    "strong",
    "em",
    "b",
    "i",
    "u",
    "ul",
    "ol",
    "li",
    "a",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",  
    "blockquote",
    "code",
    "pre",
    "img",
  ]);

  function sanitizeHref(href: string | null): string | undefined {
    if (!href) return undefined;
    const trimmed = href.trim();
    if (/^javascript:/i.test(trimmed)) return undefined;
    if (/^(https?:|mailto:|tel:|\/)/i.test(trimmed)) return trimmed;
    return undefined;
  }

  function sanitizeSrc(src: string | null): string | undefined {
    if (!src) return undefined;
    const trimmed = src.trim();
    if (/^(https?:|data:|\/)/i.test(trimmed)) return trimmed;
    return undefined;
  }

  function convert(node: ChildNode): React.ReactNode {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent;
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node as Element;
    const tag = el.tagName.toLowerCase();

    const children = Array.from(el.childNodes).map((n) => convert(n));

    if (!allowedTags.has(tag)) {
      // unwrap unknown tags but keep their children
      return <React.Fragment key={key++}>{children as React.ReactNode}</React.Fragment>;
    }

    if (tag === "a") {
      const href = sanitizeHref(el.getAttribute("href"));
      return (
        <a key={key++} href={href} rel="noopener noreferrer" target="_blank">
          {children as React.ReactNode}
        </a>
      );
    }

    if (tag === "img") {
      const src = sanitizeSrc(el.getAttribute("src"));
      return <img key={key++} src={src} alt={el.getAttribute("alt") ?? ""} loading="lazy" className={styles.image} />;
    }

    // Rendering for simple tags
    switch (tag) {
      case "p":
        return <p key={key++}>{children as React.ReactNode}</p>;
      case "br":
        return <br key={key++} />;
      case "strong":
        return <strong key={key++}>{children as React.ReactNode}</strong>;
      case "em":
      case "i":
        return <em key={key++}>{children as React.ReactNode}</em>;
      case "b":
        return <b key={key++}>{children as React.ReactNode}</b>;
      case "u":
        return <u key={key++}>{children as React.ReactNode}</u>;
      case "ul":
        return <ul key={key++}>{children as React.ReactNode}</ul>;
      case "ol":
        return <ol key={key++}>{children as React.ReactNode}</ol>;
      case "li":
        return <li key={key++}>{children as React.ReactNode}</li>;
      case "h1":
        return <h1 key={key++}>{children as React.ReactNode}</h1>;
      case "h2":
        return <h2 key={key++}>{children as React.ReactNode}</h2>;
      case "h3":
        return <h3 key={key++}>{children as React.ReactNode}</h3>;
      case "h4":
        return <h4 key={key++}>{children as React.ReactNode}</h4>;
      case "h5":
        return <h5 key={key++}>{children as React.ReactNode}</h5>;
        case "h6":
        return <h6 key={key++}>{children as React.ReactNode}</h6>;
      case "blockquote":
        return <blockquote key={key++}>{children as React.ReactNode}</blockquote>;
      case "code":
        return <code key={key++}>{children as React.ReactNode}</code>;
      case "pre":
        return <pre key={key++}>{children as React.ReactNode}</pre>;
      default:
        return <React.Fragment key={key++}>{children as React.ReactNode}</React.Fragment>;
    }
  }

  return Array.from(doc.body.childNodes).map((n) => convert(n));
}

const BlogPostContent = ({ post }: { post: BlogPost }) => {
  return (
    <article className={styles.blogPostContent}>
      {/* <div className={styles.featuredImage}>
        {post?.featured_image ? (
          <img
            src={post?.featured_image}
            alt={post?.title}
            loading="lazy"
            className={styles.image}
          />
        ) : (
          <div className={styles.image} aria-hidden="true" />
        )}
      </div> */}

      <div className={styles.contentBody}>
        <div className={styles.htmlContent}>{renderSafeHtml(post.content ?? "")}</div>

        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className={styles.tagsSection}>
            <h4 className={styles.tagsTitle}>Tags:</h4>
            <div className={styles.tagsList}>
              {(post.tags as string[]).map((tag: string, index: number) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostContent;
