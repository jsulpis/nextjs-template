import { NextApiResponse } from "next";

export default (_, res: NextApiResponse) => {
  const date = new Date(global.Date.now())
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  res.status(200).json({ date });
};
