import { useContext } from "react";
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
import { Descriptions } from "antd";

const Banner8 = () => {
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
  if (isEmpty(datasrc)) return null;
  // console.log("Banner8 config", config);
  //console.log("Banner8 datasrc", datasrc);
  // console.log("Banner8 otherattr", otherattr);
  // console.log("Banner8 positionConfig", positionConfig);
  return (
    datasrc &&
    datasrc.map((item: any, index: number) => {
      return (
        <div className="mx-auto container py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
          <div className="flex justify-between bg-gray-50 items-stretch flex-row">
            <div className="flex items-center bg-gray-800 justify-center">
              <AtomText
                item={
                  renderPositionType(item, "position4", positionConfig) +
                  "% OFF"
                }
                customClassName="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white"
              />
            </div>
            <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800"
              />
              <AtomText
                item={renderPositionType(item, "position3", positionConfig)}
                customClassName="xl:mt-4 mt-2 text-base xl:text-xl leading-7 text-gray-600 pr-4"
              />
              <div className="xl:mt-4 mt-2"></div>
            </div>
            <div className="md:block h-44 md:h-60 xl:h-72">
              <AtomImage
                item={renderPositionType(item, "position2", positionConfig)}
                customClassName="h-full"
                alt={item.title}
              />
            </div>
          </div>
          <div className="md:hidden mt-6 w-full">
            <AtomImage
              item={item.mainimage}
              customClassName="w-full"
              alt={item.title}
            />
          </div>
        </div>
      );
    })
  );
};

export default Banner8;
