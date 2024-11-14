const Footer = () => {
    return (
        <footer className="bg-gray-100 py-12 mt-12">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-xl font-semibold">Gadget Heaven</h3>
          <p className="text-gray-600">
            Leading the way in high-quality gadget accessories and innovative tech solutions.
          </p>
          <div className="flex justify-center space-x-8 text-gray-700">
            <div>
              <h4 className="font-bold">Service</h4>
              <ul className="space-y-2">
                <li>Support</li>
                <li>Warranty</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Legal</h4>
              <ul className="space-y-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;