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
export default function Wishlist1() {
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
  const [show1, setshow1] = useState(true);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);
  const [show4, setshow4] = useState(true);
  const [show5, setshow5] = useState(false);
  const [show6, setshow6] = useState(false);
  const list = [show1, show2, show3, show4, show5, show6];
  const setlist = [
    setshow1,
    setshow2,
    setshow3,
    setshow4,
    setshow4,
    setshow5,
    setshow6,
  ];

  if (isEmpty(datasrc)) return null;
  // console.log("Wishlist1 config", config);
  // console.log("Wishlist1 datasrc", datasrc);
  // console.log("Wishlist1 otherattr", otherattr);
  // console.log("Wishlist1 positionConfig", positionConfig);

  return (
    <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
      <div className="flex flex-col jusitfy-start items-start">
        <div>
          <p className="text-sm leading-4 text-gray-600">Home</p>
        </div>
        <div className="mt-3">
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">
            Favourites
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-2xl tracking-tight leading-6 text-gray-600">
            {datasrc.length} items
          </p>
        </div>
        <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="relative">
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                    <button
                      aria-label="close"
                      className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
                    >
                      <svg
                        className="fil-current"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L13 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        customClassName="tracking-tight text-2xl font-semibold leading-6 text-gray-800"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        aria-label="show menu"
                        onClick={() => setlist[index](!list[index])}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400"
                      >
                        <svg
                          className={`fill-stroke ${
                            list[index] ? "block" : "hidden"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 5L5 1L1 5"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          className={`fill-stroke ${
                            list[index] ? "hidden" : "block"
                          }`}
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    id="menu1"
                    className={` flex-col jusitfy-start items-start mt-12 ${
                      list[index] ? "flex" : "hidden"
                    }`}
                  >
                    <div>
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position40",
                          positionConfig
                        )}
                        customClassName="tracking-tight text-xs leading-3 text-gray-800"
                      />
                    </div>
                    <div className="mt-2">
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position3",
                          positionConfig
                        )}
                        customClassName="tracking-tight text-base font-medium leading-4 text-gray-800"
                      />
                    </div>
                    <div className="mt-6">
                      <AtomText
                        item={
                          renderPositionType(
                            item,
                            "position47",
                            positionConfig
                          ) + " size"
                        }
                        customClassName="tracking-tight text-base font-medium leading-4 text-gray-800"
                      />
                    </div>
                    <div className="mt-6">
                      <AtomCurrency
                        type="mnt"
                        item={renderPositionType(
                          item,
                          "position4",
                          positionConfig
                        )}
                        customClassName="tracking-tight text-base font-medium leading-4 text-gray-800"
                      />
                    </div>
                    <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                      <div className="w-full">
                        <button className=" focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight py-4 text-lg leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800">
                          More information
                        </button>
                      </div>
                      <div className="w-full">
                        <button className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
