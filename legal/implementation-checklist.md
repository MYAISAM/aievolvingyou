# Legal Pages — Implementation Checklist

---

## Documents and their URLs

| Document | Deploy at |
|---|---|
| Terms of Business v3 | aievolvingyou.com/terms |
| Privacy Policy v3 | aievolvingyou.com/privacy |
| Terms of Use v2 | aievolvingyou.com/terms-of-use |

---

## Footer links required

### coach.aievolvingyou.com footer
- Terms of Business — links to aievolvingyou.com/terms
- Privacy Policy — links to aievolvingyou.com/privacy

### aievolvingyou.com footer
- Terms of Business — links to /terms
- Privacy Policy — links to /privacy
- Terms of Use — links to /terms-of-use

### displaced.aievolvingyou.com footer
- Terms of Use — links to aievolvingyou.com/terms-of-use
- Privacy Policy — links to aievolvingyou.com/privacy

---

## Checkout checkbox (coach app — build into App.jsx)

This must appear on the paywall screen, above the payment buttons, before the user proceeds to Stripe. It is a legal requirement.

**Checkbox label wording:**

> I agree to start my paid Interview Coach session immediately. I understand I can't cancel for a change of mind once the session starts, and this does not affect my rights if the product is faulty or not as described.

Below the checkbox, add a line:

> By continuing, you agree to our [Terms of Business] and [Privacy Policy].

The single session and bundle payment buttons must be **disabled until the box is ticked**. Once ticked, buttons activate normally.

---

## VAT wording check

Search across all site copy, landing pages, and Stripe product descriptions for any mention of:
- "inc VAT"
- "including VAT"
- "exclusive of VAT"
- "VAT will be added"
- "+ VAT"

Replace all instances with:

> Prices are shown in GBP. We are not currently VAT registered, so VAT is not charged.

Or in short-form contexts (pricing cards etc.):

> No VAT charged.

---

## Privacy policy link placement

Beyond the footer, the privacy policy link should also appear:
- On the coach app sign-in screen (near the magic link email field)
- On the coach app payment/paywall screen (near the checkout checkbox)
- On any contact form on the main site

---

## Support email

All three documents reference man@aievolvingyou.com as the contact for data requests, refunds, and complaints. Confirm this inbox is monitored.

---

## Things NOT to invent or add

- Do not add a VAT registration number (you are not VAT registered)
- Do not add a Companies House number (you are a sole trader, not a limited company)
- Do not add an ICO registration number unless you have registered with the ICO
- The mailbox reference 168860 is a virtual office customer reference only — it is not a company or registration number
