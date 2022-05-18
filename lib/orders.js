export function calculateSubtotalFromItems(items) {
  return items.reduce(
    (subtotal, { price, quantity }) => subtotal + price * quantity,
    0
  );
}
