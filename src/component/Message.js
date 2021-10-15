import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Message(props) {
    return <MuiAlert elevation={6}
        variant="filled" {...props} />;
}

export default Message