import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const DISCORD_API_URL = 'https://discord.com/api/v9';
const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  throw new Error('Discord bot token is not defined in the environment variables');
}

export const getUserFromDiscord = async (userId: string) => {
  const url = `${DISCORD_API_URL}/users/${userId}/profile`;
  const response = await axios.get(url, {
    headers: {
      Authorization: `${TOKEN}`,
    },
  });
  return response.data;
};
