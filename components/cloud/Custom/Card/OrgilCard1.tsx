import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
// import MotoGroupButton1 from "components/Moto/MotoSmalls/MotoGroupButton1";
// import MotoTitle from "components/Moto/MotoSmalls/MotoTitle";
// import MotoDiv from "components/Moto/MotoSmalls/MotoDiv";
// import MotoButton3 from "components/Moto/MotoSmalls/MotoButton3";
// import MotoTag from "components/Moto/MotoSmalls/MotoTag";
// import MotoPrice2 from "components/Moto/MotoSmalls/MotoPrice2";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomTitle,
  AtomImage,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomCurrency,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";

type PropsType = {
  item?: any;
};

const OrgilCard1: FC<PropsType> = ({ item }) => {
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

  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <div className="w-full h-48 p-5 bg-white rounded-t-xl flex-none relative">
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          alt={item.title}
          customClassName="w-full h-full object-contain"
        />
        <div className="absolute top-2 right-2">
          {/* <MotoTag item={item.tag} defaultClassName="" /> */}
          <AtomTag
            item={renderPositionType(item, "position51", positionConfig)}
            color="green-300"
          />
        </div>
      </div>
      <div className="flex-grow w-full p-5 border-t h-full">
        <div className="grid grid-cols-1 place-content-between h-full">
          <div className="w-full">
            <AtomText
              item={renderPositionType(item, "position40", positionConfig)}
              customClassName="text-xs font-medium leading-5 text-gray-400 mt-5"
            />
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              link=""
              customStyle={{}}
              customClassName="text-base font-semibold leading-6 text-gray-800"
              truncateRow={2}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center mt-5">
              <div className=" w-full">
                <AtomCurrency
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName="text-xl font-semibold leading-normal"
                  customStyle={{ color: "#00A793" }}
                  type="mnt"
                />
                <AtomCurrency
                  item={renderPositionType(item, "position47", positionConfig)}
                  customClassName="text-xs  leading-normal text-gray-400 line-through ml-2"
                  type="mnt"
                />
              </div>

              <AtomButton
                item="Сагс"
                type="primary"
                icon="fal fa-shopping-bag"
                color={widgetAllaround.color}
                customClassName="rounded-full"
              />
              {/* <MotoButton3
                  item={{ value: "Сагс" }}
                  icon="shopping-bag"
                  color="weekly"
                  colorDark="weekly-dark"
                  checked={false}
                  defaultStyle={{
                    height: "34px",
                  }}
                /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgilCard1;
