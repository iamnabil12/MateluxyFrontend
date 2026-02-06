async function testFetch() {
    try {
        console.log('Fetching properties...');
        const res = await fetch('http://localhost:6001/properties?limit=5');
        console.log('Status:', res.status);
        if (!res.ok) {
            console.error('Text:', await res.text());
            return;
        }
        const json = await res.json();
        console.log('Response Keys:', Object.keys(json));
        if (json.data) {
            console.log('Data Length:', json.data.length);
            console.log('First Item:', JSON.stringify(json.data[0], null, 2));
        } else {
            console.log('No .data found in response');
            console.log('Full JSON:', JSON.stringify(json, null, 2));
        }
    } catch (error) {
        console.error('Fetch Failed:', error);
    }
}

testFetch();
