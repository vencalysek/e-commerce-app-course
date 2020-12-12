import React from "react";
import {DirectoryMenu} from "./directory.styles";

import MenuItem from "../../components/menu-item/Menu-item";

import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

const Directory = ({sections}) => {
  return (
    <DirectoryMenu>
      {sections.map(({id, ...otherSectionProps}) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
