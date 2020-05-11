import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Slider from "react-slick/lib";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Badge,
  CardFooter,
  Button,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";

// import AppHeader from "./AppHeader";

import {
  navbarLinks,
  intro,
  workExp,
  education,
  fullStackDev,
  skills,
  leadershipSkills,
  achievements,
  achievementsGallery,
  testimonials
} from "./data";

// TODO: Split into multiple files (VERY-HARD-TO-MAINTAIN)

/************************* HireRequest ******************************/

function HireRequest() {
  return (
    <section className="section py-5 overlay-bg text-light">
      <div className="container text-center">
        <img
          className="avatar-mini d-inline-block mx-auto rounded-circle mb-2"
          src="http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg"
          alt=""
        />
        <h5 className="text-center mb-2">
          Do you have interesting idea, thought, vision to building app?
        </h5>
        <small>
          Looking for an experienced full-stack developer to build your web / mobile / desktop
          application?
        </small>
        <div className="text-center">
          <Button color="info" href="tel:+14085335628">
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
}

/************************* Testimonials ******************************/

function TestimonialCard({ testimonial }) {
  return (
    <div>
      <div className="testimonial-item">
        <Card>
          <CardBody>
            <p className="testimonial-item-desc">{testimonial.description}</p>
          </CardBody>
          <CardFooter>
            <div class="align-items-end d-flex">
              <div class="align-items-center d-flex flex-grow-1">
                <img
                  class="mr-3 rounded-circle testimony-user-mini d-md-block d-none"
                  src={testimonial.avatarUrl}
                  alt=""
                />
                <div class="d-flex flex-column p-0 py-2">
                  <p className="mb-1">{testimonial.name}</p>
                  <small className="mb-0 text-muted d-md-block d-none">
                    {testimonial.designation}
                  </small>
                  <small className="mb-0 text-muted">{testimonial.company}</small>
                </div>
              </div>
              <div className="d-md-block d-none">
                <a
                  href="https://www.linkedin.com/in/jagadeeshpalaniappan"
                  target="_blank"
                  className="text-info"
                >
                  View in LinkedIn <i class="fas fa-external-link-alt text-info" />
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    initialSlide: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // slidesToScroll: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
          // variableWidth: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
          // variableWidth: false
        }
      }
    ]
  };

  return (
    <section className="skills-section section mt-5">
      <div className="container-fluid">
        <h2 className="section-title text-center mb-3">Testimonials</h2>
        <Slider {...settings} className="mb-5">
          {testimonials.map(testimonial => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

/************************* Skills ******************************/

function Skills({ skills }) {
  return (
    <>
      {skills.map(skill => (
        <>
          <p className="my-1">{skill.title}</p>

          <div>
            {skill.keywords.map(keyword => (
              <Button
                // color={keyword.highlight ? "info" : "default"}
                type="button"
                className={
                  keyword.highlight
                    ? "btn-info btn-round skill-keyword font-weight-bold"
                    : "btn-round skill-keyword skill-keyword-bg font-weight-bold"
                }
                size="sm"
              >
                {keyword.label}
              </Button>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

function SkillsContainer() {
  return (
    <section className="skills-section section mt-5">
      <div className="container-fluid">
        <h2 className="section-title text-center mb-3">Skills</h2>
        <h5>Technical Skills</h5>
        <Card>
          <CardBody>
            <Row>
              <Col xs={12} md={6}>
                <Skills skills={skills.devSkills} />
              </Col>
              <Col xs={12} md={6}>
                <Skills skills={skills.otherSkills} />
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* 
        <h5>Leadership Skills</h5>
        <Card>
          <CardBody>
            <p>
              {leadershipSkills.keywords.map(keyword => (
                <Badge pill color="secondary" className="mr-2">
                  {keyword}
                </Badge>
              ))}
            </p>
            <p className="mb-0">Team Lead</p>
            <ul>
              {leadershipSkills.leader.map(skill => (
                <li>{skill}</li>
              ))}
            </ul>

            <p className="mb-0">Scrum Master</p>
            <ul>
              {leadershipSkills.scrumMaster.map(skill => (
                <li>{skill.label}</li>
              ))}
            </ul>
          </CardBody>
        </Card>
         */}
      </div>
    </section>
  );
}

/************************* Achievements ******************************/

function AchievementsGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={achievementsGallery} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={achievementsGallery.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

function Achievement({ achievement }) {
  return (
    <div className="tm">
      <div className="tm-header">
        <h6>
          {achievement.title}{" "}
          <a href={achievement.srcUrl} target="_blank">
            <i className="fas fa-external-link-alt text-info" />
          </a>
        </h6>
        <small>{achievement.description}</small>
      </div>
      <p />
    </div>
  );
}

function AchievementsContainer() {
  return (
    <section className="skills-section section mt-5">
      <div className="container-fluid">
        <h2 className="section-title text-center mb-3">Awards & Achievements</h2>
        <Card className="p-3">
          <CardBody>
            <div className="tm-container">
              {achievements.map(achievement => (
                <Achievement achievement={achievement} />
              ))}
            </div>
          </CardBody>
        </Card>

        <AchievementsGallery />
      </div>
    </section>
  );
}

/************************* Dashboard ******************************/
class PageHeader extends React.Component {
  render() {
    return (
      <div
        className={
          "overlay-bg overlay-header " +
          (this.props.size !== undefined ? "overlay-header-" + this.props.size : "")
        }
      >
        {this.props.content}
      </div>
    );
  }
}

const Hero = ({ intro }) => {
  return (
    <div className="container mb-5 mt-3">
      <div className="hero-content media flex-column flex-md-row text-light">
        <img
          className="hero-img mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
          src={intro.avatarUrl}
          alt=""
        />

        <div className="media-body text-center text-md-left">
          <div className="lead">Hello, my name is</div>
          <h2 className="mt-0 display-4 font-weight-normal">{intro.name}</h2>

          <div className="bio mb-3">
            <p className="mb-0">{intro.line1}</p>
            <p>{intro.line2}</p>
            <p>
              Want to know how I may help your project? Check out my{" "}
              <a
                className="text-info"
                href="https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/jagadeesh-palaniappan-fullstack-dev.pdf"
              >
                resume
              </a>
              .
            </p>
          </div>
          {intro.keywords.map(keyword => (
            <Badge pill color="secondary mr-2">
              {keyword}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item }) => {
  return (
    <div className={"tm " + item.className}>
      <div className="tm-header">
        <p className="mb-0">{item.title}</p>
        {item.description && (
          <p className="mb-0">
            <small>{item.description}</small>
          </p>
        )}
        {item.line1 && (
          <p className="mb-0">
            <small>{item.line1}</small>
          </p>
        )}
        {item.year && (
          <p className="mb-0">
            <small>
              {item.year.start} -{" "}
              {item.year.end.toLowerCase() === "current" ? (
                <Badge pill color="secondary">
                  {item.year.end}
                </Badge>
              ) : (
                item.year.end
              )}
            </small>
          </p>
        )}
        {item.keywords && (
          <p className="mb-1">
            {item.keywords.map(skill => (
              <Badge pill color="secondary" className="mr-1">
                {skill}
              </Badge>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="tm-container">
      {items.map(item => (
        <TimelineItem item={item} />
      ))}
    </div>
  );
};

const DashboardCard = ({ card }) => {
  return (
    <Card className="dashboard-card px-4">
      <CardHeader>
        <CardTitle tag="h5">
          <i className={"mr-3 " + card.iconClass} />
          {card.title}
        </CardTitle>
      </CardHeader>
      <CardBody className="px-4">
        <Timeline items={card.items} />
      </CardBody>
    </Card>
  );
};

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <PageHeader size="lg" content={<Hero intro={intro} />} />
        <div className="overlay-content key-profile">
          <Row>
            <Col xs={12} md={4}>
              <DashboardCard card={education} />
            </Col>
            <Col xs={12} md={4}>
              <DashboardCard card={workExp} />
            </Col>
            <Col xs={12} md={4}>
              <DashboardCard card={fullStackDev} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <SkillsContainer />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <AchievementsContainer />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <TestimonialCarousel />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

/************************* AppHeader &  AppFooter ******************************/

class AppHeader extends React.Component {
  state = {
    isOpen: false,
    dropdownOpen: false,
    color: "transparent"
  };
  sidebarToggle = React.createRef();
  toggle = () => {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "white"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }

  render() {
    const navbarColor = this.state.color;
    const className =
      "navbar-absolute fixed-top " +
      (this.state.color === "transparent" ? "navbar-transparent " : "");

    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar color={navbarColor} expand="lg" className={className}>
        <Container fluid>
          <div className="navbar-wrapper">
            <NavbarBrand href="/">{""}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
            <Nav navbar>
              {navbarLinks.map(link => (
                <NavItem>
                  <a
                    href={link.srcUrl}
                    className="nav-link"
                    target={link.isExternalUrl ? "_blank" : "_self"}
                  >
                    <i className={"align-middle " + link.iconClassName} />{" "}
                    {!link.iconOnly && <span className="ml-1">{link.name}</span>}
                    {link.iconOnly && (
                      <p>
                        <span className="d-lg-none d-md-block ml-1">{link.name}</span>
                      </p>
                    )}
                  </a>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

function AppFooter() {
  return (
    <footer className="footer overlay-bg text-light">
      <HireRequest />
      <Container fluid>
        <div className="text-center">
          &copy; {new Date().getFullYear() + " "}
          Developed by{" "}
          <a
            href="https://www.jagadeeshpalaniappan.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Jagadeesh Palaniappan
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

/************************* PersonalWebPage ******************************/

class PersonalWebPage extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="main-panel w-100">
          <AppHeader />
          <Dashboard />
          <AppFooter fluid />
        </div>
      </div>
    );
  }
}

export default PersonalWebPage;
