import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { StateCardItem } from "@components/cloud/Custom/Card";
import { isEmpty } from "lodash";

const C4ColStatCards = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;

  // console.log("C4ColStatCards config", config);
  // console.log("C4ColStatCards datasrc", datasrc);
  // console.log("C4ColStatCards otherattr", otherattr);
  // console.log("C4ColStatCards positionConfig", positionConfig);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 ${otherattr.className}`}
      style={{ ...otherattr.style }}
    >
      {datasrc.map((item: any, index: any) => (
        <StateCardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default C4ColStatCards;
