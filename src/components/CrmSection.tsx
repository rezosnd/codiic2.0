"use client";

import React, { useState } from "react";
import {
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface CrmSectionProps {
  onOpenGetStarted: () => void;
}

export const CrmSection: React.FC<CrmSectionProps> = ({ onOpenGetStarted }) => {
  const [selectedContactId, setSelectedContactId] = useState<number>(1);

  const contacts = [
    {
      id: 1,
      name: "Rahul Verma",
      company: "TechCorp India",
      role: "VP Operations",
      city: "Mumbai",
      source: "WhatsApp API",
      dealValue: "₹4,50,000",
      status: "Hot Lead",
      assigned: "Rohan Mehta",
      phone: "+91 98201 44521",
      email: "rahul@techcorp.in",
      lastActivity: "Discussed custom API integration via WhatsApp call.",
      nextFollowUp: "Send revised proposal today by 4:00 PM",
      urgent: true,
    },
    {
      id: 2,
      name: "Priya Nair",
      company: "Zenith Retail",
      role: "Managing Director",
      city: "Bengaluru",
      source: "Website Form",
      dealValue: "₹2,80,000",
      status: "Proposal Sent",
      assigned: "Aditi Sharma",
      phone: "+91 97412 88201",
      email: "priya@zenithretail.in",
      lastActivity: "Product demo attended with procurement team.",
      nextFollowUp: "Contract review call on Friday 11:30 AM",
      urgent: false,
    },
    {
      id: 3,
      name: "Amit Roy",
      company: "Apex Logistics",
      role: "Head of Fleet",
      city: "New Delhi",
      source: "Google Ads",
      dealValue: "₹6,20,000",
      status: "Qualified",
      assigned: "Vikram Malhotra",
      phone: "+91 99104 33019",
      email: "amit.roy@apexlogistics.com",
      lastActivity: "Requested route tracking integration spec.",
      nextFollowUp: "Share technical architecture document",
      urgent: false,
    },
  ];

  const activeContact = contacts.find((c) => c.id === selectedContactId) || contacts[0];

  const highlights = [
    {
      title: "Centralized customer records",
      desc: "Every message, note, quotation, and payment history under one unified client profile.",
    },
    {
      title: "Lead assignment",
      desc: "Automatically route inquiries from WhatsApp or websites to the right sales executive.",
    },
    {
      title: "Contact history",
      desc: "Never ask a customer to repeat themselves with complete conversation timelines.",
    },
    {
      title: "Follow-up management",
      desc: "Timely alerts ensure leads never slip through the cracks or go cold.",
    },
  ];

  return (
    <section id="crm" className="py-20 sm:py-28 bg-[#F7F9F8] border-b border-[#E8EAF0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Rich Interactive CRM Dashboard Mockup */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl bg-white border border-[#E2E8E5] p-5 sm:p-6 shadow-xl shadow-black/[0.03]">
              
              {/* Follow-up reminder alert banner */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="font-semibold">
                    Follow-up due:{" "}
                    <strong className="text-amber-800">{activeContact.nextFollowUp}</strong>
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">
                  Action Required
                </span>
              </div>

              {/* CRM Top Controls */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[#E8EAF0] text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00B879]" />
                  <span className="font-bold text-[#171923]">CODIIC CRM Lead Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-[#E8F8F1] text-[#008F60] font-semibold border border-[#00B879]/20">
                    Follow-up bhoolna ab band
                  </span>
                </div>
              </div>

              {/* Main CRM View: Contacts List on Left + Selected Profile on Right */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* Contacts Mini Table */}
                <div className="sm:col-span-5 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#555A68] px-1">
                    Active Leads ({contacts.length})
                  </div>
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      onClick={() => setSelectedContactId(contact.id)}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition-all text-xs ${
                        selectedContactId === contact.id
                          ? "bg-[#E8F8F1]/50 border-[#00B879] shadow-sm ring-1 ring-[#00B879]/20"
                          : "bg-white border-[#E2E8E5] hover:bg-[#F7F9F8]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#171923]">{contact.name}</span>
                        <span className="text-[10px] font-mono font-bold text-[#008F60]">
                          {contact.dealValue}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#555A68] truncate">{contact.company}</div>
                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#E8EAF0] text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-[#E8F8F1] text-[#008F60] font-semibold">
                          {contact.source}
                        </span>
                        <span className="text-[#555A68]">{contact.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Contact Profile Drawer */}
                <div className="sm:col-span-7 bg-[#F7F9F8] border border-[#E2E8E5] rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-xs">
                  <div>
                    {/* Profile Header */}
                    <div className="flex items-start justify-between pb-3 border-b border-[#E8EAF0]">
                      <div>
                        <div className="text-sm font-bold text-[#171923]">
                          {activeContact.name}
                        </div>
                        <div className="text-[11px] text-[#555A68]">
                          {activeContact.role} • {activeContact.company} ({activeContact.city})
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#00B879] text-white shadow-xs">
                        {activeContact.status}
                      </span>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2 my-3 text-[11px]">
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8E5]">
                        <span className="text-[#8A90A0] block text-[10px]">Assigned Owner</span>
                        <span className="font-semibold text-[#171923]">{activeContact.assigned}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8E5]">
                        <span className="text-[#8A90A0] block text-[10px]">Deal Value</span>
                        <span className="font-bold font-mono text-[#008F60]">{activeContact.dealValue}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8E5]">
                        <span className="text-[#8A90A0] block text-[10px]">Lead Source</span>
                        <span className="font-semibold text-[#171923]">{activeContact.source}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-[#E2E8E5]">
                        <span className="text-[#8A90A0] block text-[10px]">Phone (Direct)</span>
                        <span className="font-mono text-[#171923]">{activeContact.phone}</span>
                      </div>
                    </div>

                    {/* Recent Activity Timeline */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#555A68]">
                        Recent Activity
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#E2E8E5] text-[11px] text-[#171923]">
                        <div className="flex items-center gap-1.5 text-[#008F60] font-semibold text-[10px] mb-1">
                          <MessageSquare className="w-3 h-3 text-[#00B879]" />
                          <span>WhatsApp Conversation Log</span>
                        </div>
                        <p className="text-[#555A68]">{activeContact.lastActivity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Quickbar */}
                  <div className="mt-4 pt-3 border-t border-[#E8EAF0] flex items-center justify-between">
                    <span className="text-[10px] text-[#555A68]">
                      Synced with WhatsApp Business & Email
                    </span>
                    <button className="px-3 py-1.5 rounded-lg bg-[#00B879] hover:bg-[#008F60] text-white text-[11px] font-semibold transition-colors shadow-xs">
                      Log Interaction
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Copy & Benefits */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F8F1] border border-[#00B879]/20 text-[#008F60] text-xs font-bold uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-[#00B879]" />
              <span>EVERY CUSTOMER, ORGANIZED</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171923] tracking-tight leading-tight">
                Turn every inquiry into a{" "}
                <span className="text-[#00B879]">meaningful relationship.</span>
              </h2>

              <div className="p-3.5 bg-white rounded-2xl border border-[#E2E8E5] text-xs font-semibold text-[#171923] space-y-1 shadow-xs">
                <div>Sab jagah leads hain — par system kahin nahi?</div>
                <div className="text-[#008F60] font-bold">
                  CODIIC sambhalega. Follow-up bhoolna ab band.
                </div>
              </div>

              <p className="text-base text-[#555A68] leading-relaxed">
                Consolidate customer data, conversation history, activity logs, and scheduled follow-ups in a clean, unified CRM workspace.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#E2E8E5]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B879] shrink-0" />
                    <h3 className="text-xs font-bold text-[#171923]">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#555A68] leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="group px-6 py-3 rounded-full bg-[#00B879] hover:bg-[#008F60] text-white text-xs font-bold shadow-md shadow-[#00B879]/20 transition-all flex items-center gap-2"
              >
                <span>Explore Customer CRM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
