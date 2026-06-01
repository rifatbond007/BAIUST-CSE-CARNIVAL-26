"use client";
import React, { useState, useEffect } from "react";
import CarnivalNavbar from "@/components/CarnivalNavbar";
import { useMutation } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  CheckCircle,
  AlertCircle,
  Users,
  User,
  ChevronDown,
} from "lucide-react";

const queryClient = new QueryClient();

const EVENTS = [
  {
    value: "IUPC",
    label: "IUPC — Inter-University Programming Contest",
    team: true,
    fee: "৳500 / team",
  },
  {
    value: "Code Battle",
    label: "Code Battle — Solo Speed Coding",
    team: false,
    fee: "৳200 / person",
  },
  {
    value: "Hackathon",
    label: "Hackathon — 36-Hour Build Challenge",
    team: true,
    fee: "৳1,500 / team",
  },
  {
    value: "Gaming Fest",
    label: "Gaming Fest — E-Sports Tournament",
    team: false,
    fee: "৳150 / game",
  },
];

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

function InputField({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-bold text-[#2E3A2E] mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function RegisterForm() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    university: "",
    event: "",
    team_name: "",
    team_members: "",
    t_shirt_size: "",
    additional_info: "",
  });
  const [success, setSuccess] = useState(false);
  const [regId, setRegId] = useState(null);

  // Pre-select event from URL param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventParam = params.get("event");
    if (eventParam) setForm((f) => ({ ...f, event: eventParam }));
  }, []);

  const selectedEvent = EVENTS.find((e) => e.value === form.event);
  const isTeamEvent = selectedEvent?.team;

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Registration failed");
      }
      return res.json();
    },
    onSuccess: (data) => {
      setSuccess(true);
      setRegId(data.registration?.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
  };

  if (success) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h2 className="text-4xl font-black text-[#2E3A2E] mb-3">
          You're Registered! 🎉
        </h2>
        <p className="text-[#2E3A2E]/60 text-lg max-w-md mb-2">
          Your registration for <strong>{form.event}</strong> has been submitted
          successfully.
        </p>
        {regId && (
          <p className="text-[#2E3A2E]/40 text-sm mb-8">
            Registration ID:{" "}
            <span className="font-mono font-bold text-[#2E3A2E]">#{regId}</span>
          </p>
        )}
        <p className="text-[#2E3A2E]/60 text-sm max-w-sm mb-10">
          A confirmation will be sent to <strong>{form.email}</strong>. Check
          your inbox and keep your registration ID safe.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/"
            className="bg-[#2E3A2E] text-white px-8 py-3 rounded-2xl font-bold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </a>
          <button
            onClick={() => {
              setSuccess(false);
              setForm({
                full_name: "",
                email: "",
                phone: "",
                university: "",
                event: "",
                team_name: "",
                team_members: "",
                t_shirt_size: "",
                additional_info: "",
              });
            }}
            className="border-2 border-[#2E3A2E] text-[#2E3A2E] px-8 py-3 rounded-2xl font-bold hover:bg-[#2E3A2E] hover:text-white transition-all"
          >
            Register Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {mutation.isError && (
        <div className="flex items-center space-x-3 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl">
          <AlertCircle size={20} className="flex-shrink-0" />
          <span className="text-sm font-semibold">
            {mutation.error?.message ||
              "Something went wrong. Please try again."}
          </span>
        </div>
      )}

      {/* Personal Info */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-black text-[#2E3A2E] mb-6 flex items-center space-x-2">
          <User size={20} />
          <span>Personal Information</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <InputField label="Full Name" required>
            <input
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              required
              placeholder="Md. Rahman Ali"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors"
            />
          </InputField>
          <InputField label="Email Address" required>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@university.edu.bd"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors"
            />
          </InputField>
          <InputField label="Phone Number" required>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="+880 1XXXXXXXXX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors"
            />
          </InputField>
          <InputField label="University Name" required>
            <input
              name="university"
              value={form.university}
              onChange={handleChange}
              required
              placeholder="Bangladesh Army International University of Science..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors"
            />
          </InputField>
        </div>
      </div>

      {/* Event Selection */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-black text-[#2E3A2E] mb-6">
          Select Your Event
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {EVENTS.map((ev) => (
            <label
              key={ev.value}
              className={`flex items-start space-x-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                form.event === ev.value
                  ? "border-[#2E3A2E] bg-[#2E3A2E]/5"
                  : "border-gray-200 hover:border-[#2E3A2E]/40"
              }`}
            >
              <input
                type="radio"
                name="event"
                value={ev.value}
                checked={form.event === ev.value}
                onChange={handleChange}
                className="mt-1 accent-[#2E3A2E]"
                required
              />
              <div>
                <p className="font-bold text-[#2E3A2E] text-sm leading-snug">
                  {ev.label}
                </p>
                <p className="text-[#2E3A2E]/50 text-xs mt-1">
                  {ev.fee} · {ev.team ? "Team Event" : "Individual"}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Team Info — only for team events */}
      {isTeamEvent && (
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-black text-[#2E3A2E] mb-6 flex items-center space-x-2">
            <Users size={20} />
            <span>Team Information</span>
          </h3>
          <div className="space-y-6">
            <InputField label="Team Name" required>
              <input
                name="team_name"
                value={form.team_name}
                onChange={handleChange}
                required={isTeamEvent}
                placeholder="e.g. ByteForce"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors"
              />
            </InputField>
            <InputField
              label="Team Members (Names + Emails, one per line)"
              required
            >
              <textarea
                name="team_members"
                value={form.team_members}
                onChange={handleChange}
                required={isTeamEvent}
                rows={4}
                placeholder={
                  "Karim Hossain — karim@university.edu.bd\nFarhan Ahmed — farhan@university.edu.bd"
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors resize-none"
              />
            </InputField>
          </div>
        </div>
      )}

      {/* Additional Info */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-black text-[#2E3A2E] mb-6">
          Additional Details
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <InputField label="T-Shirt Size">
            <div className="relative">
              <select
                name="t_shirt_size"
                value={form.t_shirt_size}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors appearance-none bg-white"
              >
                <option value="">Select size</option>
                {SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2E3A2E]/40 pointer-events-none"
              />
            </div>
          </InputField>
        </div>
        <div className="mt-6">
          <InputField label="Anything else you'd like us to know?">
            <textarea
              name="additional_info"
              value={form.additional_info}
              onChange={handleChange}
              rows={3}
              placeholder="Dietary restrictions, accessibility needs, questions..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[#2E3A2E] focus:outline-none focus:border-[#2E3A2E] transition-colors resize-none"
            />
          </InputField>
        </div>
      </div>

      {/* Fee Summary */}
      {selectedEvent && (
        <div className="bg-[#2E3A2E] rounded-3xl p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-white/60 text-sm">Registration Fee for</p>
            <p className="font-black text-xl">
              {selectedEvent.label.split("—")[0].trim()}
            </p>
          </div>
          <div className="text-right">
            <p className="font-black text-2xl">{selectedEvent.fee}</p>
            <p className="text-white/50 text-xs mt-1">
              Payment collected on-site
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-[#2E3A2E] text-white font-black text-lg py-5 rounded-2xl hover:bg-[#1B261B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {mutation.isPending ? "Submitting..." : "COMPLETE REGISTRATION →"}
      </button>

      <p className="text-center text-[#2E3A2E]/40 text-xs">
        By registering, you agree to the event rules and code of conduct.
        Payment is collected on-site during check-in.
      </p>
    </form>
  );
}

export default function RegisterPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#F5F5F5] font-inter">
        <CarnivalNavbar />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#2E3A2E] text-center">
          <div className="container mx-auto px-4">
            <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              BAIUST CSE Carnival 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              Register Now
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Fill in your details below to secure your spot. Seats are limited
              — don't miss out!
            </p>
          </div>
        </section>

        {/* Event Quick Links */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 flex flex-wrap gap-3 justify-center">
            {EVENTS.map((ev) => (
              <a
                key={ev.value}
                href={`/events/${ev.value.toLowerCase().replace(" ", "-")}`}
                className="text-xs font-bold text-[#2E3A2E]/60 hover:text-[#2E3A2E] border border-gray-200 px-4 py-2 rounded-full hover:border-[#2E3A2E] transition-all"
              >
                View {ev.value} Details →
              </a>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-3xl">
          <RegisterForm />
        </div>

        <footer className="bg-[#1B261B] text-white py-8 text-center text-sm text-white/40">
          <p>© 2026 BAIUST CSE CARNIVAL. All rights reserved.</p>
        </footer>

        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
        `}</style>
      </div>
    </QueryClientProvider>
  );
}
