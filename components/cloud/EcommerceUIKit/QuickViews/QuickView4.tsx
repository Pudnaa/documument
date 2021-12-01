import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

const QuickView4 = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("");
  const [menu, setMenu] = useState(true);
  const [slide, setSlide] = useState(true);

  if (isEmpty(datasrc)) return null;
  // console.log("QuickView4 config", config);
  // console.log("QuickView4 datasrc", datasrc);
  // console.log("QuickView4 otherattr", otherattr);
  // console.log("QuickView4 positionConfig", positionConfig);

  const slideToggle = () => setSlide(!slide);

  const getColor = (value: any) => {
    setColor(value);
  };

  const getSize = (value: any) => {
    setSize(value);
  };

  const item = datasrc[0];
  const list = renderPositionType(item, "position31", positionConfig);
  const images = renderPositionType(list[0], "position31", positionConfig);
  const colors = renderPositionType(list[1], "position31", positionConfig);
  const sizes = renderPositionType(list[2], "position31", positionConfig);
  const star = parseInt(renderPositionType(item, "position51", positionConfig));

  const starContainer = (classname: any, num: number) => {
    return (
      <div className={`cursor-pointer flex space-x-2 ${classname}`}>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 1 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 2 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 3 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 4 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0972 18.2495C14.9506 18.2501 14.806 18.2156 14.6755 18.1487L10.0005 15.7012L5.32551 18.1487C5.17371 18.2285 5.00255 18.2642 4.8315 18.2516C4.66045 18.239 4.49637 18.1786 4.35791 18.0774C4.21945 17.9762 4.11216 17.8381 4.04824 17.679C3.98433 17.5198 3.96635 17.3459 3.99635 17.177L4.91301 12.0162L1.13635 8.34954C1.01852 8.23195 0.93493 8.0845 0.894557 7.92301C0.854183 7.76151 0.858548 7.59207 0.907181 7.43287C0.960311 7.26996 1.05804 7.12519 1.18929 7.01502C1.32053 6.90484 1.48003 6.83365 1.64968 6.80954L6.87468 6.0487L9.17551 1.3462C9.25058 1.19122 9.36777 1.06052 9.51368 0.969062C9.65959 0.877607 9.82831 0.829102 10.0005 0.829102C10.1727 0.829102 10.3414 0.877607 10.4873 0.969062C10.6333 1.06052 10.7505 1.19122 10.8255 1.3462L13.1538 6.03954L18.3788 6.80037C18.5485 6.82448 18.708 6.89567 18.8392 7.00585C18.9705 7.11603 19.0682 7.26079 19.1213 7.4237C19.17 7.58291 19.1743 7.75235 19.134 7.91384C19.0936 8.07533 19.01 8.22279 18.8922 8.34037L15.1155 12.007L16.0322 17.1679C16.0649 17.3397 16.0478 17.5174 15.9828 17.6798C15.9178 17.8422 15.8077 17.9827 15.6655 18.0845C15.4995 18.2009 15.2997 18.2589 15.0972 18.2495V18.2495Z"
            fill={num >= 5 ? "#1F2937" : "#D1D5DB"}
          />
        </svg>
      </div>
    );
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setMenu(true)}
          className="hover:bg-black top-20 z-0 w-40 py-4 bg-gray-800 text-white rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
        >
          Show Modal
        </button>
        <div
          id="menu"
          className={
            "md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-gray-800 " +
            (menu ? "block" : "hidden")
          }
        >
          <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
            <div className="w-full">
              <div className="relative">
                <div className="slider">
                  <div className="slide-ana flex flex-shrink-0">
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-0" : "-translate-x-full")
                      }
                    >
                      <AtomImage
                        item={renderPositionType(
                          images[0],
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto object-center object-cover"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-full" : "translate-x-0")
                      }
                    >
                      <AtomImage
                        item={renderPositionType(
                          images[1],
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto object-center object-cover"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                  <button
                    onClick={slideToggle}
                    aria-label="previous"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={slideToggle}
                    aria-label="Next"
                    className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold"
              />
              <div className=" flex justify-start items-center mt-4">
                <AtomCurrency
                  type="mnt"
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName=""
                />
                {starContainer("mt-4", star)}
                <AtomText
                  item={
                    renderPositionType(item, "position47", positionConfig) +
                    " reviews"
                  }
                  customClassName="font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline"
                />
              </div>
              <div className="  mt-10">
                <p
                  id="text"
                  className=" font-semibold text-base leading-4 text-gray-800"
                >
                  {color}
                </p>
                <div className=" flex space-x-2 mt-4">
                  {colors &&
                    colors.map((item1: any, index1: number) => {
                      return (
                        <div
                          key={index1}
                          tabIndex={index1}
                          onClick={() =>
                            getColor(
                              renderPositionType(
                                item1,
                                "position1",
                                positionConfig
                              ).substr(
                                0,
                                renderPositionType(
                                  item1,
                                  "position1",
                                  positionConfig
                                ).indexOf("-")
                              )
                            )
                          }
                          className={`focus:outline-none ring-1 ring-offset-2 ring-gray-800 rounded-full cursor-pointer w-8 h-8 bg-${renderPositionType(
                            item1,
                            "position1",
                            positionConfig
                          )}`}
                        ></div>
                      );
                    })}
                </div>
              </div>
              <div className=" mt-10 w-full">
                <div className=" flex justify-between">
                  <p className="font-semibold text-base leading-4 text-gray-800">
                    Хэмжээ
                  </p>
                  <p className="cursor-pointer hover:text-gray-800 font-medium text-base leading-4 text-gray-500 underline">
                    Size guide
                  </p>
                </div>
                <div className=" grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-4 sm:justify-between lg:justify-start mt-4">
                  {sizes &&
                    sizes.map((item1: any, index1: number) => {
                      return (
                        <div
                          onClick={() =>
                            getSize(
                              renderPositionType(
                                item1,
                                "position1",
                                positionConfig
                              )
                            )
                          }
                          id={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                          className={
                            "font-medium text-base leading-4 text-gray-800 border py-3 w-20 text-center cursor-pointer " +
                            (size ===
                            renderPositionType(
                              item1,
                              "position1",
                              positionConfig
                            )
                              ? "border-gray-500"
                              : "border-gray-200")
                          }
                        >
                          {renderPositionType(
                            item1,
                            "position1",
                            positionConfig
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
              <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">
                Find the perfect size?
              </p>

              <div className="flex flex-col w-full space-y-4 mt-10">
                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">
                  Сагсруу хийх
                </button>
                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">
                  Таалагдсан
                </button>
              </div>
            </div>
            <button
              onClick={() => setMenu(false)}
              aria-label="show Menu"
              className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337"
                  stroke="#1F2937"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>
        {` 
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .slide-ana {
                    height: 539px;
                }   

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }
            `}
      </style>
    </div>
  );
};

export default QuickView4;
