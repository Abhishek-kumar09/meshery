import { AppBar, ClickAwayListener } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Tippy from '@tippyjs/react';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { sticky } from "tippy.js";
import Tpy from "tippy.js";
import "tippy.js/animations/scale-extreme.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import { pSBCr } from '../../utils/lightenOrDarkenColor';
import { createPopper } from "@popperjs/core"

const useStyles = makeStyles(() => ({
  appBar: {
    // @ts-ignore
    boxShadow: ({ color }) => `0px 2px 4px -1px ${pSBCr(color, -30)}`,
    // @ts-ignore
    background: ({ color }) => `linear-gradient(115deg, ${pSBCr(color, -30)} 0%, ${color} 100%)`,
    position: "sticky",
  },
  s2: {
    backgroundColor: "green",
    border: "1px solid green",
  }
}));

const TippyComponent = ({ title, children, content, style, ...otherProps }) => {
  const classes = useStyles({ color: "#009080" });
  const [open, setOpen] = useState(false);

  // REFS are used for stopping event propagation to the document body
  // They are foremost used here for intercepting the onclick event
  // the propblem with onClick react is that it get executed once the
  // event listeners are acknowledged, which is not desired at all
  const ref = useRef(null);
  const r2 = useRef(null);

  // The custome click-away listener that helps selectively
  // prevent the clickaway event from propagating to the
  // document body in certain criteria
  // useEffect(() => {
  //   const clickAction = () => {
  //     setOpen(false)
  //   }

  //   document.querySelector("body").addEventListener("click", clickAction)

  //   const tooltip = document.querySelector("#helloji .chhhh")?.parentElement;
  //   console.log({ tooltip })
  //   if (tooltip) {
  //     tooltip.remove();
  //     document.querySelector("body").append(tooltip);
  //     tooltip.style.display = "block";
  //   }

  //   return () => document.querySelector("body").removeEventListener("click", clickAction)
  // }, []);

  // stopping event propagation to the document body, for the clickaway event
  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.onclick = (e) => {
  //       e.stopPropagation();
  //     }
  //   }
  // }, [ref.current])

  useEffect(() => {
    if (r2.current) {
      console.log("r2.current", r2.current)
      r2.current.parentNode.style.backgroundColor = "green"
    }
  }, [r2.current])

  useLayoutEffect(() => {
    if (open) {
      const tooltip = document.querySelector("#helloji .chhhh")?.parentElement;
      if (tooltip) {
        tooltip.remove();
        document.querySelector("body").append(tooltip);
        tooltip.style.display = "block";
      }
    }
  }, [open]);

  return (
    <div
      id="helloji"
    >
      <ClickAwayListener
        onClickAway={(e) => {
          if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
          }
        }
        }
      >
        <Tippy
          className="chhhh"
          // popperOptions={}
          // className={classes.s2}
          // id="chalo"
          // key={title}
          // // trigger='manual'
          placement="right"
          animation="scale-extreme"
          inertia={true}
          hideOnClick={true}
          theme="light-border"
          plugins={[sticky]}
          content={(
            <div
              onClick={(e) => {
                e.stopPropagation();
                console.log("clicked appbar")
              }}
              ref={ref}
              id="oh-yes"
              style={!open ? {
                display: "none"
              } : {}}
            >
              <AppBar
                className={classes.appBar}
              >
                <div style={{ lineHeight: "40px", paddingLeft: "16px" }}>
                  {title}
                </div>
              </AppBar>
              {content}
            </div>
          )}
          interactive={true}
          // interactiveBorder={20}
          delay={100}
          visible={open}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true)
            }}>
            {children}
          </div>
        </Tippy>
      </ClickAwayListener>
    </div >
  )
}

export default TippyComponent;

export function createTippy(ref) {
  // const div = document.createElement("div");
  // document.querySelector("body").append(div);
  // console.log("ref", ref.current.getBoundingClientRect());
  // const popperref = ref.current.popperRef();
  // console.log("pooperref", popperref);

  // const tippy = Tpy(div, {
  //   getReferenceClientRect: ref.current.getBoundingClientRect,
  //   content: "Hello",
  // });

  // tippy.show();
  const btn = ref.current;
  const tooltip = document.querySelector("#helloji .chhhh").parentElement;
  tooltip.remove();
  document.querySelector("body").append(tooltip);

  // createPopper(btn, tooltip, { placement: 'right', });
}

export function createTippy2() {
  const div = document.createElement("div");
  document.querySelector("body").append(div);

  const tippy = Tpy(div, {
    content: "Hello",
  });

  tippy.destroy();
}