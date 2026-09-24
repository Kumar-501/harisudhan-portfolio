export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

/**
 * Contact form submission handler.
 *
 * NOTE: This portfolio is a static site with no backend configured yet, so this
 * function currently validates locally and resolves successfully without
 * sending an email. To make it deliver messages, replace the body below with
 * one of the following integrations:
 *
 * 1) Formspree:
 *    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *      method: "POST",
 *      headers: { "Content-Type": "application/json" },
 *      body: JSON.stringify(data),
 *    });
 *    return res.ok ? { ok: true } : { ok: false, error: "Submission failed." };
 *
 * 2) EmailJS:
 *    import emailjs from "@emailjs/browser";
 *    await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_PUBLIC_KEY");
 *    return { ok: true };
 *
 * 3) Firebase / Supabase / custom API:
 *    POST the `data` object to your endpoint and return { ok: true } on success.
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResult> {
  // Simulated network delay while no email service is connected.
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.info(
    "[contact] Form submission captured (no email service configured yet):",
    data
  );
  return { ok: true };
}
