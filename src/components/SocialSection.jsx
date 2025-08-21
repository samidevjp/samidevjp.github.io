import { FaLinkedin } from "react-icons/fa6";

export default function SocialSection() {
  return (
    <section className="social-section py-12 bg-gray-50">
      <div className="globalInner text-center">
        <h2 className="text-2xl font-bold mb-6">Connect with me</h2>
        <div className="flex justify-center text-5xl">
          <a
            href="https://www.linkedin.com/in/your-linkedin-id"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
