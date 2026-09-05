import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import { ScrollToTop } from "../components/ScrollToTop";
import { Header } from "../components/Header";
import { Link, useParams } from "react-router-dom";
import {
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Footer } from "../components/Footer";
import blogsData from "../constants/blogsData";
import { FloatingSemiCircleMenu } from "../components/FloatingSemiCircleMenu";
import BlogPostContent from "../components/blogpost/BlogPostContent";
import metaData from "../../metaData.js";
import { paths } from "../constants/paths";
import { normalizePath } from "../helpers/pathUtils";


const BlogPost = () => {

  const { slug } = useParams();
  const article = blogsData.find((a) => a.slug === `/${slug}/`) || blogsData[0];
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          url: window.location.href,
        })
        .catch(() => {
          // If share is cancelled or fails, show the URL in an alert
          alert(`Share this article:\n${window.location.href}`);
        });
    } else {
      // Fallback: Create a temporary input to allow manual copying
      const tempInput = document.createElement("input");
      tempInput.value = window.location.href;
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices

      try {
        document.execCommand("copy");
        alert("Link copied to clipboard!");
      } catch (err) {
        console.log(err);
        alert(`Share this article:\n${window.location.href}`);
      }

      document.body.removeChild(tempInput);
    }
  };

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title="Blog" />
      <ScrollToTop />
      <FloatingSemiCircleMenu />
      <Header textColor="black" />

      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-gray-50 to-white px-4 pt-25 pb-12 md:pt-50 md:pb-16">
        <div className="container mx-auto max-w-10/12 px-4 md:px-8">
          {/* Back Button */}
          <Link
            to={normalizePath(paths.blog)}
            className="mb-6 inline-flex items-center gap-2 font-['Manrope'] text-gray-600 transition-colors hover:text-[#004856]"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Category & Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="rounded-full bg-[#004856] px-4 py-1.5 font-['Manrope'] text-sm font-medium text-white">
              {article.category}
            </span>
            <span className="flex items-center gap-2 font-['Manrope'] text-sm text-gray-600">
              <Calendar size={16} />
              {article.date}
            </span>
            <span className="font-['Manrope'] text-sm text-gray-600">
              {article.read_time}
            </span>
          </div>

          {metaTitle ? (
            <h1 className="visually-hidden">
              {metaTitle}
            </h1>
          ) : null}
          {/* Title */}
          <h2 className="mb-6 font-['Poppins'] text-4xl leading-tight md:text-5xl lg:text-6xl">
            {article.title}
          </h2>

          {/* Author */}
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004856]">
                <User size={24} className="text-white" />
              </div>
              <div>
                <div className="font-['Manrope'] font-medium text-gray-900">
                  {article.author}
                </div>
                <div className="font-['Manrope'] text-sm text-gray-600">
                  Industry Expert
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
                aria-label="Share"
              >
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mx-auto max-w-10/12 px-4 md:px-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={article.featured_image}
              alt={article.alt || article.title}
              className="h-100 w-full object-cover md:h-150"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto max-w-10/12 px-4 md:px-8">
          <BlogPostContent post={article} />

          {/* Social Share Section */}
          <div className="mx-auto mt-16 max-w-7xl border-t border-gray-200 pt-8">
            <p className="mb-4 font-['Manrope'] text-gray-600">
              Share this article:
            </p>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#1877f2] px-6 py-3 text-white transition-colors hover:bg-[#0d65d9]"
              >
                <Facebook size={20} />
                <span className="font-['Manrope']">Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article?.title || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-[rgb(255,252,252)] transition-colors hover:bg-gray-900"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-['Manrope']">Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-[#0077b5] px-6 py-3 text-white transition-colors hover:bg-[#005582]"
              >
                <Linkedin size={20} />
                <span className="font-['Manrope']">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default BlogPost;
