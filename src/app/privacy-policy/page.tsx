"use client";

import React from "react";
import { PageShell } from "@/components/PageShell";
import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <LegalPage
        crumbLabel="Privacy Policy"
        badge="Legal • Data Protection"
        title="Privacy Policy"
        updated="Last updated: January 2026"
        intro="This Privacy Policy explains how CODIIC Technologies ('CODIIC', 'we', 'us') collects, uses, and protects information when you use our website builder, omnichannel inbox, CRM, AI automation, and related services (the 'Platform')."
        sections={[
          {
            id: "information-we-collect",
            title: "Information We Collect",
            body: (
              <>
                <p>
                  <strong>Account &amp; workspace data.</strong> When you create a workspace we collect
                  your name, business name, email address, phone number, and billing details needed to
                  provision and secure your account.
                </p>
                <p>
                  <strong>Business &amp; customer data you add.</strong> Content you publish on your
                  storefront, contacts you import, conversations routed through your connected channels,
                  deal records, orders, and automation configurations are stored as part of your
                  workspace data.
                </p>
                <p>
                  <strong>Usage &amp; device data.</strong> We automatically collect log data such as IP
                  address, browser type, feature usage, and timestamps to operate, secure, and improve
                  the Platform.
                </p>
              </>
            ),
          },
          {
            id: "how-we-use-data",
            title: "How We Use Business & Customer Data",
            body: (
              <>
                <p>
                  We use workspace data solely to provide the services you configure: delivering your
                  messages, syncing your CRM records, executing your automations, generating your
                  analytics, and processing your orders.
                </p>
                <p>
                  We may use aggregated, de-identified usage patterns to improve the Platform. We{" "}
                  <strong>never sell</strong> your customer data, never use your conversations to train
                  models for other customers, and never contact your end customers for our own marketing.
                </p>
                <p>
                  When you use the AI Knowledge Base, your uploaded documents are processed to build an
                  assistant that serves only your workspace.
                </p>
              </>
            ),
          },
          {
            id: "meta-whatsapp-compliance",
            title: "Meta / WhatsApp Cloud API Data Compliance",
            body: (
              <>
                <p>
                  CODIIC operates as an official Meta Tech Provider. Messages you send through the
                  WhatsApp Cloud API are processed by Meta under Meta's own Data Processing Terms, and
                  by CODIIC strictly to route, display, and log conversations you initiate or receive.
                </p>
                <p>
                  <strong>Consent is your responsibility.</strong> You are required to collect proper
                  opt-in consent from your end customers before messaging them on WhatsApp, in line with
                  the WhatsApp Business Messaging Policy and applicable law.
                </p>
                <p>
                  With WhatsApp Coexistence, messages mirrored between your Business App and CODIIC are
                  transmitted through Meta's official infrastructure — we do not intercept or store
                  credentials for your personal device.
                </p>
              </>
            ),
          },
          {
            id: "gdpr-transfers",
            title: "GDPR & International Data Transfers",
            body: (
              <>
                <p>
                  Workspace data is hosted on AWS cloud infrastructure with encryption at rest and in
                  transit. Where data crosses borders, transfers are safeguarded by contractual
                  protections consistent with GDPR requirements, including Standard Contractual Clauses
                  where applicable.
                </p>
                <p>
                  If you are in the EEA or UK, you have rights of access, rectification, erasure,
                  restriction, portability, and objection. You may exercise them through your workspace
                  settings or by contacting our Data Protection Officer.
                </p>
              </>
            ),
          },
          {
            id: "retention-deletion",
            title: "Data Retention & Deletion Rights",
            body: (
              <>
                <p>
                  We retain workspace data for as long as your account is active or as needed to provide
                  the services. Nightly encrypted backups are retained on a rolling basis for disaster
                  recovery.
                </p>
                <p>
                  When you delete records or close your workspace, data is removed from active systems
                  promptly and purged from backups within a defined retention window, except where law
                  requires longer retention (for example, tax invoice records).
                </p>
                <p>
                  You may export your contacts, orders, and reports at any time before deletion.
                </p>
              </>
            ),
          },
          {
            id: "dpo-contact",
            title: "Contact Our Data Protection Officer",
            body: (
              <>
                <p>
                  For privacy questions, data subject requests, or concerns about this policy, contact
                  our Data Protection Officer at{" "}
                  <strong>privacy@codiic.com</strong>. We aim to acknowledge all requests within 72
                  hours and resolve them within 30 days.
                </p>
                <p>
                  If we make material changes to this policy, we will notify workspace owners through
                  the dashboard and by email before the changes take effect.
                </p>
              </>
            ),
          },
        ]}
      />
    </PageShell>
  );
}
