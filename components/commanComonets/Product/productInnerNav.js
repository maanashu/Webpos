import React, { useState } from "react";
import ProductSearch from "./productSearch";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import Link from "next/link";

const ProductInnerNav = ({ productCount }) => {
  const [filterShow, setFilterShow] = useState(false);
  return (
    <>
      <div className="productNavbar">
        <div className="productAll">
          <p className="ProductAbout">
            All Products <span className="productCount">({productCount})</span>
          </p>
        </div>
        <div className="ProductSearch w-50">
          <ProductSearch />
        </div>
        <button className="BlueBtn">
          Products
          <Image
            src={Images.Shopping_Outline}
            alt="image"
            className="img-fluid BtnIcon"
          />
        </button>
        <Link className="GreyBtn" href="/Service">
          Services
          <Image
            src={Images.Services}
            alt="image"
            className="img-fluid BtnIcon"
          />
        </Link>
        <div className="filterDropSelect">
          <button
            className="GreyBtn"
            onClick={() => setFilterShow((prev) => !prev)}
          >
            Filters
            <Image
              src={Images.FilterIcon}
              alt="image"
              className="img-fluid BtnIcon"
            />
          </button>
          {filterShow ? (
            <div className="FilterMultiSelect">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="Category">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#CategoryBox"
                      aria-expanded="true"
                      aria-controls="CategoryBox"
                    >
                      Category
                    </button>
                  </h2>
                  <div
                    id="CategoryBox"
                    class="accordion-collapse collapse show"
                    aria-labelledby="Category"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Health</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Music</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Food</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Pets</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Nutrition</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Cars</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Building</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Laws</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Love</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="Availability">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#AvailabilityBox"
                      aria-expanded="false"
                      aria-controls="AvailabilityBox"
                    >
                      Availability
                    </button>
                  </h2>
                  <div
                    id="AvailabilityBox"
                    class="accordion-collapse collapse show"
                    aria-labelledby="Availability"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Today</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Tomorrow</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Week</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Month</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Anytime</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="Duration">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#DurationBox"
                      aria-expanded="false"
                      aria-controls="DurationBox"
                    >
                      Duration
                    </button>
                  </h2>
                  <div
                    id="DurationBox"
                    class="accordion-collapse collapse"
                    aria-labelledby="Duration"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Today</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Tomorrow</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Week</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Month</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Anytime</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="Location">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#LocationBox"
                      aria-expanded="false"
                      aria-controls="LocationBox"
                    >
                      Location
                    </button>
                  </h2>
                  <div
                    id="LocationBox"
                    class="accordion-collapse collapse"
                    aria-labelledby="Location"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Today</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Tomorrow</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Week</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Month</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Anytime</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="Pricing">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#PricingBox"
                      aria-expanded="false"
                      aria-controls="PricingBox"
                    >
                      Pricing
                    </button>
                  </h2>
                  <div
                    id="PricingBox"
                    class="accordion-collapse collapse"
                    aria-labelledby="Pricing"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Today</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Tomorrow</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Week</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">This Month</span>
                      </label>
                      <label class="custom-checkbox">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        <span className="filteredheading">Anytime</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
function toggleDropdown(dropdown) {
  dropdown.classList.toggle("open");
}
export default ProductInnerNav;
