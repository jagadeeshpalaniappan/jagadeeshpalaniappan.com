import React from "react";

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Jumbotron,
  Badge
} from "reactstrap";

// core components

function AppHeader() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
  
      <Navbar className="bg-primary mb-0" expand="lg">
        <Container fluid>
          <div className="navbar-translate">
            <NavbarBrand href="/index" >
              Jagadeesh Palaniappan
            </NavbarBrand>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
              type="button"
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="/index">
                  <i className="now-ui-icons users_single-02" />
                  <p>About Me</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">
                  <i className="now-ui-icons design_app" />
                  <p>Projects</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resume" >
                  <i className="now-ui-icons business_badge" />
                  <p>Resume</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" >
                  <i className="now-ui-icons ui-1_email-85" />
                  <p>Contact</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  
                >
                  <i className="now-ui-icons objects_diamond mr-1" />
                  <p>More</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={"Link"}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1" />
                    Item 1
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-react/#/documentation/introduction?ref=nukr-index-navbar"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1" />
                    Item 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
}

export default AppHeader;
