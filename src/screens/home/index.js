import { Button, makeStyles } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import Savesegment from '../../components/segment/savesegment'
import { DrawerContext } from '../../contexts'
import withNavbars from "../../HOCs/withNavBars"
const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "0px",
        border: "2px solid white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        padding: "7px 10px",
        cursor: "pointer",
        zIndex: "1500"
    }
}))
function Home() {
    const classes = useStyles()
    const drawer = useContext(DrawerContext)
    const [state, setState] = useState({
        segmentname: "",
        addschemaarry: ""
    })

    const handlechange = (name, value) => {
        debugger
        if (typeof value === "string") {
            setState({ ...state, [name]: value })
        }
    }

    const handleopenDrawer = () => {
        drawer.setDrawer({ ...drawer, open: true, component: <Savesegment state={state} setState={setState} handlechange={handlechange} /> })
    }
    return (
        <>
            <button variant='outlined' className={classes.button} onClick={handleopenDrawer}><b>Save segment</b></button>
        </>
    )
}

export default withNavbars(Home)