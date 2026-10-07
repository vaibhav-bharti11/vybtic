export const LIMITS = { name: [2, 80], organization: [2, 100], email: 254, phone: [7, 15], message: [10, 2000] };

const CONTROL_CHARS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
const NAME = /^\p{L}[\p{L}\p{M}\s.'’-]*$/u;
const ORGANIZATION = /^[\p{L}\p{N}][\p{L}\p{M}\p{N}\s&.,'’()/+#@-]*$/u;
const EMAIL_LOCAL = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const DOMAIN_LABEL = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;
const TLD = /^[A-Za-z]{2,24}$/;
const PHONE_CHARS = /^\+?[\d\s().-]+$/;

const clean = (value) => String(value ?? '').normalize('NFC').replace(/\s+/g, ' ').trim();

/** Each validator returns { value, error }. `value` is the cleaned value to submit. */
export function validateName(raw) {
  const value = clean(raw);
  const [min, max] = LIMITS.name;
  if (!value) return { value, error: 'Enter your name.' };
  if (value.length < min) return { value, error: 'Your name must be at least 2 characters.' };
  if (value.length > max) return { value, error: `Your name must be ${max} characters or fewer.` };
  if (!NAME.test(value) || (value.match(/\p{L}/gu) || []).length < 2) return { value, error: 'Use letters only. Spaces, hyphens, apostrophes and full stops are fine.' };
  return { value, error: '' };
}

export function validateOrganization(raw) {
  const value = clean(raw);
  const [min, max] = LIMITS.organization;
  if (!value) return { value, error: 'Enter your organization.' };
  if (value.length < min) return { value, error: 'The organization name must be at least 2 characters.' };
  if (value.length > max) return { value, error: `The organization name must be ${max} characters or fewer.` };
  if (!ORGANIZATION.test(value)) return { value, error: 'Use letters, numbers and common punctuation (& . , - ( ) /) only.' };
  return { value, error: '' };
}

export function validateEmail(raw) {
  const value = String(raw ?? '').trim().toLowerCase();
  if (!value) return { value, error: 'Enter your email address.' };
  const invalid = { value, error: 'Enter a valid email address, for example name@company.com.' };
  if (value.length > LIMITS.email || /\s/.test(value) || CONTROL_CHARS.test(value)) return invalid;
  const parts = value.split('@');
  if (parts.length !== 2) return invalid;
  const [local, domain] = parts;
  if (!local || local.length > 64 || !EMAIL_LOCAL.test(local)) return invalid;
  const labels = domain.split('.');
  if (labels.length < 2 || !labels.every(label => DOMAIN_LABEL.test(label)) || !TLD.test(labels[labels.length - 1])) return invalid;
  return { value, error: '' };
}

/** Optional. Accepts digits with an optional leading +, spaces, hyphens, dots and brackets. */
export function validatePhone(raw) {
  const text = String(raw ?? '').trim();
  if (!text) return { value: '', error: '' };
  const invalid = (error) => ({ value: text, error });
  if (!PHONE_CHARS.test(text) || (text.match(/\(/g) || []).length !== (text.match(/\)/g) || []).length) return invalid('Use digits only, with an optional + at the start. Spaces, hyphens and brackets are fine.');
  const digits = text.replace(/\D/g, '');
  const [min, max] = LIMITS.phone;
  if (digits.length < min) return invalid('That phone number looks too short. Include the full number with the country code.');
  if (digits.length > max) return invalid('That phone number looks too long. Use 15 digits or fewer, including the country code.');
  if (/^(\d)\1+$/.test(digits)) return invalid('Enter a real phone number.');
  if (text.startsWith('+91') && !/^[2-9]\d{9}$/.test(digits.slice(2))) return invalid('Indian numbers need 10 digits after +91.');
  const value = text.startsWith('+') ? `+${digits}` : digits;
  return { value, error: '' };
}

export function validateMessage(raw) {
  const value = String(raw ?? '').normalize('NFC').replace(/\r\n?/g, '\n').replace(CONTROL_CHARS, '').trim();
  const [min, max] = LIMITS.message;
  if (!value) return { value, error: 'Enter your message.' };
  if (value.length < min || !/\p{L}/u.test(value)) return { value, error: 'Add a little more detail so we can respond. Use at least 10 characters.' };
  if (value.length > max) return { value, error: `Keep your message to ${max} characters or fewer (it is ${value.length} now).` };
  return { value, error: '' };
}

/** A select must hold one of its own listed options. `allowed` includes '' where the field is optional. */
export function validateChoice(raw, allowed, label) {
  const value = String(raw ?? '');
  return allowed.includes(value) ? { value, error: '' } : { value, error: `Choose a ${label} from the list.` };
}

/**
 * Validates a full enquiry; returns cleaned values and an errors map keyed by field name.
 * @param {Record<string, string>} values
 * @param {{ enquiryTypes?: string[], products?: string[] | null }} [options]
 */
export function validateEnquiry(values, { enquiryTypes, products = null } = {}) {
  /** @type {Record<string, { value: string, error: string }>} */
  const checks = {
    name: validateName(values.name),
    organization: validateOrganization(values.organization),
    email: validateEmail(values.email),
    phone: validatePhone(values.phone),
    message: validateMessage(values.message),
  };
  if (enquiryTypes) checks.enquiryType = validateChoice(values.enquiryType, enquiryTypes, 'topic');
  if (products) checks.selectedProduct = validateChoice(values.selectedProduct ?? '', ['', ...products], 'product');
  const cleaned = {};
  const errors = {};
  for (const [field, { value, error }] of Object.entries(checks)) {
    cleaned[field] = value;
    if (error) errors[field] = error;
  }
  return { values: { ...values, ...cleaned }, errors, valid: Object.keys(errors).length === 0 };
}
