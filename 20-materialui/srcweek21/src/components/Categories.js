import React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import RightSide from "./RightSide";

export default function Categories({ title, items , onItemSelect}) {

  return (
    <>
      <h2>{title}</h2>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {items.map((item) => {
          return (
            <ListItem
              key={item.id}
                onClick={()=>onItemSelect(item)}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                dense
              >
                <ListItemText id={item.id} primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
