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
  AtomImage,
} from "@components/common/Atom";

export default function MediumStatCards3() {
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
  // console.log("MediumStatCards3 config", config);
  // console.log("MediumStatCards3 datasrc", datasrc);
  // console.log("MediumStatCards3 otherattr", otherattr);
  //console.log("MediumStatCards3 positionConfig", positionConfig);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-full divide-x gap-y-14 lg:gap-y-0">
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="w-full px-7 py-0 flex flex-col lg:flex-row gap-x-7 gap-y-3"
            >
              <div>
                <span className="fa-stack text-sm">
                  <i className="fal fa-circle fa-stack-2x"></i>
                  <i className={`far fa-${item.icon} fa-stack-1x`} />
                </span>
              </div>
              <div>
                <AtomTitle
                  item={item.title}
                  customClassName="text-xs normal-case"
                  truncateRow={2}
                />
                <AtomText item={item.description} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
