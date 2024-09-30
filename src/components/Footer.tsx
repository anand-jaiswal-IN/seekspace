import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterIcon,
} from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
export default function Component() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/"
            src="/logo.png"
            alt="Seekspace Logo"
            name="seekspace.club"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Resources</FooterLink>
            <FooterLink href="#">Terms of Services</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <div className="flex justify-around">
          <div>
            <h4 className="font-bold text-2xl mb-2 underline">Call Us</h4>
            <a href="tel:+919985648213">+91 9985648213</a>
          </div>
          <div>
            <h4 className="font-bold text-2xl mb-2 underline">Send us a message</h4>
            <a href="mailto:seekspace@club.com">seekspace@club.com</a>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="seekspace.club™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
