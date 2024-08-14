import { PreviewBoxPropsTypes } from "@/types/formTypes";
import React from "react";

const PreviewBox: React.FC<PreviewBoxPropsTypes> = ({ data, handleClose }) => {
  return (
    <div className="background-previewBox ">
      <div className="entries">
        {Object.keys(data).map((keyname, i) => (
          <p key={i} className="entry">
            <span>{keyname[0].toUpperCase() + keyname.slice(1)}</span>
            <span> {data[keyname]}</span>
          </p>
        ))}
        <button className="close" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PreviewBox;
