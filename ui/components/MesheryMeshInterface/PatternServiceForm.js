// @ts-check
import { AppBar, Button, makeStyles, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import useStateCB from "../../utils/hooks/useStateCB";
import { pSBCr } from "../../utils/lightenOrDarkenColor";
import { getMeshProperties } from "../../utils/nameMapper";
import { createPatternFromConfig, getPatternAttributeName } from "./helpers";
import PatternService from "./PatternService";
import PatternServiceFormCore from "./PatternServiceFormCore";

const useStyles = makeStyles(() => ({
  appBar : {
    // @ts-ignore
    boxShadow : ({ color }) => `0px 2px 4px -1px ${pSBCr(color, -30)}`,
    // @ts-ignore
    background : ({ color }) => `linear-gradient(115deg, ${pSBCr(color, -30)} 0%, ${color} 100%)`,
    position : "sticky",
  },
  tabPanel : {
    marginTop : "1.1rem",
    padding : "0px 2px"
  },
  formWrapper : {
    width : "100%"
  }
}));

function RJSFButton({ handler, text, ...restParams }) {
  return (
    <Button variant="contained" color="primary" style={{ margin : "0px 0.5rem 32px 0px" }} onClick={handler} {...restParams}>
      {text}
    </Button>
  );
}

function RJSFFormChildComponent({ onSubmit, onDelete }) {
  return (
    <>
      <RJSFButton handler={onSubmit} text="Submit" />
      <RJSFButton handler={onDelete} text="Delete" />
    </>
  )
}

/**
 * PatternServiceForm renders a form from the workloads schema and
 * traits schema
 * @param {{
 *  schemaSet: { workload: any, traits: any[], type: string };
 *  onSubmit: Function;
 *  onDelete: Function;
 *  namespace: string;
 *  onChange?: Function
 *  onSettingsChange?: Function;
 *  onTraitsChange?: Function;
 *  formData?: Record<String, unknown>
 *  reference?: Record<any, any>;
 *  scroll?: Boolean; // If the window should be scrolled to zero after re-rendering
 * }} props
 * @returns
 */
function PatternServiceForm({ formData, schemaSet, onSubmit, onDelete, reference, namespace, onSettingsChange, onTraitsChange, scroll = false }) {
  const [tab, setTab] = React.useState(0);
  const classes = useStyles({ color : getMeshProperties(getMeshName(schemaSet))?.color });

  const [settings, setSettings, getSettingsRefValue] = useStateCB(formData && !!formData.settings ? formData.settings : {}, onSettingsChange);
  const [traits, setTraits, getTraitsRefValue] = useStateCB(formData && !!formData.traits ? formData.traits : {}, onTraitsChange);

  const submitHandler = (val) => {
    onSubmit?.(createPatternFromConfig({ [getPatternAttributeName(schemaSet.workload)] : val }, namespace))
  };

  const deleteHandler = (val) => {
    onDelete?.(createPatternFromConfig({ [getPatternAttributeName(schemaSet.workload)] : val }, namespace), true)
  };

  if (reference) {
    if (reference.current == null) reference.current = {}

    reference.current.submit = (cb) => {
      submitHandler(cb(getSettingsRefValue(), getTraitsRefValue()))
    }
    reference.current.getSettings = () => getSettingsRefValue()
    reference.current.getTraits = () => getTraitsRefValue()
  }

  const renderTraits = () => !!schemaSet.traits?.length;


  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };


  if (schemaSet.type === "addon") {
    return (
      <PatternService
        formData={settings}
        type="workload"
        jsonSchema={schemaSet.workload}
        onChange={setSettings}
        onSubmit={() => submitHandler({ settings : getSettingsRefValue() })}
        onDelete={() => deleteHandler({ settings : getSettingsRefValue() })}
      />
    );
  }

  return (
    <div className={classes.formWrapper}>
      <AppBar className={classes.appBar}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="Pattern Service" >
          <Tab label="Settings" {...a11yProps(0)} />
          {
            renderTraits()
              ? <Tab label="Traits" {...a11yProps(1)} />
              : null
          }
        </Tabs>
      </AppBar>
      <TabPanel value={tab} index={0} className={classes.tabPanel}>
        <PatternService
          type="workload"
          formData={settings}
          jsonSchema={schemaSet.workload}
          onChange={setSettings}
          onSubmit={() => submitHandler({ settings : getSettingsRefValue(), traits })}
          onDelete={() => deleteHandler({ settings : getSettingsRefValue(), traits })}
        />
      </TabPanel>
      {renderTraits() ? (
        <TabPanel value={tab} index={1} style={{ marginTop : "1.1rem" }}>
          {schemaSet.traits?.map((trait) => (
            <PatternService
              formData={traits[getPatternAttributeName(trait)]}
              type="trait"
              jsonSchema={trait}
              onChange={(val) => setTraits({ ...traits, [getPatternAttributeName(trait)] : val })}
            />
          ))}
        </TabPanel>
      ) : null}
    </div>
  )
}

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id : `simple-tab-${index}`,
    "aria-controls" : `simple-tabpanel-${index}`,
  };
}

/**
 * @param {{ workload: { [x: string]: string; }; }} schema
 * @returns {String} name
 */
function getMeshName(schema) {
  return schema?.workload?.["service-mesh"]?.toLowerCase() || "core";
}

export default PatternServiceForm;
