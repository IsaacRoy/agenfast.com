import Navbar from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4">Terms of Service</h1>
          <p className="text-sm text-zinc-500 mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>

          <div className="space-y-6 text-sm md:text-base text-zinc-300 leading-relaxed">
            <p>
              These Terms of Service govern your access to and use of AgenFast, including any content, documentation, and
              related materials provided through the site.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Use of the product</h2>
              <p>
                AgenFast is sold as a one-time purchase for individual or team use, as specified at the time of purchase. You
                agree not to redistribute, resell, or publicly share the source code, course materials, or any downloadable
                assets outside your organisation without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">No warranties</h2>
              <p>
                AgenFast is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we work hard to keep
                the material up to date and useful, we do not guarantee that it will be error‑free, uninterrupted, or suitable
                for every specific use case.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, AgenFast and its creators shall not be liable for any indirect,
                incidental, special, or consequential damages arising out of or in connection with your use of the product or
                site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Changes to these terms</h2>
              <p>
                We may update these Terms of Service from time to time. When we do, we will revise the &quot;Last updated&quot;
                date above. Continued use of AgenFast after changes take effect constitutes your acceptance of the revised
                terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
              <p>
                For any questions about these terms, please contact{" "}
                <a
                  href="mailto:asrionqbu@gmail.com"
                  className="text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                  data-datafast-tag="datafast_terms_contact"
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

