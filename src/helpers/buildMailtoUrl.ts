interface MailtoOptions {
  to: string;
  subject: string;
  body: string;
}

const buildMailtoUrl = ({ to, subject, body }: MailtoOptions) => {
  const params = new URLSearchParams({ subject, body });

  return `mailto:${to.trim()}?${params.toString().replace(/\+/g, "%20")}`;
};

export default buildMailtoUrl;
