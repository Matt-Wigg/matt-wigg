// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Matthew Wigglesworth",
    age: 33,
    website: "http://www.mattwigg.com/",
    portfolio: "http://www.github.com/matt-wigg/",
    smile: ":)",
  });
}
