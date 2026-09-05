import * as Dialog from "@radix-ui/react-dialog";
import { Mail } from "lucide-react";
import buildEmailUrls, { type EmailDraft } from "../helpers/buildEmailUrls";

export default function EmailClientDialog({
  draft,
  onClose,
  onRestoreFocus,
}: {
  draft: EmailDraft | null;
  onClose: () => void;
  onRestoreFocus: () => void;
}) {
  const urls = draft ? buildEmailUrls(draft) : null;
  const actionClass =
    "rounded-[10px] border border-[#004856] px-4 py-3 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#004856]";

  return (
    <Dialog.Root
      open={!!draft}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/60" />
        <Dialog.Content
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            onRestoreFocus();
          }}
          className="fixed top-1/2 left-1/2 z-[101] max-h-[90dvh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[20px] bg-white p-6 font-['Inter'] text-[#004856] shadow-xl sm:p-8"
        >
          <Mail aria-hidden="true" className="mb-4 h-8 w-8" />
          <Dialog.Title className="text-2xl font-bold">
            Your enquiry is ready
          </Dialog.Title>
          <Dialog.Description className="mt-3 text-sm text-gray-600">
            Your email draft is ready. Choose how you want to continue, then
            review and send it in your email app.
          </Dialog.Description>
          {urls && (
            <>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  className={`${actionClass} hover:bg-gray-100`}
                  onClick={() => {
                    window.open(urls.gmail, "_blank", "noopener,noreferrer");
                  }}
                >
                  Open Gmail
                </button>
                <button
                  type="button"
                  className={`${actionClass} hover:bg-gray-100`}
                  onClick={() => {
                    window.open(urls.outlook, "_blank", "noopener,noreferrer");
                  }}
                >
                  Open Outlook
                </button>
                <button
                  type="button"
                  className={`${actionClass} bg-[#004856] text-white hover:bg-[#003844]`}
                  onClick={() => {
                    window.location.href = urls.mailto;
                  }}
                >
                  Others
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                If a new tab does not open, continue in this tab with{" "}
                <a
                  className="rounded underline focus-visible:outline-2"
                  href={urls.gmail}
                >
                  Gmail
                </a>{" "}
                or{" "}
                <a
                  className="rounded underline focus-visible:outline-2"
                  href={urls.outlook}
                >
                  Outlook
                </a>
                .
              </p>
            </>
          )}
          <Dialog.Close asChild>
            <button
              type="button"
              className={`${actionClass} mt-6 hover:bg-gray-100`}
            >
              Cancel
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
