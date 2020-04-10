import getCurrentDateTime from "lambdas/getCurrentDateTime";
import { NextApiResponse } from "next";

export default (_, res: NextApiResponse) => {
  const date = getCurrentDateTime();

  res.status(200).json({ date });
};
