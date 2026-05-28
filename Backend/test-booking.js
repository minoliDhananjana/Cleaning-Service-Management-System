(async () => {
  try {
    const base = 'http://localhost:5000';
    const servicesRes = await fetch(`${base}/api/services`);
    const services = await servicesRes.json();
    console.log('Services count:', services.length);
    if (!services.length) return console.log('No services to test');

    const serviceId = services[0]._id || services[0].id;
    const booking = {
      serviceId,
      date: '2026-06-01',
      time: '09:00',
      customerName: 'Test User',
      email: 'test@example.com',
      phone: '0771234567',
      address: '123 Test St, Colombo'
    };

    console.log('Posting booking:', booking);
    const postRes = await fetch(`${base}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });

    const body = await postRes.text();
    console.log('Status:', postRes.status);
    console.log('Response:', body);
  } catch (err) {
    console.error('Test script error:', err);
  }
})();
