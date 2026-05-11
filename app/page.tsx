export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-wide uppercase">
          Team Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Measure team productivity from{" "}
          <span className="text-[#58a6ff]">Slack patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SlackMetrics connects to your workspace and surfaces productivity
          trends, meeting overload, and communication bottlenecks — without
          reading a single message.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started for $18/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No message content is ever read. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Response time trends",
            "After-hours activity",
            "Channel health scores",
            "Meeting overload alerts",
            "Focus time windows",
            "Bottleneck detection"
          ].map((f) => (
            <span
              key={f}
              className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$18</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#8b949e] mb-6">Per workspace · unlimited seats</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Slack OAuth integration",
              "Productivity trend dashboards",
              "Meeting overload detection",
              "Communication bottleneck reports",
              "Weekly email digests",
              "CSV data export"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Powered by Lemon Squeezy · Cancel anytime</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Does SlackMetrics read our messages?",
              a: "Never. SlackMetrics only accesses metadata — timestamps, channel names, user presence signals, and reaction counts. Message content is never requested or stored."
            },
            {
              q: "Which Slack plan do I need?",
              a: "SlackMetrics works with all Slack plans including the free tier. Some presence and analytics data is richer on paid Slack plans, but core insights are available to everyone."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal with one click. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} SlackMetrics. Not affiliated with Slack Technologies.
      </footer>
    </main>
  );
}
