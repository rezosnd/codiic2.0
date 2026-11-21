"use client";

import React from "react";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <PageShell>
      <LegalPage
        crumbLabel="Terms of Service"
        badge="Legal • Terms of Service"
        title="Terms of Service"
        updated="Last updated: January 2026"
        intro="These Terms of Service ('Terms') govern your access to and use of the CODIIC platform, including the website builder, omnichannel inbox, CRM 360, AI automation, and related services. By creating a workspace, you agree to these Terms."
        sections={[
          {
            id: "acceptance",
            title: "Acceptance of Terms",
            body: (
              <>
                <p>
                  By accessing or using CODIIC, you confirm that you are authorized to act on behalf of
                  the business under which the workspace is registered, and that you accept these Terms
                  together with our Privacy Policy and any plan-specific terms presented at purchase.
                </p>
                <p>
                  If you do not agree, do not use the Platform. We may update these Terms with notice;
                  continued use after the effective date constitutes acceptance.
                </p>
              </>
            ),
          },
          {
            id: "account-responsibilities",
            title: "Account & Workspace Responsibilities",
            body: (
              <>
                <p>
                  You are responsible for maintaining the confidentiality of your workspace credentials,
                  for all activity under your account, and for keeping billing and contact information
                  current.
                </p>
                <p>
                  You must promptly revoke access for departing team members and configure role-based
                  permissions appropriate to each agent. Notify us immediately of any unauthorized use
                  at <strong>security@codiic.com</strong>.
                </p>
              </>
            ),
          },
          {
            id: "acceptable-use",
            title: "Acceptable Use & Anti-Spam Messaging Policy",
            body: (
              <>
                <p>
                  CODIIC is a business communication platform — <strong>spam is strictly
                  prohibited.</strong> You may only message end customers who have given valid opt-in
                  consent, and you must honor opt-out requests immediately.
                </p>
                <p>You may not use the Platform to:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Send unsolicited bulk messages or purchased-list campaigns.</li>
                  <li>Violate Meta's WhatsApp Business Messaging or Commerce policies.</li>
                  <li>Distribute unlawful, deceptive, or harmful content.</li>
                  <li>Abuse AI voice calling for robocalls without lawful consent.</li>
                  <li>Attempt to access other workspaces or disrupt the service.</li>
                </ul>
                <p>
                  Violations may result in messaging restrictions, workspace suspension, or termination,
                  in addition to any enforcement by Meta or carriers.
                </p>
              </>
            ),
          },
          {
            id: "billing-plans",
            title: "Subscription Billing, Free & Pro Plans",
            body: (
              <>
                <p>
                  CODIIC offers a Free Forever plan and paid Starter and Pro subscriptions billed
                  monthly or annually. Annual plans are discounted as displayed at checkout; prices are
                  exclusive of applicable taxes unless stated otherwise.
                </p>
                <p>
                  <strong>Meta conversation charges</strong> are billed to you by Meta at standard
                  country rates — CODIIC applies zero platform markup on WhatsApp messaging.
                </p>
                <p>
                  You may upgrade, downgrade, or cancel from workspace settings. Cancellation takes
                  effect at the end of the current billing period; we do not provide prorated refunds
                  for partial periods except where required by law.
                </p>
              </>
            ),
          },
          {
            id: "intellectual-property",
            title: "Intellectual Property",
            body: (
              <>
                <p>
                  You retain all rights to the content, data, and creative assets you upload or publish
                  through the Platform. You grant CODIIC a limited license to host and process that
                  content solely to provide the services.
                </p>
                <p>
                  CODIIC retains all rights in the Platform itself — the software, templates, designs,
                  and documentation. You may not copy, resell, or white-label the Platform without a
                  separate written agreement.
                </p>
              </>
            ),
          },
          {
            id: "liability",
            title: "Limitation of Liability",
            body: (
              <>
                <p>
                  The Platform is provided "as is". To the maximum extent permitted by law, CODIIC is
                  not liable for indirect, incidental, or consequential damages — including lost
                  profits, lost data, or business interruption — arising from your use of the Platform.
                </p>
                <p>
                  Our aggregate liability for any claim is limited to the amounts you paid to CODIIC in
                  the twelve months preceding the claim. Nothing in these Terms limits liability that
                  cannot lawfully be limited.
                </p>
              </>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
