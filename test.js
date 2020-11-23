const reg = new RegExp(`<option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>`);
const html = " <option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>          <option>&lt;&gt;&quot;&#039;&amp; -APNS -</option>       "

console.log(html.match(reg));

"<option>&lt;&gt;&quot;&#039;&amp; - APNS - </option>"
"<option>&lt;&gt;&quot;&#039;&amp; -APNS -</option>"

"<option>&lt;&gt;&quot;&#039;&amp; -&nbspAPNS -&nbsp</option>"