import { NextApiResponse } from "next";

export default (_, res: NextApiResponse) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  res.status(200).json({ date });
};
