import { useState } from "react";
import { Link } from "react-router-dom";
import buildMailtoUrl from "../helpers/buildMailtoUrl";
import { toast } from "sonner";
import { ScrollToTop } from "../components/ScrollToTop";
import { FloatingSemiCircleMenu } from "../components/FloatingSemiCircleMenu";
import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import Search from "../components/Search";
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Zap,
  Wrench,
  Plane,
  Building2,
  Cog,
  Leaf,
  Loader2,
} from "lucide-react";
import { Footer } from "../components/Footer";
import blogsData from "../constants/blogsData";
import HeroSection from "../components/HeroSection";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


const categories = [
  { name: "All", icon: TrendingUp },
  { name: "Aerospace", icon: Plane },
  { name: "Cranes", icon: Building2 },
  { name: "Industrial", icon: Wrench },
  { name: "Technology", icon: Zap },
  { name: "Engineering", icon: Cog },
  { name: "Sustainability", icon: Leaf },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [isSendingMail, setIsSendingMail] = useState(false);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  // const handleSubmit = async (email: string) => {
  //   if (!email || email.trim().length === 0) {
  //     toast("❌ Kindly fill in the email field.");
  //     return;
  //   }
  //   setIsSendingMail(true);
  //   const templateParams = {
  //     username: import.meta.env?.VITE_USERNAME ?? "",
  //     password: import.meta.env?.VITE_PASSWORD ?? "",
  //     templateCode: import.meta.env?.VITE_NEWSLETTER_TEMPLATE_CODE ?? "",
  //     to: [import.meta.env?.VITE_SENDER_EMAIL ?? ""],
  //     placeholders: {
  //       from_name: email ?? "",
  //       to_name: import.meta.env?.VITE_SENDER_NAME ?? "",
  //       message: `Name: ${email} <br />`,
  //     },
  //   };

  //   const replyTemplateParams = {
  //     username: import.meta.env?.VITE_USERNAME ?? "",
  //     password: import.meta.env?.VITE_PASSWORD ?? "",
  //     templateCode: import.meta.env?.VITE_NEWSLETTER_REPLY_TEMPLATE_CODE ?? "",
  //     to: [email ?? ""],
  //     placeholders: {
  //       to_name: email ?? "",
  //     },
  //   };

  //   try {
  //     const responseOne = await sendEmail(templateParams);
  //     if (
  //       responseOne?.status === "error" ||
  //       responseOne?.data?.status === "failed"
  //     ) {
  //       throw new Error("Failed to send subscription email.");
  //     }

  //     await sendEmail(replyTemplateParams);

  //     setIsSendingMail(false);
  //     toast.success("Success! Subscribed for Newsletter");
  //     setNewsLetterEmail("");

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 3000);

  //   } catch (err) {
  //     console.error(err);
  //     setIsSendingMail(false);
  //     setNewsLetterEmail("");
  //     toast("❌ Failed to send enquiry. Try again later.");
  //   }
  // };

  const handleSubmit = (email: string) => {
    const trimmedEmail = email.trim();

    if (trimmedEmail.length < 1) {
      toast("❌ Kindly fill in the email field.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast("❌ Kindly enter a valid email address.");
      return;
    }
    setIsSendingMail(true);
    setNewsLetterEmail(trimmedEmail);
    window.location.href = buildMailtoUrl({
      to: import.meta.env?.VITE_SENDER_EMAIL ?? "",
      subject: "Newsletter subscription request",
      body: `Please subscribe this email address to the newsletter:\n\n${trimmedEmail}`,
    });
    setIsSendingMail(false);
  };

  const filteredPosts = blogsData.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    // SQL-like search logic
    let matchesSearch = true;
    if (searchQuery) {
      const searchText = searchQuery.toLowerCase();
      const titleText = post.title.toLowerCase();
      const excerptText = post.short_description.toLowerCase();

      // Handle % wildcards
      if (searchText.includes("%")) {
        const pattern = searchText.replace(/%/g, ".*");
        const regex = new RegExp(pattern);
        matchesSearch = regex.test(titleText) || regex.test(excerptText);
      } else {
        matchesSearch =
          titleText.includes(searchText) || excerptText.includes(searchText);
      }
    }

    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];

  return (
    <div className="relative min-h-screen bg-white">
      <FloatingVerticalTitle title="Blog" />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        variant="seven"
        data={{
          image: {
            src: "https://images.unsplash.com/photo-1693159682618-074078ed271e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJsb2clMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMDAwMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Blog background",
          },
        }}
        HeroContent={() => (
          <>
            <div className="absolute top-0 right-0 h-full w-1/2 opacity-5">
              <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-[#004856] blur-3xl"></div>
              <div className="absolute right-40 bottom-20 h-64 w-64 rounded-full bg-[#004856] blur-3xl"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#004856]/20 bg-[#004856]/10 px-4 py-2 backdrop-blur-sm">
                    <TrendingUp size={16} className="text-[#004856]" />
                    <span className="font-['Manrope'] text-sm text-[rgb(255,255,255)]">
                      Trending Insights
                    </span>
                  </div>

                  {metaTitle ? (
                    <h1 className="visually-hidden">
                      {metaTitle}
                    </h1>
                  ) : null}

                  <h2 className="mb-6 font-['Poppins'] text-4xl leading-tight text-[rgb(246,246,246)] md:text-5xl lg:text-6xl">
                    Insights That <br />
                    <span className="bg-linear-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
                      Drive Innovation
                    </span>
                  </h2>

                  <p className="mb-8 max-w-xl font-['Manrope'] text-lg leading-relaxed text-[rgb(222,222,222)] md:text-xl">
                    Discover cutting-edge perspectives on industrial
                    manufacturing, engineering excellence, and the future of
                    technology.
                  </p>

                  {/* SQL-Like Search */}
                  <Search
                    initialValue=""
                    onChange={(value) => {
                      setSearchQuery(value);
                    }}
                    onSearch={(value) => {
                      setSearchQuery(value);
                    }}
                    showEmpty={filteredPosts.length === 0 && searchQuery !== ""}
                  />
                </div>

                {/* Right Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-2 font-['Poppins'] text-4xl text-[#004856]">
                      50+
                    </div>
                    <div className="font-['Manrope'] text-gray-600">
                      Expert Articles
                    </div>
                  </div>
                  <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-2 font-['Poppins'] text-4xl text-[#004856]">
                      15K+
                    </div>
                    <div className="font-['Manrope'] text-gray-600">
                      Monthly Readers
                    </div>
                  </div>
                  <div className="col-span-2 rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
                    <div className="mb-2 font-['Poppins'] text-4xl text-[#004856]">
                      6
                    </div>
                    <div className="font-['Manrope'] text-gray-600">
                      Industry Categories
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      />

      {/* Category Filter Bar - Sticky */}
      <section className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8 lg:px-16">
          <div className="flex items-center gap-3 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-['Manrope'] text-sm whitespace-nowrap transition-all duration-200 ${selectedCategory === category.name
                    ? "bg-[#004856] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-10/12 px-3 md:px-6 lg:px-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Featured Post - Large Hero Card */}
              {featuredPost && (
                <Link to={normalizePath(`/blog/${featuredPost.slug}`)}>
                  <article className="group mb-12 cursor-pointer">
                    {/* Mobile: Card Layout */}
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl md:hidden">
                      {/* Image */}
                      <div className="relative h-55 overflow-hidden">
                        <img
                          src={featuredPost.featured_image}
                          alt={featuredPost.alt || featuredPost.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-white/90 px-3 py-1 font-['Manrope'] text-xs font-medium text-[#004856] backdrop-blur-sm">
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-6">
                        <div>
                          <div className="mb-3 flex items-center gap-3 font-['Manrope'] text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {featuredPost.date}
                            </span>
                            <span>•</span>
                            <span>{featuredPost.read_time}</span>
                          </div>

                          <h3 className="mb-3 font-['Manrope'] text-xl leading-tight transition-colors group-hover:text-[#004856]">
                            {featuredPost.title}
                          </h3>

                          <p className="mb-4 line-clamp-2 font-['Manrope'] text-sm leading-relaxed font-light text-gray-600">
                            {featuredPost.short_description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-2">
                            <User size={14} className="text-gray-400" />
                            <span className="font-['Manrope'] text-sm text-gray-600">
                              {featuredPost.author}
                            </span>
                          </div>

                          <button className="text-[#004856] transition-transform group-hover:translate-x-1">
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Hero Layout */}
                    <div className="relative mb-6 hidden h-125 overflow-hidden rounded-3xl md:block">
                      <img
                        src={featuredPost.featured_image}
                        alt={featuredPost.alt || featuredPost.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-['Manrope'] text-sm font-medium text-[#004856] shadow-lg">
                          <TrendingUp size={14} />
                          Featured Article
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute right-0 bottom-0 left-0 p-6 md:p-8">
                        <div className="mb-4 flex items-center gap-4">
                          <span className="rounded-full bg-[#004856] px-3 py-1 font-['Manrope'] text-xs font-medium text-white">
                            {featuredPost.category}
                          </span>
                          <span className="flex items-center gap-2 font-['Manrope'] text-sm text-white/90">
                            <Calendar size={14} />
                            {featuredPost.date}
                          </span>
                          <span className="font-['Manrope'] text-sm text-white/90">
                            {featuredPost.read_time}
                          </span>
                        </div>

                        <h2 className="mb-3 font-['Poppins'] text-2xl leading-tight text-white md:text-4xl">
                          {featuredPost.title}
                        </h2>

                        <p className="mb-4 line-clamp-2 font-['Manrope'] text-base leading-relaxed text-white/80 md:text-lg">
                          {featuredPost.short_description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-white/80" />
                            <span className="font-['Manrope'] text-sm text-white/80">
                              {featuredPost.author}
                            </span>
                          </div>

                          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-['Manrope'] font-medium text-[#004856] transition-all hover:bg-gray-100">
                            Read Article
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              )}

              {/* Bento Grid - Mixed Size Cards */}
              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredPosts.slice(1).map((post, index) => (
                  <Link
                    key={post.id}
                    to={normalizePath(`/blog/${post.slug}`)}
                    className={`${index === 0 ? "md:col-span-2" : ""}`}
                  >
                    <article className="group h-full cursor-pointer">
                      <div
                        className={`grid ${index === 0 ? "md:grid-cols-2" : "grid-cols-1"} h-full gap-6 overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl`}
                      >
                        {/* Image */}
                        <div
                          className={`relative overflow-hidden ${index === 0 ? "h-75" : "h-55"}`}
                        >
                          <img
                            src={post.featured_image}
                            alt={post.alt || post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="rounded-full bg-white/90 px-3 py-1 font-['Manrope'] text-xs font-medium text-[#004856] backdrop-blur-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <div
                          className={`flex flex-col justify-between p-6 ${index === 0 ? "" : ""}`}
                        >
                          <div>
                            <div className="mb-3 flex items-center gap-3 font-['Manrope'] text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {post.date}
                              </span>
                              <span>•</span>
                              <span>{post.read_time}</span>
                            </div>

                            <h3
                              className={`mb-3 font-['Manrope'] leading-tight transition-colors group-hover:text-[#004856] ${index === 0 ? "text-2xl" : "text-xl"}`}
                            >
                              {post.title}
                            </h3>

                            <p
                              className={`mb-4 font-['Manrope'] leading-relaxed font-light text-gray-600 ${index === 0 ? "line-clamp-3 text-base" : "line-clamp-2 text-sm"}`}
                            >
                              {post.short_description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-gray-400" />
                              <span className="font-['Manrope'] text-sm text-gray-600">
                                {post.author}
                              </span>
                            </div>

                            <span className="inline-flex items-center gap-1 font-['Manrope'] text-sm font-medium text-[#004856] transition-all group-hover:gap-2">
                              Read
                              <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {filteredPosts.length > 6 && (
                <div className="mt-8 text-center">
                  <button className="rounded-full bg-black px-10 py-4 font-['Manrope'] font-medium text-white shadow-lg transition-all hover:bg-gray-800">
                    Load More Articles
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Trending Topics */}
                <div className="rounded-3xl bg-linear-to-br from-[#004856] to-[#003844] p-6 text-white">
                  <div className="mb-4 flex items-center gap-2">
                    <Calendar size={20} />
                    <h3 className="font-['Poppins'] text-xl">Recent Blogs</h3>
                  </div>
                  <div className="space-y-3">
                    {blogsData.slice(0, 5).map((post) => (
                      <Link
                        key={post.id}
                        to={normalizePath(`/blog/${post.slug}`)}
                        className="flex cursor-pointer flex-col gap-2 rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-colors hover:bg-white/20"
                      >
                        <span className="line-clamp-2 font-['Manrope'] text-sm">
                          {post.title}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <Calendar size={12} />
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="mb-3 font-['Poppins'] text-2xl">
                    Stay Updated
                  </h3>
                  <p className="mb-4 font-['Manrope'] text-sm leading-relaxed text-gray-600">
                    Get the latest insights delivered straight to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 font-['Manrope'] text-sm focus:ring-2 focus:ring-[#004856]/50 focus:outline-none"
                      value={newsLetterEmail}
                      onChange={(e) => setNewsLetterEmail(e.target.value)}
                    />
                    <button
                      onClick={() => handleSubmit(newsLetterEmail)}
                      disabled={isSendingMail}
                      className="w-full rounded-xl bg-[#004856] px-6 py-3 font-['Manrope'] font-medium text-white transition-colors hover:bg-[#003844]"
                    >
                      {isSendingMail ? (
                        <div className="flex items-center justify-center">
                          <Loader2 className="h-5 w-5 animate-spin text-white" />
                        </div>
                      ) : (
                        "Subscribe Now"
                      )}
                    </button>
                  </div>
                  <p className="mt-3 font-['Manrope'] text-xs text-gray-500">
                    Join 15,000+ industry professionals
                  </p>
                </div>

                {/* Popular Articles */}
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-4 font-['Poppins'] text-xl">
                    Popular This Week
                  </h3>
                  <div className="space-y-4">
                    {blogsData.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        to={normalizePath(`/blog/${post.slug}`)}
                        className="group flex cursor-pointer gap-4"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                          <img
                            src={post.featured_image}
                            alt={post.alt || post.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="line-clamp-2 font-['Manrope'] text-sm transition-colors group-hover:text-[#004856]">
                            {post.title}
                          </p>
                          <p className="mt-1 font-['Manrope'] text-xs text-gray-500">
                            {post.read_time}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-10/12 px-4 md:px-8">
          <h2 className="mb-8 font-['Poppins'] text-3xl md:text-4xl">
            Recent Articles
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {blogsData.slice(0, 3).map((article) => (
              <Link
                key={article.id}
                to={normalizePath(`/blog/${article.slug}`)}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.featured_image}
                    alt={article.alt || article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 font-['Manrope'] text-xs font-medium text-[#004856]">
                    {article.category}
                  </span>
                  <h3 className="mb-2 line-clamp-2 font-['Manrope'] text-xl transition-colors group-hover:text-[#004856]">
                    {article.title}
                  </h3>
                  <p className="line-clamp-2 font-['Manrope'] text-sm text-gray-600">
                    {article.short_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-[#272727] py-16 md:py-20">
        <div className="mx-auto max-w-10/12 px-4 text-center md:px-8">
          <h2 className="mb-4 font-['Poppins'] text-3xl leading-tight text-white md:text-5xl">
            Ready to Transform Your Operations?
          </h2>
          <p className="mb-8 font-['Manrope'] text-lg text-white/80">
            Explore our industrial solutions and discover how we can help drive
            your success
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to={normalizePath("/contact")}>
              <button className="rounded-full bg-white px-8 py-4 font-['Manrope'] font-medium text-black transition-colors hover:bg-gray-100">
                Get in Touch
              </button>
            </Link>
            <Link to={normalizePath("/services")}>
              <button className="rounded-full border-2 border-white px-8 py-4 font-['Manrope'] font-medium text-white transition-colors hover:bg-white/10">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Blog;
