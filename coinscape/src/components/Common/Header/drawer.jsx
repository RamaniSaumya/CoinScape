import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from "@mui/material";


 function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={ () => setOpen(true)}><MenuOutlinedIcon className="link"/></Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>

        <div className="drawer-div">
        <a href="/">
          <p className="linko">Home</p>
        </a>

        <a href="/">
          <p className="linko">Compare</p>
        </a>

        <a href="/">
          <p className="linko">Watch-list</p>
        </a>

        <a href="/">
          <p className="linko">Dashboard</p>
        </a>
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
