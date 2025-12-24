import { rest } from "msw";

export const Domain_handlers1 = [
  console.log("api hitted-----------------------"),
  rest.get("http://localhost:3004/Domains", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          Domain_name: "sad",
        },
        {
          Domain_name: "qwe",
        },
      ])
    );
  }),
];

export const Domain_handlers2 = [
  rest.post("http://localhost:3004/Domains",
  (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json([
        {

          Domain_name: "sarthak",
          Owner_name: "modi",
          tag: [],
        }
      ])
    );
  }),
];