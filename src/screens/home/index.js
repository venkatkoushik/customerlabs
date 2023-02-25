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
        backgroundColor: "rgba(0, 0, 0, 0.1)",
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
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start", minHeight: "100vh", marginTop: "30px", marginLeft: "20px" }}>
            {drawer?.open && <button variant='outlined' className={classes.button} onClick={handleopenDrawer}><b>Save segment</b></button>}
            {!drawer?.open && <Button variant='outlined' onClick={handleopenDrawer} color="primary">Save segment</Button>}
        </div>
    )
}

export default withNavbars(Home)