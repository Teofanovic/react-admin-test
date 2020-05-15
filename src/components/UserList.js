import React from "react";
import {
  Datagrid,
  EmailField,
  Filter,
  List,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

import CustomUrlField from "./CustomUrlField";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const UserList = (props) => (
  <List filters={<PostFilter />} {...props}>
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
