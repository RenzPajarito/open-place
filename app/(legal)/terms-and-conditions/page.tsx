import Footer from '@/components/ui/landing-page/footer';
import Link from 'next/link';

const terms = [
  {
    title: 'Introduction',
    body: (
      <>
        Welcome to{' '}
        <Link
          href="/"
          className="text-blue-500 font-medium"
        >
          Open Place
        </Link>
        . By accessing or using our platform, you agree to be bound by these Terms and Conditions.
        These terms govern your use of our services, including any updates or modifications. Please
        review them carefully.
        <br />
        <br />
        If you do not agree with any part of these Terms and Conditions, you must refrain from using
        Open Place. We reserve the right to modify these terms at any time, and we will notify users
        of significant changes.
      </>
    ),
  },
  {
    title: 'Eligibility',
    body: (
      <>
        To use Open Place, you must be at least 13 years old. By using our platform, you represent
        and warrant that you meet this age requirement and agree to comply with all local laws
        regarding online conduct and content.
        <br />
        <br />
        If you are under the age of 18, you confirm that you have received parental consent to use
        Open Place. We are not liable for any misrepresentation of age or consent.
      </>
    ),
  },
  {
    title: 'Account Registration and Security',
    body: (
      <>
        Upon creating an account, you agree to provide accurate information, choose a unique code
        name, and maintain the confidentiality of your account credentials. You are responsible for
        all activities that occur under your account.
        <br />
        <br />
        If you believe your account has been compromised, please contact support immediately. Open
        Place reserves the right to suspend or terminate accounts that violate these terms or
        compromise the security of our platform.
      </>
    ),
  },
  {
    title: 'User Content and Code Name Anonymity',
    body: (
      <>
        All content shared on Open Place, including text, images, and other materials, must comply
        with our community guidelines and applicable laws. As a user, you are solely responsible for
        the content you post.
        <br />
        <br />
        To protect anonymity, only code names are visible on the platform. However, any
        user-generated content that violates our policies or is deemed offensive, defamatory, or
        illegal will be removed. Open Place is committed to fostering a safe and respectful
        community.
      </>
    ),
  },
  {
    title: 'Prohibited Activities',
    body: (
      <>
        You agree not to engage in any of the following prohibited activities on Open Place:
        <br />
        <br />
        - Impersonating other users or entities
        <br />
        - Posting unlawful, abusive, or harmful content
        <br />
        - Engaging in spam, phishing, or unauthorized advertising
        <br />
        - Attempting to hack or interfere with the platform&apos;s security
        <br />
        - Collecting or harvesting any personally identifiable information about other users
        <br />
        <br />
        Violations of these prohibitions may result in account suspension or termination.
      </>
    ),
  },
  {
    title: 'Intellectual Property',
    body: (
      <>
        Open Place and its original content, features, and functionality are owned by Open Place and
        protected by copyright, trademark, and other intellectual property laws. You agree not to
        copy, modify, or distribute any part of our platform without our express written consent.
        <br />
        <br />
        Any content that users submit remains their own; however, by posting on Open Place, users
        grant us a non-exclusive license to display, modify, and distribute their content within the
        platform.
      </>
    ),
  },
  {
    title: 'Limitation of Liability',
    body: (
      <>
        Open Place is provided on an &quot;as is&quot; basis without warranties of any kind, either express or
        implied. We do not guarantee the accuracy, completeness, or reliability of any content on
        the platform.
        <br />
        <br />
        Open Place is not liable for any damages, including direct, indirect, incidental, or
        consequential damages arising from your use of the platform. This limitation of liability
        applies to the fullest extent permitted by law.
      </>
    ),
  },
  {
    title: 'Termination of Service',
    body: (
      <>
        Open Place reserves the right to suspend or terminate your access to the platform at any
        time, with or without cause, for violations of these terms or any other reason at our sole
        discretion.
        <br />
        <br />
        Upon termination, your rights to use the platform will cease immediately. All provisions of
        these Terms and Conditions that should survive termination shall do so, including
        limitations of liability and indemnity clauses.
      </>
    ),
  },
  {
    title: 'Governing Law',
    body: (
      <>
        These Terms and Conditions are governed by the laws of the jurisdiction in which Open Place
        operates. Any disputes arising from or related to these terms or the platform will be
        resolved in accordance with local legal processes.
        <br />
        <br />
        By using Open Place, you agree to submit to the jurisdiction of these governing laws and
        resolve any disputes accordingly.
      </>
    ),
  },
  {
    body: (
      <>
        If you have any questions regarding these Terms and Conditions, please contact us at{' '}
        <Link
          href="mailto:support@openplace.com"
          className="text-blue-500 font-medium"
        >
          support@openplace.com
        </Link>
        .
      </>
    ),
  },
];

const TermsConditions = () => {
  return (
    <>
      <div className="px-4 py-8 min-h-screen">
        <div className="max-w-6xl mx-auto p-6">
          <Link href="/">
            <img
              src="/logo.png"
              width={300}
              className="mx-auto"
              alt="Open Place Logo"
            />
          </Link>
          <hr className="my-8" />
          <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">
            Terms and Conditions
          </h1>

          {terms.map((term, index) => (
            <section
              className="mb-6"
              key={index}
            >
              {term.title && (
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">{term.title}</h2>
              )}
              <p className="text-gray-600 leading-relaxed">{term.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer showFooter={true} footerType={'newFooter'} />
    </>
  );
};

export default TermsConditions;