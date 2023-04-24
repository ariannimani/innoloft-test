type Product = {
  [key: string]: any;
};

export type MyElement = {
  name: string;
  items: any[];
  input: string;
};

export const processProductDetails = (
  product: Product,
  allowedKeys: string[]
): MyElement[] => {
  const elements: MyElement[] = [];
  for (const key in product) {
    if (allowedKeys.includes(key)) {
      let elementName = key;
      // Capitalize first letter and separate words with spaces
      elementName =
        key.charAt(0).toUpperCase() +
        key.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");

      let inputType = "text"; // default input type is text
      if (key === "trl") {
        inputType = "select"; // set input type to select for key "trl"
      } else if (key === "businessModels" || key === "categories") {
        inputType = "category";
      }

      if (Array.isArray(product[key])) {
        elements.push({
          name: elementName,
          items: product[key],
          input: inputType,
        });
      } else {
        const id = product[key].id ? product[key].id : 1;
        const name = product[key].name ? product[key].name : product[key];
        elements.push({
          name: elementName,
          items: [{ id, name }],
          input: inputType,
        });
      }
    }
  }
  return elements;
};
