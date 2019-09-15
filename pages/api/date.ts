import getCurrentDateTime from "infrastructure/date";
import { NextApiResponse } from "next";

export default (_, res: NextApiResponse) => {
  const date = getCurrentDateTime();

  res.status(200).json({ date });
};
