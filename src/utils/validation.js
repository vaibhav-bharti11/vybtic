export function validateBusinessEmail(value) {
  const email = value.trim();
  const match = email.match(/^([^\s@]+)@([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*)\.([A-Za-z]{2,})$/);
  return Boolean(match && /[A-Za-z]/.test(match[1]));
}

export function validatePhone(value) {
  const phone = value.trim();
  if (!phone) return true;
  if (!/^[+()\d\s-]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
