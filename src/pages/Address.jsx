import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Address() {
  const { fillDetails, setFillDetails, errors, setErrors } =
    useContext(CartContext);

  const details = fillDetails[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFillDetails((prev) => [
      {
        ...prev[0],
        [name]: value,
      },
    ]);
  };

  return (
    <div className="shippingForm">
      <h1 className="shippingTitle">Shipping Address</h1>

      <form>
        <div className="formGrid">
          <div className="inputGroup">
            <label>First name</label>

            <input
              type="text"
              name="firstname"
              value={details.firstname}
              onChange={handleChange}
              placeholder="Alex"
            />

            {details.firstname.length === 0 && (
              <p className="errorMessage">First name is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>Last name</label>

            <input
              type="text"
              name="lastname"
              value={details.lastname}
              onChange={handleChange}
              placeholder="Jordan"
            />

            {details.lastname.length === 0 && (
              <p className="errorMessage">Last name is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={details.email}
              onChange={handleChange}
              placeholder="alex@email.com"
            />

            {details.email.length === 0 && (
              <p className="errorMessage">Email is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              value={details.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
            />

            {details.phone.length === 0 && (
              <p className="errorMessage">Phone is required</p>
            )}
          </div>

          <div className="inputGroup fullInput">
            <label>Address line 1</label>

            <input
              type="text"
              name="addressLine1"
              value={details.addressLine1}
              onChange={handleChange}
              placeholder="123 Main Street"
            />

            {details.addressLine1.length === 0 && (
              <p className="errorMessage">Address is required</p>
            )}
          </div>

          <div className="inputGroup fullInput">
            <label>Address line 2</label>

            <input
              type="text"
              name="addressLine2"
              value={details.addressLine2}
              onChange={handleChange}
              placeholder="Apt, Suite, Unit (optional)"
            />
          </div>

          <div className="inputGroup">
            <label>City</label>

            <input
              type="text"
              name="city"
              value={details.city}
              onChange={handleChange}
              placeholder="New York"
            />

            {details.city.length === 0 && (
              <p className="errorMessage">City is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>State</label>

            <input
              type="text"
              name="state"
              value={details.state}
              onChange={handleChange}
              placeholder="NY"
            />

            {details.state.length === 0 && (
              <p className="errorMessage">State is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>ZIP Code</label>

            <input
              type="text"
              name="zipCode"
              value={details.zipCode}
              onChange={handleChange}
              placeholder="10001"
            />

            {details.zipCode.length === 0 && (
              <p className="errorMessage">ZIP code is required</p>
            )}
          </div>

          <div className="inputGroup">
            <label>Country</label>

            <input
              type="text"
              name="country"
              value={details.country}
              onChange={handleChange}
              placeholder="Nigeria"
            />

            {details.country.length === 0 && (
              <p className="errorMessage">Country is required</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
