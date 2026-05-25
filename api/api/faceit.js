export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const path = req.query.path || '';
  const url = `https://open.faceit.com/data/v4${path}`;

  try {
    const r = await fetch(url, {
      headers: {
        'Authorization': 'Bearer 04409b2d-8634-4dcc-a7e9-80bc9ef0d3d2',
        'Accept': 'application/json'
      }
    });
    const data = await r.json();
    res.status(r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
