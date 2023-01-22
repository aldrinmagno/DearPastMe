// pages/api/write-to-your-past-self/[id].ts

import prisma from '../../../lib/prisma';

// DELETE /api/write-to-your-past-self/:id
export default async function handle(req, res) {
  const letterId = req.query.id;
  if (req.method === 'DELETE') {
    const letter = await prisma.letter.delete({
      where: { id: letterId },
    });
    res.json(letter);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
