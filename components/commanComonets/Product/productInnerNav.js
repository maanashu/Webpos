import React, { useEffect, useState } from "react";
import ProductSearch from "./productSearch";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectRetailData } from "../../../redux/slices/retails";

const ProductInnerNav = ({ productCount, ServicesCount }) => {
  const [filterShow, setFilterShow] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const router = useRouter();
  const pathName = router.asPath;
  const retailData = useSelector(selectRetailData);
  const productBrands = retailData?.productBrands;
  const productCategory = retailData?.productCategories;
  const productSubCategory = retailData?.productSubCategories;

  const handleTabs = (tabValue) => {
    setActiveTab(tabValue);
    router.push({
      query: { parameter: tabValue },
    });
  };

  useEffect(() => {
    if (pathName === "/Retails?parameter=product") {
      setActiveTab("product");
    } else if (pathName === "/Retails?parameter=services") {
      setActiveTab("services");
    }
  }, [pathName]);

  return (
    <>
      <div className="row innerMargin">
        <div className="col-lg-6 col-md-12">
          <div className="productInnerNavBar">
            <div className="productAll">
              {activeTab === "product" ? (
                <p className="ProductAbout">
                  All Products{" "}
                  <span className="productCount">({productCount})</span>
                </p>
              ) : (
                <p className="ProductAbout">
                  All Services{" "}
                  <span className="productCount">({ServicesCount})</span>
                </p>
              )}
            </div>
            <div className="ProductSearch productSearchBx">
              <ProductSearch />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="productInnerNavLeft">
            <button
              className={activeTab == "product" ? "BlueBtn" : "GreyBtn"}
              onClick={() => handleTabs("product")}
            >
              Products
              <Image
                src={Images.Shopping_Outline}
                alt="image"
                className="img-fluid BtnIcon"
              />
            </button>
            <button
              className={activeTab == "services" ? "BlueBtn" : "GreyBtn"}
              onClick={() => handleTabs("services")}
            >
              Services
              <Image
                src={Images.Services}
                alt="image"
                className="img-fluid BtnIcon"
              />
            </button>
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
              {/* {filterShow ? (
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
              )} */}
              {filterShow ? (
                <div className="FilterMultiSelect">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="Category">
                        <button
                          className="accordion-button"
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
                        className="accordion-collapse collapse show"
                        aria-labelledby="Category"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {productCategory.map((item) => (
                            <label className="custom-checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <span className="filteredheading">
                                {item?.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="Availability">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#AvailabilityBox"
                          aria-expanded="false"
                          aria-controls="AvailabilityBox"
                        >
                          SubCategory
                        </button>
                      </h2>
                      <div
                        id="AvailabilityBox"
                        className="accordion-collapse collapse show"
                        aria-labelledby="Availability"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {productSubCategory?.map((item) => (
                            <label className="custom-checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <span className="filteredheading">
                                {item?.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="Duration">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#DurationBox"
                          aria-expanded="false"
                          aria-controls="DurationBox"
                        >
                          Brands
                        </button>
                      </h2>
                      <div
                        id="DurationBox"
                        className="accordion-collapse collapse"
                        aria-labelledby="Duration"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {productBrands?.map((item) => (
                            <label className="custom-checkbox">
                              <input type="checkbox" />
                              <span className="checkmark"></span>
                              <span className="filteredheading">
                                {item?.name}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header" id="Location">
                        <button
                          className="accordion-button collapsed"
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
                        className="accordion-collapse collapse"
                        aria-labelledby="Location"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Today</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Tomorrow</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">This Week</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">This Month</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Anytime</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="Pricing">
                        <button
                          className="accordion-button collapsed"
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
                        className="accordion-collapse collapse"
                        aria-labelledby="Pricing"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Today</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Tomorrow</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">This Week</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">This Month</span>
                          </label>
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <span className="filteredheading">Anytime</span>
                          </label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function toggleDropdown(dropdown) {
  dropdown.classList.toggle("open");
}
export default ProductInnerNav;
