import { calculateSubtotalFromItems } from "../../lib/orders";

/**
 * @swagger
 * /api/cart:
 *  post:
 *    summary: Calculates the subtotal of the cart
 *    tags: [Cart]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              discount:
 *                type: number
 *              tax:
 *                type: number
 *              items:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    quantity:
 *                      type: number
 *                    price:
 *                      type: number
 *    responses:
 *      200:
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                subtotal:
 *                  type: number
 *                tax:
 *                  type: number
 *                discount:
 *                  type: number
 *                total:
 *                  type: number
 *                items:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      name:
 *                        type: string
 *                      quantity:
 *                        type: number
 *                      price:
 *                        type: number
 */
export default function handler(req, res) {
  const { discount, tax, items } = JSON.parse(req.body);

  const subtotal = calculateSubtotalFromItems(items);

  let total = subtotal;

  if (discount > 0) {
    total = total - total * discount;
  }

  if (tax > 0) {
    total = total + total * tax;
  }

  res.status(200).json({
    items,
    discount,
    tax,
    subtotal,
    total,
  });
}
