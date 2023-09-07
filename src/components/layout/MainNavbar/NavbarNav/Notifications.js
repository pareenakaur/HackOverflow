import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notificationsVisible: false,
    };
  }

  toggleNotifications = () => {
    this.setState((prevState) => ({
      notificationsVisible: !prevState.notificationsVisible,
    }));
  };

  render() {
    const { notificationsVisible } = this.state;

    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">&#xE7F4;</i>
          </div>
        </NavLink>
        {notificationsVisible && (
          <Badge pill theme="danger">
            2
          </Badge>
        )}
        <Collapse
          open={notificationsVisible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">
                Qualcomm's AI Boost Comes with Risks
              </span>
              <p>
                Consider diversification or set stop-loss orders to mitigate
                potential losses.
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">
                Lululemon Reports Strong Growth in China, Raises Guidance
              </span>
              <p>
                Lululemon expects higher sales and profits. Consider monitoring
                its expansion in China and growth strategy for potential
                investment opportunities.
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            View all Alerts
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
