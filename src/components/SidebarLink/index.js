import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SidebarLink = ({ icon, text, to }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? (
          <ListItemIcon>{icon}</ListItemIcon>
        ) : (
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
        )}
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
};

export default SidebarLink;
