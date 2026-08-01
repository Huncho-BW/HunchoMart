import React from "react";

export default function Address() {
  return (
    <div className="shippingForm">
      <h1 className="shippingTitle">Shipping Address</h1>

      <form>
        <div className="formGrid">
          <div className="inputGroup">
            <label>First name</label>
            <input type="text" placeholder="Alex" />
          </div>

          <div className="inputGroup">
            <label>Last name</label>
            <input type="text" placeholder="Jordan" />
          </div>

          <div className="inputGroup">
            <label>Email</label>
            <input type="email" placeholder="alex@email.com" />
          </div>

          <div className="inputGroup">
            <label>Phone</label>
            <input type="text" placeholder="+1 (555) 000-0000" />
          </div>

          <div className="inputGroup fullInput">
            <label>Address line 1</label>

            <input type="text" placeholder="123 Main Street" />
          </div>

          <div className="inputGroup fullInput">
            <label>Address line 2</label>

            <input type="text" placeholder="Apt, Suite, Unit (optional)" />
          </div>

          <div className="inputGroup">
            <label>City</label>

            <input type="text" placeholder="New York" />
          </div>

          <div className="inputGroup">
            <label>State</label>

            <input type="text" placeholder="NY" />
          </div>

          <div className="inputGroup">
            <label>ZIP Code</label>

            <input type="text" placeholder="10001" />
          </div>

          <div className="inputGroup">
            <label>Country</label>

            <input type="text" placeholder="Nigeria" />
          </div>
        </div>
      </form>
    </div>
  );
}
