import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Privacy Policy</h1>
          <p className="text-sm text-zinc-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>

          <div className="space-y-6 text-sm md:text-base text-zinc-300 leading-relaxed">
            <p>
              AgenFast respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the
              limited circumstances in which we may share it.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Information we collect</h2>
              <p>
                We collect the minimum information necessary to provide and improve AgenFast, including purchase details from
                our payment provider, basic analytics about how the site is used, and any information you choose to share when
                you contact us.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">How we use your information</h2>
              <p>
                We use your information to deliver purchased products, provide customer support, send important service
                updates, and understand how AgenFast is being used so we can improve the product and learning experience.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Data sharing</h2>
              <p>
                We do not sell your personal data. We may share limited information with trusted service providers (such as
                payment processors and analytics tools) strictly for operating and improving AgenFast, under appropriate
                confidentiality and data protection terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Data retention</h2>
              <p>
                We retain personal data only for as long as necessary to provide the service, comply with our legal
                obligations, resolve disputes, and enforce our agreements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Your rights</h2>
              <p>
                You can contact us at any time to request access to, correction of, or deletion of your personal information,
                subject to applicable law. We aim to respond to all privacy-related requests within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
              <p>
                If you have any questions about this Privacy Policy, you can reach us at{" "}
                <a
                  href="mailto:asrionqbu@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                  data-datafast-tag="datafast_privacy_contact"
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

