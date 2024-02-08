import React, { useCallback, useEffect, useState } from "react";
import ProductSearch from "./productSearch";
import * as Images from "../../../utilities/images";
import Image from "next/image";
import { useRouter } from "next/router";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginAuth } from "../../../redux/slices/auth";
import {
  getMainProduct,
  getMainServices,
  selectRetailData,
} from "../../../redux/slices/retails";

const ProductInnerNav = ({ productCount, ServicesCount }) => {
  const dispatch = useDispatch();
  const authData = useSelector(selectLoginAuth);
  const retailData = useSelector(selectRetailData);
  const sellerId = authData?.usersInfo?.payload?.uniqe_id;
  const [filterShow, setFilterShow] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [productSearch, setProductSearch] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const router = useRouter();
  const pathName = router.asPath;
  const { parameter } = router.query;
  const productCategory = retailData?.productCategories;
  const productSubCategory = retailData?.productSubCategories;
  const productBrands = retailData?.productBrands;
  const serviceCategory = retailData?.serviceCategories;
  const serviceSubCategory = retailData?.serviceSubCategories;
  const posUsers = authData?.allPosUser;
  const SHOULD_CLEAR = true;

  const [selectedProductCategories, setSelectedProductCategories] = useState(
    []
  );
  const [selectedProductSubCategories, setSelectedProductSubCategories] =
    useState([]);
  const [selectedProductBrands, setSelectedProductBrands] = useState([]);
  const [selectedServiceCategories, setSelectedServiceCategories] = useState(
    []
  );
  const [selectedServiceSubCategories, setSelectedServiceSubCategories] =
    useState([]);
  const [selectedPosStaff, setSelectedPosStaff] = useState([]);

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

  const clearProductFilters = () => {
    setSelectedProductCategories([]);
    setSelectedProductSubCategories([]);
    setSelectedProductBrands([]);
    productData(SHOULD_CLEAR);
    setFilterShow(false);
  };

  const clearServiceFilters = () => {
    setSelectedServiceCategories([]);
    setSelectedServiceSubCategories([]);
    setSelectedPosStaff([]);
    servicesData(SHOULD_CLEAR);
    setFilterShow(false);
  };
  const productData = (shouldClear = false) => {
    const productFilterIds = {
      category_ids: selectedProductCategories.join(","),
      sub_category_ids: selectedProductSubCategories.join(","),
      brand_id: selectedProductBrands.join(","),
    };
    let params = {
      seller_id: sellerId,
      ...(shouldClear ? {} : productFilterIds),
    };
    dispatch(
      getMainProduct({
        ...params,
        cb(res) {},
      })
    );
  };

  const servicesData = (shouldClear = false) => {
    const serviceFilterIds = {
      category_ids: selectedServiceCategories.join(","),
      sub_category_ids: selectedServiceSubCategories.join(","),
      pos_staff_ids: selectedPosStaff.join(","),
    };

    let params = {
      seller_id: sellerId,
      ...(shouldClear ? {} : serviceFilterIds),
    };

    dispatch(
      getMainServices({
        ...params,
        cb(res) {},
      })
    );
  };

  // product search fun
  const onSearchProduct = (searchText) => {
    let params = {
      ...(searchText?.length != 0 && { search: searchText }),
      seller_id: sellerId,
      page: 1,
      limit: 18,
    };
    if (searchText?.length > 2) {
      dispatch(
        getMainProduct({
          ...params,
          cb(res) {},
        })
      );
    } else if (searchText?.length == 0) {
      dispatch(
        getMainProduct({
          ...params,
          cb(res) {},
        })
      );
    }
  };

  // service search fun
  const onSearchService = (searchText) => {
    let params = {
      ...(searchText?.length != 0 && { search: searchText }),
      seller_id: sellerId,
      page: 1,
      limit: 18,
    };
    if (searchText?.length > 2) {
      dispatch(
        getMainServices({
          ...params,
          cb(res) {},
        })
      );
    } else if (searchText?.length == 0) {
      dispatch(
        getMainServices({
          ...params,
          cb(res) {},
        })
      );
    }
  };

  const productdebounceSearch = useCallback(debounce(onSearchProduct, 1000), [
    sellerId,
  ]);
  const servicedebounceSearch = useCallback(debounce(onSearchService, 1000), [
    sellerId,
  ]);

  return (
    <>
      <div className="row innerMargin">
        <div className="col-lg-6 col-md-12">
          <div className="productInnerNavBar">
            <div className="productAll">
              {parameter == "product" ? (
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
              {parameter == "product" ? (
                <ProductSearch
                  value={productSearch}
                  onChange={(event) => {
                    setProductSearch(event.target.value);
                    productdebounceSearch(event.target.value);
                  }}
                />
              ) : (
                <ProductSearch
                  value={serviceSearch}
                  onChange={(event) => {
                    setServiceSearch(event.target.value);
                    servicedebounceSearch(event.target.value);
                  }}
                />
              )}
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
              {filterShow ? (
                <>
                  {activeTab == "product" ? (
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
                            className="accordion-collapse collapse "
                            aria-labelledby="Category"
                            data-bs-parent="#accordionExample"
                          >
                            <div
                              className={`accordion-body ${
                                productCategory?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {productCategory?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedProductCategories.includes(
                                      item.id
                                    )}
                                    onChange={() => {
                                      setSelectedProductCategories((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
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
                              Sub Category
                            </button>
                          </h2>
                          <div
                            id="AvailabilityBox"
                            className="accordion-collapse collapse "
                            aria-labelledby="Availability"
                            data-bs-parent="#accordionExample"
                          >
                            <div
                              className={`accordion-body ${
                                productSubCategory?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {productSubCategory?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedProductSubCategories.includes(
                                      item.id
                                    )}
                                    onChange={() => {
                                      setSelectedProductSubCategories((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
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
                            <div
                              className={`accordion-body ${
                                productBrands?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {productBrands?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedProductBrands.includes(
                                      item.id
                                    )}
                                    onChange={() => {
                                      setSelectedProductBrands((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
                                  <span
                                    onClick={() =>
                                      console.log("item " + item.id)
                                    }
                                    className="checkmark"
                                  ></span>
                                  <span className="filteredheading">
                                    {item?.name}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="addCustomerBtn mt-4 filterBtn">
                        <button
                          className="serviceCancel w-100"
                          type="submit"
                          onClick={() => clearProductFilters()}
                        >
                          Clear
                        </button>
                        <button
                          className="nextverifyBtn w-100"
                          type="submit"
                          onClick={() => productData()}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  ) : (
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
                            className="accordion-collapse collapse "
                            aria-labelledby="Category"
                            data-bs-parent="#accordionExample"
                          >
                            <div
                              className={`accordion-body ${
                                serviceCategory?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {serviceCategory?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedServiceCategories.includes(
                                      item.id
                                    )}
                                    onChange={() => {
                                      setSelectedServiceCategories((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
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
                              Sub Category
                            </button>
                          </h2>
                          <div
                            id="AvailabilityBox"
                            className="accordion-collapse collapse "
                            aria-labelledby="Availability"
                            data-bs-parent="#accordionExample"
                          >
                            <div
                              className={`accordion-body ${
                                serviceSubCategory?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {serviceSubCategory?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedServiceSubCategories.includes(
                                      item.id
                                    )}
                                    onChange={() => {
                                      setSelectedServiceSubCategories((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
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
                              Staff
                            </button>
                          </h2>
                          <div
                            id="DurationBox"
                            className="accordion-collapse collapse"
                            aria-labelledby="Duration"
                            data-bs-parent="#accordionExample"
                          >
                            <div
                              className={`accordion-body ${
                                posUsers?.length > 10
                                  ? "overflow-scroll-common-filter"
                                  : ""
                              }`}
                            >
                              {posUsers?.map((item) => (
                                <label className="custom-checkbox">
                                  <input
                                    type="checkbox"
                                    checked={selectedPosStaff.includes(item.id)}
                                    onChange={() => {
                                      setSelectedPosStaff((prev) =>
                                        prev.includes(item.id)
                                          ? prev.filter(
                                              (element) => element !== item.id
                                            )
                                          : [...prev, item.id]
                                      );
                                    }}
                                  />
                                  <span className="checkmark"></span>
                                  <span className="filteredheading">
                                    {item?.user?.user_profiles?.firstname +
                                      ` ${
                                        item?.user?.user_profiles?.lastname ??
                                        ""
                                      }`}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="addCustomerBtn mt-4 filterBtn">
                        <button
                          className="serviceCancel w-100"
                          type="submit"
                          onClick={() => clearServiceFilters()}
                        >
                          Clear
                        </button>
                        <button
                          className="nextverifyBtn w-100"
                          type="submit"
                          onClick={() => {
                            servicesData();
                          }}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  )}
                </>
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
