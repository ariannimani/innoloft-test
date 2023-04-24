export const convertToCamelCase = (str: string) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  if (!str) {
    return "";
  }

  // Remove spaces from the input string
  str = str.replace(/\s+/g, "");

  return str.charAt(0).toLowerCase() + str.slice(1);
};
