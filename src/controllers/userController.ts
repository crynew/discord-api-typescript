import { Request, Response } from 'express';
import { getUserFromDiscord } from '../services/discordService';

export const getUserProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const discordUser = await getUserFromDiscord(id);
    res.json(discordUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user from Discord' });
  }
};