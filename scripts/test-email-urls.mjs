import assert from "node:assert/strict";
import { createServer } from "vite";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const { default: buildEmailUrls } = await server.ssrLoadModule(
  "/src/helpers/buildEmailUrls.ts",
);
await server.close();
const draft = {
  to: "info@highcon.in",
  subject: 'New enquiry from Jane (ABC & Sons Pvt. Ltd.) — "Quotation"',
  body: 'Company: ABC & Sons Pvt. Ltd.\n\nMessage:\nHello,\nWe need a quotation for a tower crane.\n"50%" + café & equipment? #1',
};
const urls = buildEmailUrls(draft);
for (const [client, value] of Object.entries(urls)) {
  const url = new URL(value);
  assert.equal(
    client === "mailto" ? url.pathname : url.searchParams.get("to"),
    draft.to,
  );
  assert.equal(
    url.searchParams.get(client === "gmail" ? "su" : "subject"),
    draft.subject,
  );
  assert.equal(url.searchParams.get("body"), draft.body);
}
assert.ok(urls.mailto.startsWith("mailto:info@highcon.in?"));
assert.ok(urls.gmail.startsWith("https://mail.google.com/mail/?"));
assert.equal(new URL(urls.gmail).searchParams.get("view"), "cm");
assert.ok(
  urls.outlook.startsWith("https://outlook.office.com/mail/deeplink/compose?"),
);
console.log(
  "PASS: all three compose URLs preserve recipient, subject, multiline body, and special characters.",
);
