import cart from "../../pages/api/cart";

test("calculates order total ", () => {
  const req = {
    body: JSON.stringify({
      discount: 0.2,
      tax: 0.6,
      items: [
        {
          id: 1,
          price: 19.99,
          quantity: 2,
        },
        {
          id: 2,
          price: 43.49,
          quantity: 1,
        },
      ],
    }),
  };

  const json = jest.fn();
  const status = jest.fn(() => ({ json }));

  const res = {
    status,
  };
  cart(req, res);

  //console.log(status.mock.calls[0][0]);

  expect(status.mock.calls[0][0]).toEqual(200);
  expect(json.mock.calls[0][0].subtotal).toEqual(83.47);
});
