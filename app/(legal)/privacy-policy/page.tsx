import Link from 'next/link';
import Footer from '@/components/ui/landing-page/footer';

const texts = [
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
        . We prioritize your privacy and anonymity. By using Open Place, you trust us to handle your
        information responsibly. This Privacy Policy details how we collect, store, and use your
        data to provide a secure and private experience.
      </>
    ),
  },
  {
    title: 'Data Collection and Use',
    body: 'At Open Place, we are committed to safeguarding your privacy. We use code names for user identity instead of real information, ensuring anonymity while using the platform. We do not collect personally identifiable information such as real names, addresses, or contact details. Instead, we collect the following data:',
    data: [
      { code: 'Code Name: Chosen by users to represent them within the platform.' },
      {
        usage:
          'Usage Data: Information about platform usage, including features accessed and interactions.',
      },
      {
        session:
          'Session Logs: Limited data such as login timestamps to enhance security and track performance.',
      },
    ],
  },
  {
    title: 'Data Storage and Security',
    body: 'Open Place stores user data in secure, encrypted environments. Only authorized personnel have access to sensitive information, which is carefully protected by industry-standard security protocols. Although no online platform can guarantee complete security, we implement rigorous measures to minimize risk.',
  },
  {
    title: 'User Rights and Data Access',
    body: 'Users have the right to request access to their personal data, modify their code name, and delete their account at any time. You can manage these rights within your account settings. For further assistance, contact our support team.',
  },
  {
    title: 'Data Sharing and Third-Party Access',
    body: 'Open Place does not share or sell user data to third-party organizations. We may share data only when legally required to comply with court orders or legal processes, or to protect the safety and security of our platform and users.',
  },
  {
    title: 'Cookies and Tracking Technologies',
    body: 'We use limited cookies and tracking technologies to understand platform use and improve user experience. Cookies are used solely for authentication and performance tracking, with minimal data retained. You can manage your cookie preferences in your browser settings.',
  },
  {
    title: 'Policy Updates',
    body: 'This Privacy Policy may be updated periodically to reflect changes in our practices and services. Significant updates will be communicated via email or a notification within the platform.',
  },
  {
    body: 'If you have any questions about this Privacy Policy, please contact us at ',
    support: 'support@openplace.com',
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="px-4 py-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <img
              src="/logo.png"
              width={300}
              className="mx-auto"
              alt="Open Place Logo"
            />
          </Link>
          <hr className="my-8" />
          <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">Privacy Policy</h1>
          {texts.map((text, index) => (
            <section
              className="mb-6"
              key={index}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{text.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                {text.body}
                <a
                  href={`mailto:${text.support}`}
                  className="text-blue-600 font-medium leading-relaxed"
                >
                  {text.support}
                </a>
              </p>

              {text.data && (
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  {text.data.map((item, i) => (
                    <li key={i}>{Object.values(item)[0]}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>

      <Footer showFooter={true} footerType="newFooter" />
    </div>
  );
};

export default PrivacyPolicy;