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
const Banner7 = () => {
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
  // console.log("Banner7 config", config);
  // console.log("Banner7 datasrc", datasrc);
  // console.log("Banner7 otherattr", otherattr);
  // console.log("Banner7 positionConfig", positionConfig);
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 xl:px-4">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="w-full flex">
              <div className="w-full flex justify-center item-center flex-col">
                <div className="relative flex items-start justify-center">
                  <AtomImage
                    customClassName="w-full"
                    item={item.mainimage}
                    alt="desktop bg"
                  />
                </div>
                <div className="absolute flex justify-start items-start flex-col px-4 md:pl-6 xl:pl-12">
                  <AtomTitle
                    item={item.title}
                    customClassName="xl:text-4xl text-3xl font-semibold tracking-wider leading-9 md:leading-8 text-white pr-6 md:pr-0"
                  />
                  <AtomText
                    item={item.description}
                    customClassName="mt-2 text-base tracking-wider xl:text-xl leading-normal xl:leading-7 pr-6 md:pr-0 text-white w-11/12 md:w-3/5"
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner7;
