import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SidebarLink = ({ icon, text, to, selected }) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItemButton selected={selected} component={renderLink}>
        {icon ? (
          <ListItemIcon>{icon}</ListItemIcon>
        ) : (
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
        )}
        <ListItemText primary={text} />
      </ListItemButton>
    </li>
  );
};

export default SidebarLink;
