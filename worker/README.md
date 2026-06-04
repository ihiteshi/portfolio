# Contact-form submission counter (Cloudflare Worker)

A tiny serverless counter that you own. It stores the running total of
contact-form submissions in a Cloudflare KV namespace, so the number survives
site redeploys and is shared across all visitors. The front-end sends the new
total to EmailJS as `contact_number`, so each email tells you which submission
it was.

## One-time setup

You need a free [Cloudflare account](https://dash.cloudflare.com/sign-up).
Run everything below **from inside this `worker/` folder**.

1. **Log in to Cloudflare** (opens a browser):

   ```sh
   npx wrangler login
   ```

2. **Create the KV namespace** and copy the printed `id`:

   ```sh
   npx wrangler kv namespace create COUNTER
   ```

   Paste that id into `wrangler.toml`, replacing `REPLACE_WITH_YOUR_KV_NAMESPACE_ID`.

3. **(Optional) Seed the starting number** — e.g. if you've already had 12
   people reach out and want the count to continue from there:

   ```sh
   npx wrangler kv key put --binding=COUNTER --remote "contact_submissions" "12"
   ```

4. **Deploy the worker** and copy the URL it prints
   (looks like `https://portfolio-contact-counter.<your-subdomain>.workers.dev`):

   ```sh
   npx wrangler deploy
   ```

5. **Tell the website about it.** In the project root, create a file named
   `.env` (copy from `.env.example`) and set:

   ```
   VITE_COUNTER_URL=https://portfolio-contact-counter.<your-subdomain>.workers.dev
   ```

   Then rebuild/redeploy the site (`npm run deploy`).

That's it. If `VITE_COUNTER_URL` is missing or the worker is ever unreachable,
the contact form still works — it just sends the email without a count.

## Checking the total anytime

Open the worker URL in a browser (a plain GET) to see the current total without
incrementing it, e.g. `{ "count": 12 }`.

## How counting works

The count is incremented when the form is submitted (so the number can be
embedded in the email). If an email send fails after that, the count can be off
by one — fine for a personal contact form. The EmailJS template must reference
`{{contact_number}}` (it already does).
