import { NextApiRequest, NextApiResponse } from 'next';
import { service } from '../../utils/data';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ service });
};
