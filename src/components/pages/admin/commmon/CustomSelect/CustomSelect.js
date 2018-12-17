import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import ListItemText from "@material-ui/core/ListItemText"
import Select from "@material-ui/core/Select"
import Checkbox from "@material-ui/core/Checkbox"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
    backgroundColor: "#00074f",
    border: "1px solid #3070fd",
    borderRadius: 3
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit / 4
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3
  },
  text: {
    textColor: "#fff"
  }
})

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "100%",
      overflow: "unset",
      backgroundColor: "#00074f"
    }
  }
}

const names = [
  "superAdmin",
  "reports",
  "payouts",
  "sellShare",
  "platform",
  "news",
  "other"
]

function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium
  }
}

class MultipleSelect extends React.Component {
  state = {
    name: this.props.rights || []
  }
  handleChange = event => {
    this.setState({ name: event.target.value })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <Field
            name={`admin_${this.props.id}`}
            type={'select'}
            component={() => {
              return (
                <Select
                  multiple
                  value={this.state.name}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(", ")}
                  MenuProps={MenuProps}
                  className={"customSelect"}
                >
                  {names.map(name => (
                    <MenuItem key={name} value={name} className={"menuItem"}>
                      <ListItemText primary={name} />
                      <Checkbox
                        checked={this.state.name.indexOf(name) > -1}
                        className={"customCheckbox"}
                      />
                    </MenuItem>
                  ))}
                </Select>
              )
            }}
          />
        </FormControl>
      </div>
    )
  }
}

MultipleSelect.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(
  reduxForm({
    form: "admins"
  })(connect(null)(MultipleSelect))
)
