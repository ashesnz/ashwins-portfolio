import React from "react";

function Sectiontitle(props) {

    const renderTitle = () => {
        const displayTitle = !props.padBottom;
        if (displayTitle) {
            return (<React.Fragment>
                    <h2>{props.title}</h2>
                    <span>{props.title}</span>
                </React.Fragment>
            );
        } else {
            return <h2>{props.title}</h2>
        }
    }


  return (
      <div className={`${props.padBottom ? '': 'mi-sectiontitle'}`}>
          {renderTitle()}
      </div>
  );
}

export default Sectiontitle;
