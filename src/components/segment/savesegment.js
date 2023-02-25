import {
    Button,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    Link,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { AlertProps, Optionsfordropdown } from "../../utils";
import { Circle } from "../circle";
import TopNavbar from "../navbars/topNavbar/topNavbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { useContext } from "react";
import { AlertContext, DrawerContext } from "../../contexts";
import IndeterminateCheckBoxsvg from "../../assets/Group 1.svg"
import { Warning } from "@material-ui/icons";
import axios from "axios";
import { config } from "dotenv";
const useStyles = makeStyles((theme) => ({
    circle: {
        width: "10px",
        height: "10px",
        borderRadius: "100%",
        backgroundColor: "red",
    },
    inlinetypo: {
        display: "inline-block",
    },
    formControl: {
        margin: "5px 0px",
    },
}));
function Savesegment() {
    // {
    // state,
    // setState,
    // handlechange = () => null
    // }
    const drawer = useContext(DrawerContext)
    const alert = useContext(AlertContext)
    const classes = useStyles();
    const [state, setState] = useState({
        segmentname: "",
        add_schema_currentvalue: "",
        add_schema_arry: [],
    });
    const [optionsfordropdown, setOptionsfordropdown] = useState(
        Optionsfordropdown ?? []
    );
    const [show, setShow] = useState(false)
    const [dynami_state_array, setDynamic_state_array] = useState({});

    const handlechange = (name, value) => {
        debugger;
        if (typeof value === "string") {
            setState({ ...state, [name]: value });
        }
    };

    const handlechangeforaddschema = (value, e) => {
        debugger;
        let id = uuidv4();
        console.log(e);
        if (value) {

            setState({
                ...state,
                add_schema_currentvalue: value,
            });
        }
        else {
            setState({
                ...state,
                add_schema_currentvalue: "",
            });
        }
    };

    const dynamicOnchange = (value, oldid) => {
        debugger
        let id = oldid;
        if (value?.Value) {
            let result = state.add_schema_arry.find((v) => v === value.Value)
            let error = typeof result === 'undefined'
            if (error) {
                let data = JSON.parse(JSON.stringify(dynami_state_array));
                // data[key].value = value;
                // setDynamic_state_array(data);

                // for dynamic auto

                let options_for_dynamicauto, options_for_auto = [];
                let removed_value_for_dymicauto, removed_value_for_auto, added_value_for_dymicauto, added_value_for_auto = {};
                removed_value_for_dymicauto = data[oldid].value
                removed_value_for_auto = value
                added_value_for_auto = removed_value_for_dymicauto
                added_value_for_dymicauto = removed_value_for_auto

                // dynamic options //
                //removing
                options_for_dynamicauto = data[oldid]?.filteredoption?.filter((v) => ((v.Value !== removed_value_for_dymicauto?.Value)))
                options_for_dynamicauto = options_for_dynamicauto?.filter((v) => (v.Value !== added_value_for_dymicauto?.Value))
                //adding
                options_for_dynamicauto = [...options_for_dynamicauto, added_value_for_dymicauto]

                // unique
                //options_for_dynamicauto = [... new Set(options_for_dynamicauto.map((item) => item))]


                // for auto options //
                //removing
                options_for_auto = optionsfordropdown.filter((v) => ((v.Value !== removed_value_for_auto?.Value)))
                options_for_auto = options_for_auto.filter((v) => (v.Value !== added_value_for_auto?.Value))
                //adding
                options_for_auto = [...options_for_auto, added_value_for_auto]
                //unique
                // options_for_auto = [...options_for_auto, added_value_for_auto]

                // add schema change
                //removing
                let schemaarryforstate = state.add_schema_arry?.filter((v) => v !== removed_value_for_dymicauto?.Value)
                // adding
                schemaarryforstate = [...schemaarryforstate, removed_value_for_dymicauto?.Value]
                //unique
                //schemaarryforstate = [...new Set(schemaarryforstate)]

                let stateschema = {
                    id: id,
                    label: value?.label,
                    value: value,
                    filteredoption: options_for_dynamicauto,
                };
                setDynamic_state_array({ ...dynami_state_array, [id]: stateschema });
                setOptionsfordropdown(options_for_auto);
                setState({ ...state, add_schema_currentvalue: "", add_schema_arry: schemaarryforstate })

            }
            else {
                alert.setSnack({
                    ...alert, open: true,
                    severity: "warning",
                    msg: "Please select other schema",
                    vertical: AlertProps.vertical.top,
                    horizontal: AlertProps.horizontal.center
                })
            }
        }

        else {

            setDynamic_state_array({ ...dynami_state_array, [dynami_state_array[id]]: { ...dynami_state_array[id], label: "" } });
        }

    };

    const removeitem = (value) => {
        let data = JSON.parse(JSON.stringify(dynami_state_array));
        let schemaarry = state.add_schema_arry.filter((v) => v !== data?.[value]?.value?.Value)
        setOptionsfordropdown([...optionsfordropdown, data?.[value]?.value])
        delete data[value];
        setDynamic_state_array(data);
        setState({ ...state, add_schema_arry: schemaarry })
    };
    const back = () => {
        drawer.setDrawer({ ...drawer, open: false, component: <></> })

    }
    const handleonpresslink = () => {
        debugger
        if (state?.add_schema_currentvalue?.label) {
            let id = uuidv4();
            let selectedsegmets = state.add_schema_arry;
            selectedsegmets.push(state.add_schema_currentvalue.Value);
            let uniqueItems = [...new Set(selectedsegmets)];
            let filteredoption = optionsfordropdown.filter(
                (v) => !uniqueItems.includes(v.Value)
            );
            let stateschema = {
                id: id,
                label: state?.add_schema_currentvalue?.label,
                value: state?.add_schema_currentvalue,
                filteredoption: filteredoption,
            };
            setDynamic_state_array({ ...dynami_state_array, [id]: stateschema });
            setOptionsfordropdown(filteredoption);
            setState({ ...state, add_schema_currentvalue: "", add_schema_arry: uniqueItems })
        }
        else {
            alert.setSnack({
                ...alert, open: true,
                severity: "warning",
                msg: "Please select schema first",
                vertical: AlertProps.vertical.top,
                horizontal: AlertProps.horizontal.center
            })

        }
    }
    console.log(state);

    const savesegment = async () => {
        let nameerror = state?.segmentname?.length === 0
        let schemaerror = state.add_schema_arry?.length === 0
        if (!nameerror && !schemaerror) {
            let arry = [];
            Object.keys(dynami_state_array).forEach((v) => {
                let obj = {
                    [dynami_state_array[v]?.value?.Value]: dynami_state_array[v]?.label
                };
                arry.push(obj)
            })
            let schema = {
                "segment_name": state.segmentname,
                "schema": arry
            }
            console.log({ schema })
            var config = {
                method: 'post',
                url: 'https://webhook.site/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: schema
            };
            axios(config)
                .then((res) => {
                    console.log({ res })
                })
        }
        else {
            if (nameerror && schemaerror) {
                alert.setSnack({
                    ...alert, open: true,
                    severity: "warning",
                    msg: "Please fill segment name and add schema ! ",
                    vertical: AlertProps.vertical.top,
                    horizontal: AlertProps.horizontal.center
                })
            }
            else if (schemaerror) {
                alert.setSnack({
                    ...alert, open: true,
                    severity: "warning",
                    msg: "Please add schema! ",
                    vertical: AlertProps.vertical.top,
                    horizontal: AlertProps.horizontal.center
                })
            }
            else if (nameerror) {
                alert.setSnack({
                    ...alert, open: true,
                    severity: "warning",
                    msg: "Please fill segment name ! ",
                    vertical: AlertProps.vertical.top,
                    horizontal: AlertProps.horizontal.center
                })
            }
        }

    }
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <TopNavbar name="Saving Segment" back={back} />
            <div style={{ padding: "20px" }}>
                <Typography>Enter the Name of the segment</Typography>
                <TextField
                    value={state?.segmentname ?? ""}
                    onChange={(e) => {
                        handlechange("segmentname", e.target.value);
                    }}
                    variant="outlined"
                    size="small"
                    fullWidth
                />
                <Typography>
                    To save your segment, you need to add the schemas to build the query
                </Typography>
                <div
                    style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}
                >
                    <span>
                        <Circle color="green" />-
                        <Typography className={classes.inlinetypo}>User Traits</Typography>
                    </span>
                    <span>
                        <Circle color="red" />-
                        <Typography className={classes.inlinetypo}>Group Traits</Typography>
                    </span>
                </div>

                {Object.keys(dynami_state_array)?.map((v, i) => {
                    console.log(dynami_state_array?.[v]?.value ?? "");

                    return (
                        <Grid
                            container
                            lg={12}
                            md={12}
                            sm={12}
                            alignItems="center"
                            style={{ margin: "5px 0px" }}
                            spacing={1}
                        >
                            <Grid item container lg={1} md={1} sm={1} justify="center">
                                <Circle color="red" />
                            </Grid>
                            <Grid item lg={9} md={9} sm={9}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    options={dynami_state_array?.[v]?.filteredoption ?? []}
                                    getOptionLabel={(option) => option?.label}
                                    size="small"
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            margin="dense"
                                            label={dynami_state_array?.[v].label}
                                            variant="outlined"
                                        />
                                    )}
                                    // closeIcon={<ExpandMoreIcon fontSize='small' />}
                                    value={dynami_state_array?.[v]?.Value ?? ""}
                                    onChange={(e, value) => dynamicOnchange(value, v)}
                                />
                            </Grid>
                            <Grid container item lg={2} md={2} sm={2} justify="center">
                                <img src={IndeterminateCheckBoxsvg} onClick={() => removeitem(v)} style={{ cursor: "pointer" }} />
                            </Grid>
                        </Grid>
                    );
                })}

                <Grid
                    container
                    lg={12}
                    md={12}
                    sm={12}
                    alignItems="center"
                    style={{ margin: "5px 0px" }}
                    spacing={1}
                >
                    <Grid item container lg={1} md={1} sm={1} justify="center">
                        <Circle color="grey" />
                    </Grid>
                    <Grid item llg={9} md={9} sm={9}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={optionsfordropdown}
                            getOptionLabel={(option) => option?.label}
                            size="small"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Add schema to segment"
                                    variant="outlined"
                                    margin={"dense"}
                                />
                            )}
                            // closeIcon={<ExpandMoreIcon fontSize='small' />}
                            value={state?.add_schema_currentvalue ?? ""}
                            onChange={(e, v) => handlechangeforaddschema(v, e)}
                        />
                    </Grid>
                    <Grid container item lg={2} md={2} sm={2} justify="center">
                        <img src={IndeterminateCheckBoxsvg} onClick={() => setShow(!show)} style={{ cursor: "not-allowed" }} />
                    </Grid>
                </Grid>

                <Link style={{ color: "#41b494", textDecoration: "underline", cursor: "pointer" }} onClick={handleonpresslink}>+ Add new schema</Link>
                <div style={{ position: "absolute", bottom: "0px", padding: "20px 25px", backgroundColor: "#f6f6f6", left: "0px", width: "100%", display: "flex", gap: "10px" }}>
                    <Button style={{ backgroundColor: "#41b494", color: "white", textTransform: "capitalize" }} onClick={savesegment}>Save the Segment</Button>
                    <Button style={{ color: "#d65882", backgroundColor: "white", textTransform: "capitalize" }} onClick={back}>cancel</Button>

                </div>
            </div>
        </div>
    );
}

export default Savesegment;