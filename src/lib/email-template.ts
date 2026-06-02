import { siteConfig } from "@/data/site-config";

// Brand palette (mirrors globals.css @theme tokens).
const BRAND = {
  indigo: "#2E3692",
  indigoDark: "#1A1F71",
  indigoDeep: "#0e1240",
  green: "#2D8B4E",
  charcoal: "#1E293B",
  slate: "#64748B",
  offWhite: "#F8FAFC",
  border: "#E2E8F0",
};

/**
 * Wraps body content in a branded, email-client-safe shell
 * (table layout + inline styles, no external images).
 */
export function renderBrandedEmail(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:${BRAND.offWhite}; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.offWhite}; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(15,18,64,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, ${BRAND.indigoDeep} 0%, ${BRAND.indigoDark} 45%, ${BRAND.indigo} 100%); padding:32px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <div style="display:inline-block; width:40px; height:40px; line-height:40px; text-align:center; background-color:${BRAND.green}; border-radius:10px; color:#ffffff; font-size:20px; font-weight:700;">U</div>
                  </td>
                  <td style="vertical-align:middle; padding-left:14px;">
                    <div style="color:#ffffff; font-size:18px; font-weight:800; letter-spacing:0.3px; line-height:1.1;">${siteConfig.companyName}</div>
                    <div style="color:rgba(255,255,255,0.6); font-size:11px; text-transform:uppercase; letter-spacing:2px; margin-top:3px;">${siteConfig.tagline}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px; color:${BRAND.charcoal}; font-size:15px; line-height:1.65;">
              ${bodyHtml}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color:${BRAND.offWhite}; border-top:1px solid ${BRAND.border}; padding:24px 40px;">
              <div style="color:${BRAND.charcoal}; font-size:13px; font-weight:700; margin-bottom:6px;">${siteConfig.companyName}</div>
              <div style="color:${BRAND.slate}; font-size:12px; line-height:1.7;">
                ${escapeHtml(siteConfig.address)}<br/>
                Phone: <a href="tel:${siteConfig.phone}" style="color:${BRAND.indigo}; text-decoration:none;">${escapeHtml(siteConfig.phone)}</a> &nbsp;&bull;&nbsp;
                Email: <a href="mailto:${siteConfig.email}" style="color:${BRAND.indigo}; text-decoration:none;">${escapeHtml(siteConfig.email)}</a>
              </div>
            </td>
          </tr>
        </table>
        <div style="color:${BRAND.slate}; font-size:11px; margin-top:16px;">&copy; ${siteConfig.companyName}. All rights reserved.</div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export { BRAND };
