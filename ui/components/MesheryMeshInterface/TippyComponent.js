import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Tippy from '@tippyjs/react';
import React, { useEffect, useRef, useState } from 'react';
import { sticky } from "tippy.js";
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import { pSBCr } from '../../utils/lightenOrDarkenColor';

const useStyles = makeStyles(() => ({
  appBar : {
    // @ts-ignore
    boxShadow : ({ color }) => `0px 2px 4px -1px ${pSBCr(color, -30)}`,
    // @ts-ignore
    background : ({ color }) => `linear-gradient(115deg, ${pSBCr(color, -30)} 0%, ${color} 100%)`,
    position : "sticky",
  },
}));

const TippyComponent = ({ title, children, content, style, ...otherProps }) => {
  const classes = useStyles({ color : "#009080" });
  const [open, setOpen] = useState(false);

  // REFS are used for stopping event propagation to the document body
  // They are foremost used here for intercepting the onclick event
  // the propblem with onClick react is that it get executed once the
  // event listeners are acknowledged, which is not desired at all
  const ref = useRef(null);

  // The custome click-away listener that helps selectively
  // prevent the clickaway event from propagating to the
  // document body in certain criteria
  useEffect(() => {
    const clickAction = () => {
      setOpen(false)
    }

    document.querySelector("body").addEventListener("click", clickAction)

    return () => document.querySelector("body").removeEventListener("click", clickAction)
  }, []);

  // stopping event propagation to the document body, for the clickaway event
  useEffect(() => {
    if (ref.current) {
      ref.current.onclick = (e) => {
        e.stopPropagation();
      }
    }
  }, [ref.current])

  return (
    <Tippy
      key={title}
      // trigger='manual'
      placement="right"
      animation="scale-extreme"
      inertia={true}
      hideOnClick={true}
      theme="light-border"
      plugins={[sticky]}
      content={(
        <div
          style={style}
          ref={ref}
          {...otherProps}
        >
          <AppBar
            className={classes.appBar}
          >
            <div style={{ lineHeight : "40px", paddingLeft : "16px" }}>
              {title}
            </div>
          </AppBar>
          {content}
        </div>
      )}
      interactive={true}
      interactiveBorder={20}
      delay={100}
      visible={open}
    >
      <div onClick={() => setOpen(true)}>
        {children}
      </div>
    </Tippy>
  )
}

export default TippyComponent;