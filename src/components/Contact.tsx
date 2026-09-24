import { useEffect, useId, useState } from "react";
import { Check, Copy, LoaderCircle, Send } from "lucide-react";
import { contactActions, contactChannels, profile } from "../data/portfolio";
import { submitContactForm, type ContactFormData } from "../utils/contact";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Toast } from "./ui/Toast";

type Errors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: ContactFormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Please enter your name.";
  if (!data.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(data.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!data.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [toast, setToast] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const formId = useId();

  useEffect(() => {
    if (!toast && !copied) return;
    const timer = window.setTimeout(() => {
      setToast(null);
      setCopied(false);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [toast, copied]);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    const result = await submitContactForm(form);
    if (result.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("idle");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setToast("Email copied!");
    } catch {
      setToast("Copy failed — please copy manually");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="I'm open to connecting with professionals, mentors, fellow students, and organizations for learning and internship opportunities."
          titleId="contact-title"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — contact details */}
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactChannels.map((channel) => (
                <li key={channel.label} className="card card-hover p-4">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                    >
                      <channel.icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-slate-500">
                        {channel.label}
                      </p>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="mt-0.5 block truncate text-sm font-medium text-ink-900 hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-300"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-ink-900 dark:text-slate-200">
                          {channel.value}
                        </p>
                      )}
                    </div>
                    {channel.action === "copy" && (
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label={`Copy email address (${profile.email})`}
                        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-slate-200 text-ink-500 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-400 dark:hover:text-brand-300"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-brand-600" aria-hidden="true" />
                        ) : (
                          <Copy className="h-4 w-4" aria-hidden="true" />
                        )}
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              {contactActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={cn(
                    "btn",
                    action.label === "LinkedIn" ? "btn-primary" : "btn-secondary"
                  )}
                >
                  <action.icon className="h-4 w-4" aria-hidden="true" />
                  {action.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right — contact form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-labelledby={`${formId}-form-title`}
              className="card p-6 sm:p-8"
            >
              <h3
                id={`${formId}-form-title`}
                className="font-display text-lg font-bold text-ink-900 dark:text-white"
              >
                Send a message
              </h3>
              <p className="mt-1 text-sm text-ink-500 dark:text-slate-500">
                Fill in the form and I&apos;ll get back to you as soon as
                possible.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label" htmlFor={`${formId}-name`}>
                    Name <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    className="input"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                  />
                  {errors.name && (
                    <p
                      id={`${formId}-name-error`}
                      className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="label" htmlFor={`${formId}-email`}>
                    Email <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    className="input"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                  />
                  {errors.email && (
                    <p
                      id={`${formId}-email-error`}
                      className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="label" htmlFor={`${formId}-subject`}>
                    Subject
                  </label>
                  <input
                    id={`${formId}-subject`}
                    className="input"
                    value={form.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    placeholder="What is this about?"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="label" htmlFor={`${formId}-message`}>
                    Message <span className="text-brand-600">*</span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    rows={5}
                    className="input resize-y"
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Write your message..."
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={
                      errors.message ? `${formId}-message-error` : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id={`${formId}-message-error`}
                      className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <LoaderCircle
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              <div aria-live="polite" className="mt-4">
                {status === "sent" && (
                  <div className="rounded-xl border border-brand-200 bg-brand-50 p-4 dark:border-brand-500/30 dark:bg-brand-500/10">
                    <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 dark:text-brand-300">
                      <Check className="h-4 w-4" aria-hidden="true" />
                      Thank you! Your message has been submitted.
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-600 dark:text-slate-400">
                      Note: this portfolio does not yet have an email service
                      connected. The submission handler in{" "}
                      <code className="rounded bg-slate-100 px-1 py-0.5 text-[11px] dark:bg-white/10">
                        src/utils/contact.ts
                      </code>{" "}
                      can be wired to Formspree, EmailJS, Firebase, Supabase or a
                      custom API to deliver messages.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      {toast && <Toast message={toast} />}
    </section>
  );
}
