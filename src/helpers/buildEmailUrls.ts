import buildMailtoUrl from "./buildMailtoUrl";

export interface EmailDraft {
  to: string;
  subject: string;
  body: string;
}

export default function buildEmailUrls(draft: EmailDraft) {
  const query = (values: Record<string, string>) =>
    new URLSearchParams(values).toString().replace(/\+/g, "%20");

  return {
    mailto: buildMailtoUrl(draft),
    gmail: `https://mail.google.com/mail/?${query({ view: "cm", fs: "1", to: draft.to, su: draft.subject, body: draft.body })}`,
    outlook: `https://outlook.office.com/mail/deeplink/compose?${query({ to: draft.to, subject: draft.subject, body: draft.body })}`,
  };
}
