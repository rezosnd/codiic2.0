"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SolutionPage } from "@/components/SolutionPage";
import { EducationColorIcon } from "@/components/ColorfulProductIcons";

export default function EducationPage() {
  const router = useRouter();
  const goToLogin = () => router.push("/login");

  return (
    <PageShell>
      <SolutionPage
        onOpenGetStarted={goToLogin}
        onOpenSeeHowItWorks={goToLogin}
        data={{
          name: "Education & Coaching Academies",
          crumb: "Education",
          icon: EducationColorIcon,
          badge: "Education & Coaching Academies",
          headline: (
            <>
              Turn Admission Inquiries into Enrolled Students —{" "}
              <em className="font-serif italic font-normal text-[#043B2C]">Automatically.</em>
            </>
          ),
          subheadline:
            "Drag-and-drop course and admission pages, automated WhatsApp syllabus delivery, AI counselor follow-up calls, batch inquiry pipelines, and fee payment reminders.",
          painSolutions: [
            {
              pain: "Admission inquiries arrive from ads, calls, and walk-ins — half never get a callback.",
              solution: "Every inquiry becomes a CRM 360 deal card instantly, with an AI counselor call-back within minutes — no lead ever waits.",
            },
            {
              pain: "Counselors spend all day WhatsApping the same brochure and fee structure.",
              solution: "Automated WhatsApp replies send the right course syllabus, batch schedule, and fee structure the second a student asks.",
            },
            {
              pain: "Fees get collected late and awkward follow-up calls fall on your admin staff.",
              solution: "Scheduled fee reminders with payment links go out automatically before and after due dates — collections run on rails.",
            },
          ],
          workflow: [
            {
              title: "Admission Page",
              desc: "Course catalog + inquiry form",
              detail: "Publish a course page with batch timings, faculty profiles, and an inquiry form — leads land in your admissions pipeline instantly.",
            },
            {
              title: "Instant Brochure",
              desc: "Syllabus & fees auto-sent on WhatsApp",
              detail: "The moment a student inquires, they receive the course brochure, fee structure, and a 'talk to counselor' option on WhatsApp.",
            },
            {
              title: "AI Counselor Call",
              desc: "Qualify & book counseling slot",
              detail: "An AI voice call follows up within minutes — answers FAQs, gauges interest, and books a counseling session with your team.",
            },
            {
              title: "Enroll & Remind",
              desc: "Fee links + batch onboarding",
              detail: "Admission confirmations carry a fee payment link; reminders nudge pending fees while welcome drips onboard the new batch.",
            },
          ],
          useCases: [
            {
              title: "Coaching Institutes",
              desc: "Handle admission-season surges — hundreds of daily inquiries get instant brochures and counselor callbacks without extra staff.",
              stat: "5× inquiry handling",
            },
            {
              title: "Online Course Creators",
              desc: "Landing pages plus automated WhatsApp funnels convert webinar signups into paid enrollments while you sleep.",
              stat: "+34% enrollments",
            },
            {
              title: "Skill Academies & Bootcamps",
              desc: "Track every applicant from inquiry to enrollment with batch-wise pipelines and automated documentation checklists.",
              stat: "Zero lost leads",
            },
          ],
          testimonial: {
            quote:
              "Last admission season we handled 3× the inquiries with the same two counselors. The AI follow-up calls book counseling sessions while parents are still comparing institutes.",
            name: "Priya Nair",
            role: "Director, BrightPath Academy — Indore",
          },
        }}
      />
    </PageShell>
  );
}
