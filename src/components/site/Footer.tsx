import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";

import simplyfemininenetworkLogo from "@/assets/simplyfemininenetwork.png";
import { ORG } from "./site-data";

export function Footer() {
  return (
    <footer className="bg-[color:#17090E] text-[color:#FFFFFF]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: logo, tagline, award, social links */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={simplyfemininenetworkLogo} alt="Simply Feminine Network Logo" className="h-10 w-auto" />
              <div>
                <p className="font-display text-[1.125rem] font-semibold">{ORG.name}</p>
                <p className="mt-1 text-[color:#C9BFBB] text-[0.875rem]">
                  Women of Purpose — Giving Back with Grace.
                </p>
              </div>
            </div>
            <p className="text-[color:#C9BFBB] text-[0.875rem]">
              🏆 NGO OF THE YEAR — PRIDE OF KENYA AWARDS 2025
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[color:#C9BFBB] hover:text-[color:#FFFFFF] transition-colors">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-[color:#C9BFBB] hover:text-[color:#FFFFFF] transition-colors">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-[color:#C9BFBB] hover:text-[color:#FFFFFF] transition-colors">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: NAVIGATE */}
          <div className="space-y-4">
            <h3 className="text-[color:#C9A76B] text-[0.875rem] font-manrope uppercase tracking-wider">
              NAVIGATE
            </h3>
            <ul className="space-y-2 text-[color:#FFFFFF] text-[0.875rem]">
              <Link to="/about" className="hover:text-[color:#C9A76B] transition-colors">
                About
              </Link>
              <Link to="/mission" className="hover:text-[color:#C9A76B] transition-colors">
                Mission
              </Link>
              <Link to="/programs" className="hover:text-[color:#C9A76B] transition-colors">
                Projects
              </Link>
              <Link to="/events" className="hover:text-[color:#C9A76B] transition-colors">
                Events
              </Link>
              <Link to="/community" className="hover:text-[color:#C9A76B] transition-colors">
                Community
              </Link>
              <Link to="/partners" className="hover:text-[color:#C9A76B] transition-colors">
                Partners
              </Link>
              <Link to="/contact" className="hover:text-[color:#C9A76B] transition-colors">
                Contact
              </Link>
            </ul>
          </div>

          {/* Column 3: CONTACT */}
          <div className="space-y-4">
            <h3 className="text-[color:#C9A76B] text-[0.875rem] font-manrope uppercase tracking-wider">
              CONTACT
            </h3>
            <ul className="space-y-2 text-[color:#FFFFFF] text-[0.875rem]">
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[color:#C9A76B] font-manrope">EMAIL</span>
                  <span className="ml-2">{ORG.email}</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[color:#C9A76B] font-manrope">KENYA</span>
                  <span className="ml-2">{ORG.phoneKe}</span>
                </span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2">
                  <span className="text-[color:#C9A76B] font-manrope">GERMANY</span>
                  <span className="ml-2">{ORG.phoneDe}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex items-center justify-between text-[color:#C9BFBB] text-[0.75rem] border-t border-[color:#C9BFBB]/20 pt-8">
          <p>
            © 2025 Simply Feminine Network. Founded by Tabitha Mwelu John. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-[color:#FFFFFF] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[color:#FFFFFF] transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookies" className="hover:text-[color:#FFFFFF] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}