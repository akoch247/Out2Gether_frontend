// A page with form to post a new event
import { AddressAutofill } from "@mapbox/search-js-react";
import { FiUpload } from "react-icons/fi";
import { getYYYYMMDD } from "../../util/time";
import YellowButton from "../../components/YellowButton";
import BlueButton from "../../components/BlueButton";
import { useState } from "react";
import useMutation from "../../hooks/useMutation";

const ACCESS_TOKEN =
  "pk.eyJ1IjoiZXRoYW50b3VwczA1IiwiYSI6ImNtZGl4aGRoajBnanIybXB2aHJqa2EyY3IifQ.l_QOmsBl_H91UFZbv7DZfw";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    price: "",
    time: "",
    date: "",
    category_id: "",
    image_url: "",
    location: {},
  });
  const { mutate: createPost, loading } = useMutation("POST", "/posts", [
    "posts",
  ]);

  //  * @param {string} params.address
  //  * @param {string} params.country
  //  * @param {string} params.state
  //  * @param {string} params.city
  //  * @param {text} params.zip_code
  //  * @param {number} params.geolocation_longitude (e.g., -32.0715)
  //  * @param {number} params.geolocation_latitude (e.g., 55.3215)

  const handleAutofillRetrieve = (response) => {
    const feature = response.features[0];
    if (!feature) {
      return;
    }
    const coords = feature.geometry.coordinates;
    const address = feature.properties.feature_name;
    const zip_code = feature.properties.postcode;
    const region = feature.properties.address_level1;
    const city = feature.properties.address_level2;
    const country = feature.properties.country;
    const geolocation_longitude = coords[0];
    const geolocation_latitude = coords[1];

    setFormData((prev) => {
      return {
        ...prev,
        location: {
          address,
          country,
          region,
          city,
          zip_code,
          geolocation_longitude,
          geolocation_latitude,
        },
      };
    });
  };

  console.log("Form Data: ", formData);

  const handleSubmit = (e) => {
    createPost({
      ...formData,
      ...formData.location,
      location: null,
    });
  };

  return (
    //Outer container for Make A Post

    <div className="make-pot-container container mt-5 mb-5 bg-white rounded p-4">
      <div className="post-form-wrapper p-4">
        <h1 className="mb-5 pb-5">Make a Post</h1>

        <form action={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter a title"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              />
            </div>
            <div className="col-md-6">
              <AddressAutofill
                accessToken={ACCESS_TOKEN}
                onRetrieve={handleAutofillRetrieve}
              >
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  placeholder="Enter an address"
                  required
                  style={{
                    border: "2px solid #333",
                    boxShadow: "none",
                    paddingLeft: "10px",
                  }}
                />
              </AddressAutofill>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="Choose a date"
                min={getYYYYMMDD()}
                required
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, date: e.target.value };
                  })
                }
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                type="time"
                className="form-control"
                id="time"
                placeholder="Choose a time"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="category"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              >
                <option>Choose a category</option>
                <option>Outdoor</option>
                <option>Food</option>
                <option>Art</option>
                <option>Budget Friendly</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Set a couple's price"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="5"
                placeholder="Tell everyone what your event is all about!"
                required
                style={{
                  border: "2px solid #333",
                  boxShadow: "none",
                  paddingLeft: "10px",
                }}
              ></textarea>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <YellowButton
                type="button"
                className="btn btn-warning me-2 fw-normal"
              >
                <i className="bi bi-upload"></i> <FiUpload /> Upload
              </YellowButton>
              <span>Add an image for your event</span>
            </div>
            <BlueButton type="submit">Post Event</BlueButton>
          </div>
        </form>
      </div>
    </div>
  );
}
