import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Columna 1: Platform */}
          <div>
            <h3 className="text-white font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/platform" className="hover:text-white">Refer a team</Link></li>
              <li><Link to="/changelog" className="hover:text-white">Changelog</Link></li>
              <li><Link to="/linkedin-extension" className="hover:text-white">LinkedIn extension</Link></li>
              <li><Link to="/gmail-extension" className="hover:text-white">Gmail extension</Link></li>
              <li><Link to="/ios-app" className="hover:text-white">iOS app</Link></li>
              <li><Link to="/android-app" className="hover:text-white">Android app</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>

          {/* Columna 2: Import from */}
          <div>
            <h3 className="text-white font-bold mb-4">Import from</h3>
            <ul className="space-y-2">
              <li><Link to="/salesforce" className="hover:text-white">Salesforce</Link></li>
              <li><Link to="/hubspot" className="hover:text-white">Hubspot</Link></li>
              <li><Link to="/pipedrive" className="hover:text-white">Pipedrive</Link></li>
              <li><Link to="/zoho" className="hover:text-white">Zoho</Link></li>
              <li><Link to="/excel" className="hover:text-white">Excel</Link></li>
              <li><Link to="/csv" className="hover:text-white">CSV</Link></li>
            </ul>
          </div>

          {/* Columna 3: Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/customers" className="hover:text-white">Customers</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/manifesto" className="hover:text-white">Manifesto</Link></li>
              <li><Link to="/become-partner" className="hover:text-white">Become a partner</Link></li>
            </ul>
          </div>

          {/* Columna 4: Attio for */}
          <div>
            <h3 className="text-white font-bold mb-4">Attio for</h3>
            <ul className="space-y-2">
              <li><Link to="/startups" className="hover:text-white">Startups</Link></li>
              <li><Link to="/deal-flow" className="hover:text-white">Deal flow</Link></li>
            </ul>
          </div>

          {/* Columna 5: Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/help-center" className="hover:text-white">Help center</Link></li>
              <li><Link to="/automation-templates" className="hover:text-white">Automation templates</Link></li>
              <li><Link to="/developers" className="hover:text-white">Developers</Link></li>
              <li><Link to="/system-status" className="hover:text-white">System status</Link></li>
              <li><Link to="/hire-expert" className="hover:text-white">Hire an expert</Link></li>
            </ul>
          </div>

          {/* Columna 6: Apps */}
          <div>
            <h3 className="text-white font-bold mb-4">Apps</h3>
            <ul className="space-y-2">
              <li><Link to="/email-calendar" className="hover:text-white">Email & Calendar</Link></li>
              <li><Link to="/census" className="hover:text-white">Census</Link></li>
              <li><Link to="/segment" className="hover:text-white">Segment</Link></li>
              <li><Link to="/slack" className="hover:text-white">Slack</Link></li>
              <li><Link to="/outreach" className="hover:text-white">Outreach</Link></li>
              <li><Link to="/mixmax" className="hover:text-white">Mixmax</Link></li>
              <li><Link to="/typeform" className="hover:text-white">Typeform</Link></li>
              <li><Link to="/fillout" className="hover:text-white">Fillout</Link></li>
              <li><Link to="/pylon" className="hover:text-white">Pylon</Link></li>
              <li><Link to="/zapier" className="hover:text-white">Zapier</Link></li>
              <li><Link to="/relay" className="hover:text-white">Relay</Link></li>
            </ul>
          </div>
        </div>

        {/* Íconos de redes sociales y derechos */}
        <div className="mt-8 flex justify-between items-center border-t border-gray-800 pt-4">
          <div className="text-sm text-gray-400">
            © 2025 FUEM Ltd. All rights reserved.{' '}
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link> |{' '}
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;