import prisma from '../../../lib/prisma';

// PUT /api/publish/:id
export default async function handle(req, res) {
  const letterId = req.query.id;
  const letter = await prisma.letter.update({
    where: { id: letterId },
    data: { published: true },
  });
  res.json(letter);
}
