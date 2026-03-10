import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Refund Policy</h1>
          <p className="text-sm text-zinc-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>

          <div className="space-y-6 text-sm md:text-base text-zinc-300 leading-relaxed">
            <p>
              Due to the nature of digital products and instant access to source code and course materials, all AgenFast sales
              are <span className="font-semibold text-yellow-300">final</span>. We do not offer refunds once a purchase has
              been completed.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">No-refund policy</h2>
              <p>
                When you purchase AgenFast, you immediately receive access to downloadable assets, source code, and curriculum
                content. Because these materials cannot be &quot;returned,&quot; we operate a strict <span className="font-semibold">no-refund</span>{" "}
                policy for all plans and pricing tiers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Pre-purchase questions</h2>
              <p>
                If you are unsure whether AgenFast is right for you, please contact us with your questions before purchasing.
                We&apos;re happy to help you understand what is included and how it can fit into your workflow.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Support instead of refunds</h2>
              <p>
                If you run into issues accessing the material or using the boilerplate, reach out to us and we will do our best
                to help you get value from your purchase instead of issuing refunds.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
              <p>
                For any questions about this policy, email{" "}
                <a
                  href="mailto:asrionqbu@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                  data-datafast-tag="datafast_refund_contact"
                >
                  asrionqbu@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

