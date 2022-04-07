// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // redirect to success get
  res.writeHead(302, {
    Location: '/success',
  });
}
