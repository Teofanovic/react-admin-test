import React from "react";
import { Datagrid, EmailField, List, TextField } from "react-admin";

import CustomUrlField from "./CustomUrlField";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <CustomUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
