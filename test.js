const reg = new RegExp(`<option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>`);
const html = " <option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>          <option>&lt;&gt;&quot;&#039;&amp; -APNS -</option>       "

console.log(html.match(reg));

"<option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>"
"<option>&lt;&gt;&quot;&#039;&amp; -APNS -</option>"

"<option>&lt;&gt;&quot;&#039;&amp; -&nbspAPNS -&nbsp</option>"

const str1 ="eSZz8SeTdS0O_VZEoP3E7rsKP8Edh9JtVC_mX3tvvnymmfmOZGgk6ArVrfJcztWGyLbUTOeW01QERdAkS0yLREUd54OHtOLhYZgE7ZGIKKCSlQbu0-7owi6VfziYT9b-";

console.log(str1.length);