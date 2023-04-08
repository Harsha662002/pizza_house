import React from "react";
import Styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={Styles.footer}>
        <div className={Styles.footerMap}>
          <h4>Our Location</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4680302338525!2d77.56573111466113!3d12.941875490875379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158c9f666051%3A0x203c12375cab6149!2sBull%20Temple%2C%20Steps%20to%20Bull%20Temple%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560004!5e0!3m2!1sen!2sin!4v1680913876774!5m2!1sen!2sin"
            width="600"
            height="450"
            title="Bull Temple"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={Styles.footerLinks}>
          <div className={Styles.footerContactLinks}>
            <button>
              <i class="fas fa-phone"></i>Contact Us
            </button>
            <button>
              <i class="fas fa-pizza-slice"></i>Special Menu
            </button>
          </div>
          <div className={Styles.footerSocialIcons}>
            <div>
              <i class="fab fa-instagram fa-2x"></i>
            </div>
            <div>
              <i class="fab fa-facebook fa-2x"></i>
            </div>
            <div>
              <i class="fas fa-envelope fa-2x"></i>
            </div>
            <div>
              <i class="fab fa-twitter fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.copyright}>
        <h4>© Copyright 2023 Pizza House🍕</h4>
      </div>
    </div>
  );
}
