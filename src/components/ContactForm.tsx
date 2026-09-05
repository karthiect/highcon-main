import { useRef, useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneNumberField from "./PhoneNumberField";
import type { EmailDraft } from "../helpers/buildEmailUrls";
import EmailClientDialog from "./EmailClientDialog";
import { toast } from "sonner";

const ContactForm = () => {
  const [emailDraft, setEmailDraft] = useState<EmailDraft | null>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim()]),
    ) as typeof formData;

    if (Object.values(trimmedFormData).some((value) => value.length < 1)) {
      toast("❌ Kindly fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedFormData.email)) {
      toast("❌ Kindly enter a valid email address.");
      return;
    }

    if (!isValidPhoneNumber(trimmedFormData.phone)) {
      toast("❌ Kindly enter a valid phone number.");
      return;
    }

    setFormData(trimmedFormData);
    setEmailDraft({
      to: import.meta.env?.VITE_SENDER_EMAIL?.trim() || "info@highcon.in",
      subject: `New enquiry from ${trimmedFormData.name} (${trimmedFormData.company})`,
      body: `Name: ${trimmedFormData.name}\nEmail: ${trimmedFormData.email}\nPhone: ${trimmedFormData.phone}\nCompany: ${trimmedFormData.company}\nProduct: ${trimmedFormData.product}\n\nMessage:\n${trimmedFormData.message}`,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-8 w-full max-w-10/12 rounded-[20px] border border-white bg-white/20 p-4 backdrop-blur-[6.8px] sm:mb-12 sm:rounded-[31px] sm:p-6 md:p-10 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Your Name*"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
            />

            <input
              type="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
            />
            <PhoneNumberField
              initialValue={formData.phone}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  phone: value.trim(),
                });
              }}
            />

            <select
              value={formData.product}
              onChange={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              className="w-full rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none focus:ring-2 focus:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
            >
              <option value="">Select Product*</option>
              <option>Idlers & Pulleys</option>
              <option>Cranes</option>
              <option>Tower Cranes</option>
              <option>Aerospace Components</option>
              <option>Winch Car</option>
            </select>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Your company name*"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
            />

            <textarea
              placeholder="Your Message*"
              rows={8}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full resize-none rounded-[10px] bg-gray-200 px-4 py-3 font-['Inter'] text-sm text-black outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-gray-400 sm:px-6 sm:py-4 sm:text-base md:text-lg"
            />

            <button
              type="submit"
              ref={submitRef}
              className="bg-opacity-44 hover:bg-opacity-70 rounded-[10px] bg-[#004856] px-6 py-2.5 font-['Poppins'] text-base font-bold text-white transition-all sm:px-8 sm:py-3 sm:text-lg md:text-xl"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <EmailClientDialog
        draft={emailDraft}
        onClose={() => setEmailDraft(null)}
        onRestoreFocus={() => submitRef.current?.focus()}
      />
    </>
  );
};

export default ContactForm;
