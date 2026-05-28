(async () => {
  try {
    const base = 'http://localhost:5000';
    const res = await fetch(`${base}/api/services/seed`, { method: 'POST' });
    const body = await res.json();
    console.log('Seed status:', res.status);
    console.log(JSON.stringify(body, null, 2));
  } catch (err) {
    console.error('Seeding error:', err);
  }
})();
