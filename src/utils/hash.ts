const bcrypt = require("bcrypt");

async function hashString(
  input: string,
  saltRounds: number = 10
): Promise<string> {
  const hashedString = await bcrypt.hash(input, saltRounds);
  return hashedString;
}

async function validateHash(
  input: string,
  hashedString: string
): Promise<boolean> {
  const isValid = await bcrypt.compare(input, hashedString);
  return isValid;
}

export { hashString, validateHash };
