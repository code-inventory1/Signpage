import { rest } from "msw";
export const mockData=[ {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "anton.petrov@reqres.in",
    first_name: "Anton",
    id:1,
    last_name: "Petrov",
  }]
export const Handlers = [
  rest.get("https://reqres.in/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        mockData
      )
    );
  }),
];
