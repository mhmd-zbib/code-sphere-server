/**
 * Hashing for passwords and sensitive data
 */

const bcrypt = require("bcrypt");

/**
 * Hash the corresponding string with the specified salt rounds
 *
 * @param input
 * @param saltRounds
 * @returns
 */
async function hashString(
  input: string,
  saltRounds: number = 10
): Promise<string> {
  const hashedString = await bcrypt.hash(input, saltRounds);
  return hashedString;
}

/**
 * Check hash of the code
 *
 * @param input the user enters
 * @param hashedString the one to compare with
 * @returns
 */
async function validateHash(
  input: string,
  hashedString: string
): Promise<boolean> {
  const isValid = await bcrypt.compare(input, hashedString);
  return isValid;
}

export { hashString, validateHash };
