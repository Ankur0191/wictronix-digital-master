import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 18th June 2025
                </p>
                <p className="mt-4">
                    Welcome to Wictronix Digital. These terms and conditions outline the rules and regulations for the use of Wictronix Digital’s website, products, and services.
                </p>

                <h2 className="text-xl font-medium mt-8">Acceptance of Terms</h2>
                <p className="mt-8 text-muted-foreground">
                    By accessing or using any part of our website or services, you agree to be bound by these terms. If you do not accept all the terms and conditions stated here, you may not access the website or use any services.
                </p>

                <h2 className="text-xl font-medium mt-12">Modifications to Terms</h2>
                <p className="mt-8 text-muted-foreground">
                    Wictronix Digital reserves the right to revise these terms at any time. Any changes will be effective immediately upon posting the revised terms on this page. Continued use of our services after any such changes constitutes your consent to the updated terms.
                </p>

                <h2 className="text-xl font-medium mt-12">Use of Services</h2>

                <h3 className="text-lg mt-8">Eligibility</h3>
                <p className="mt-8">
                    You must be at least 18 years of age to use our services or enter into a legally binding agreement with Wictronix Digital.
                </p>

                <h3 className="text-lg mt-8">Account Registration</h3>
                <ul className="list-disc ml-8 mt-8 text-muted-foreground">
                    <li>You agree to provide accurate and complete information when creating an account with us.</li>
                    <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                    <li>Wictronix Digital is not liable for any losses or damages arising from unauthorized use of your account.</li>
                </ul>

                <h3 className="text-lg mt-8">Acceptable Use</h3>
                <p className="mt-4">You agree not to use our platform or services for:</p>
                <ul className="list-disc ml-8 mt-2 text-muted-foreground">
                    <li>Posting or transmitting unlawful, harmful, or offensive content.</li>
                    <li>Hacking, phishing, or attempting to gain unauthorized access to systems or data.</li>
                    <li>Using our services to send spam, viruses, or malicious software.</li>
                </ul>

                <h2 className="text-xl font-medium mt-12">Intellectual Property</h2>

                <h3 className="text-lg mt-8">Company Content</h3>
                <p className="mt-8 text-muted-foreground">
                    All content including text, graphics, code, and software provided by Wictronix Digital is the intellectual property of the company and may not be reused or reproduced without written consent.
                </p>

                <h3 className="text-lg mt-8">User Content</h3>
                <p className="mt-8 text-muted-foreground">
                    Any content submitted by users remains their property. However, you grant Wictronix Digital a non-exclusive, royalty-free license to use, display, and distribute that content as part of providing services.
                </p>

                <h2 className="text-xl font-medium mt-12">Privacy and Data Protection</h2>
                <p className="mt-8 text-muted-foreground">
                    We value your privacy. Please refer to our <Link href="/privacy" className="underline">Privacy Policy</Link> for detailed information about how we collect, store, and use personal information.
                </p>

                <h2 className="text-xl font-medium mt-12">Service Termination</h2>
                <p className="mt-8 text-muted-foreground">
                    Wictronix Digital may suspend or terminate your access to services at our discretion, without notice, if we believe you are violating these terms or acting in a way that may harm our platform or other users.
                </p>

                <h2 className="text-xl font-medium mt-12">Limitation of Liability</h2>

                <h3 className="text-lg mt-8">No Guarantees</h3>
                <p className="mt-8 text-muted-foreground">
                    Wictronix Digital services are provided “as is” and “as available”. We do not guarantee uninterrupted access, or that the services will meet your specific requirements or be error-free.
                </p>

                <h3 className="text-lg mt-8">Damages</h3>
                <p className="mt-8 text-muted-foreground">
                    Wictronix Digital shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.
                </p>

                <h2 className="text-xl font-medium mt-12">Governing Law</h2>
                <p className="mt-8 text-muted-foreground">
                    These terms and conditions shall be governed by the laws of the Republic of India, and any disputes shall be resolved in the courts of Pune, Maharashtra.
                </p>

                <h2 className="text-xl font-medium mt-12">Contact Us</h2>
                <p className="mt-8 text-muted-foreground">
                    For any questions or concerns about these Terms and Conditions, please contact us at <Link href="mailto:support@wictronix.digital" className="underline">support@wictronix.digital</Link>.
                </p>

                <p className="mt-8 font-medium">
                    By using Wictronix Digital, you confirm that you have read, understood, and agree to these terms and conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
