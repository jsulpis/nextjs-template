import getCurrentDateTime from "lambdas/getCurrentDateTime";
import { NextApiResponse } from "next";

const dateApi = (_, res: NextApiResponse) => {
  const date = getCurrentDateTime();

  res.status(200).json({ date });
};

export default dateApi;
