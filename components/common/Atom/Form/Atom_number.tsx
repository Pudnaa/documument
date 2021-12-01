import React, { FC, useContext } from "react";
import Atom_label from "./Atom_label";
import NumberFormat from "react-number-format";
import FormMetaContext from "context/Meta/FormMetaContext";
import { fieldHideShow, getAtomValue, fieldDisableEnable } from "util/helper";

type PropsType = {
  config: any;
  className: any;
  rowIndex?: any;
  style: any;
  labelClassName: any;
  sectionConfig?: any;
};

const Atom_number: FC<PropsType> = ({
  config,
  rowIndex,
  labelClassName,
  className,
  style,
  sectionConfig,
}) => {
  const {
    processExpression,
    formDataInitData,
    handleChangeContext,
    processConfig,
  } = useContext(FormMetaContext);

  const handlerChange = (e: any) => {
    handleChangeContext({
      name: config.paramrealpath,
      value: e.value,
      rowIndex,
    });
  };

  return (
    <div
      className={`${
        sectionConfig?.otherattr?.labelPosition == "top"
          ? `flex flex-col`
          : `grid grid-cols-2 gap-4`
      } ${
        config.isshow == "0"
          ? "hidden"
          : fieldHideShow(config, processExpression) && "hidden"
      }`}
    >
      <Atom_label
        labelName={config.labelname}
        className={`${labelClassName}`}
        isrequired={config.isrequired}
        labelFor={config.paramrealpath}
        styles=""
        sectionConfig={sectionConfig}
      />

      <div className="self-center">
        <NumberFormat
          thousandsGroupStyle="thousand"
          value={getAtomValue(
            config,
            formDataInitData,
            processConfig,
            rowIndex
          )}
          prefix=""
          decimalSeparator="."
          displayType={processConfig.actiontype === "view" ? "text" : "input"}
          type="text"
          thousandSeparator={true}
          allowNegative={true}
          name={config.paramrealpath}
          id={config.paramrealpath}
          placeholder={config?.placeholdername}
          style={{ ...style, width: parseInt(config.columnwidth, 10) }}
          className={`${className} rounded border-gray-400 focus:ring-0 focus:border-black text-right`}
          onValueChange={handlerChange}
          fixedDecimalScale={false}
          disabled={fieldDisableEnable(config, processExpression)}
        />
        {config.isEmpty && <span>{config.errorText}</span>}
      </div>
    </div>
  );
};

export default Atom_number;
