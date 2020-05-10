import React from "react";

function getAge(d1, d2) {
  d2 = d2 || new Date();
  var diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const navbarLinks = [
  {
    name: "Download My Resume",
    isExternalUrl: false,
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/jagadeesh-palaniappan-fullstack-dev.pdf",
    iconClassName: "fas fa-cloud-download-alt fa-2x"
  },
  {
    name: "Slides",
    isExternalUrl: true,
    srcUrl: "/intro",
    iconClassName: "fas fa-rocket fa-2x",
    iconOnly: true
  },
  {
    name: "LinkedIn",
    isExternalUrl: true,
    srcUrl: "https://www.linkedin.com/in/jagadeeshpalaniappan/",
    iconClassName: "fab fa-linkedin fa-2x",
    iconOnly: true
  },
  {
    name: "Github",
    isExternalUrl: true,
    srcUrl: "https://github.com/jagadeeshpalaniappan",
    iconClassName: "fab fa-github fa-2x",
    iconOnly: true
  },
  {
    name: "Facebook",
    isExternalUrl: true,
    srcUrl: "https://www.facebook.com/jagadeeshpalaniappan",
    iconClassName: "fab fa-facebook-square fa-2x",
    iconOnly: true
  },
  {
    name: "Call",
    isExternalUrl: true,
    srcUrl: "tel:+14085335628",
    iconClassName: "fas fa-phone-alt fa-2x",
    iconOnly: true
  }
];

const intro = {
  avatarUrl: "http://jagadeeshpalaniappan.github.io/assets/img/jag/hero1.jpg",
  name: "Jagadeesh Palaniappan",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Angular.js Developer",
    "Node.js Developer",
    "Java-Spring Developer"
  ],
  line1: (
    <>
      I’m a Full-Stack developer and have more than <b>{getAge(new Date(2011, 8, 30))} years</b> of
      experience in building highly scalable web applications.
    </>
  ),
  line2: (
    <>
      I’m a great team player and also single-handedly developed applications, starting from scratch
      - designing, developing (<b>Front-End</b> and <b>Back-End</b>) applications, building and
      deploying them on cloud.
    </>
  )
};

const education = {
  title: "Education",
  iconClass: "fas fa-user-graduate",
  items: [
    {
      title: "Master Degree (MS)",
      description: "Software Engineering",
      line1: "BITS Pilani",
      className: "mb-4"
    },
    {
      title: "Bachelor Degree (B.Tech)",
      description: "Information Technology (IT)",
      line1: "SASTRA University",
      className: "mb-4"
    }
  ]
};

const workExp = {
  title: "Work Experience",
  iconClass: "fas fa-briefcase",
  items: [
    {
      title: "Staff Software Engineer",
      description: "GE Digital, San Ramon",
      year: { start: "2016", end: "Current" }
    },
    {
      title: "Senior Software Engineer",
      description: "Cisco, San Jose",
      year: { start: "2015", end: "2016" }
    },
    {
      title: "Senior Software Engineer",
      description: "Tech Mahindra, Hyderabad",
      year: { start: "2011", end: "2015" }
    }
  ]
};

// TODO: Add Mobile App & Desktop App

const fullStackDev = {
  title: "Full Stack Developer",
  iconClass: "fas fa-user-tie",
  items: [
    {
      title: "UI Developer",
      keywords: ["React / Redux", "Angular", "Web Components"],
      className: "mb-4"
    },
    {
      title: "Node.js Developer",
      keywords: ["Node.js", "Express", "REST API"],
      className: "mb-4"
    },
    {
      title: "Java Developer",
      keywords: ["Java", "Spring", "REST API"],
      className: "mb-4"
    }
  ],
  footer: "View All My Skills"
};

const achievements = [
  {
    title: "Learn and Adapt To Win (Award)",
    description:
      "I have developed a prototype to control Web Application using voice (Alexa / Google Home). This means you can natively talk and control web or mobile application.",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award2-learn-and-adapt-to-win.pdf"
  },
  {
    title: "Customers Determine Our Success (Award)",
    description:
      "there was a requirement from customer which is highly wanted which has been scheduled for Q1 release. " +
      "I always beleive in 'customer first is key to success', I quickly completed my Q1 deliverables and delivered the customer wanted Q2 feature in Q1 release itself",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award1-customers-determine-our-success.pdf"
  },
  {
    title: "Customers Determine Our Success (Award)",
    description:
      "For troubleshooting and fix the Rasgas (one of our core customer) fixed the issues very quickly by steching my weekend holidays. As a result 'Customers' were happy with the real quick fix",
    srcUrl:
      "https://raw.githubusercontent.com/jagadeeshpalaniappan/jagadeeshpalaniappan.github.io/master/assets/jag/awards/ge/award3-customers-determine-our-success.pdf"
  }
];

// TODO: Read it from Linked In API
const jimAvatar =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDAREAAhEBAxEB/8QAHQAAAgMBAQEBAQAAAAAAAAAABgcEBQgDCQABAv/EAD4QAAEDAwMCBAMGAggHAQAAAAECAwQFBhEAEiEHMRNBUWEIIpEUFTJxgaFCUhYjYnKxwdHhFyQzgqKy8PH/xAAbAQACAwEBAQAAAAAAAAAAAAAEBQIDBgEHAP/EADIRAAICAQMDAgQGAgEFAAAAAAECAAMRBBIhBTFBE1EUImGhIzJxgZGxBsHwFTNC4fH/2gAMAwEAAhEDEQA/ANUXbX6ZErclh2W2h4LVlBPPc6ym05MPQ5Epm7gpZXzMb+uvtpkzxJiLhpCVAfbEZ1MVsewkC+J2F2URpQC57SSfInXTW48Tm8SYi7KHx/z7fPvqPpt7SW8Swan06Ujc3JaKT5lQGoEEd5Jct2Eo7jl0qMwpbsxpsD+Ldr7aW7SwMU7wdhX1bdLODPS+6f4UHJ1NNLYx4Ept1C+8lq6otPnZAhSH1eRwQNGp0y5/EBbXVJ3M6Il3xcEB+TTqcGGkJzucWf8ALV3wBU4Yya6j1Ble0g9OrJvvqU1Iem1c01tpwoKGSSeDjuTq/wCEVJ8HLw5tj4cftbzyqtcFQlFCvwiQpI+gOpekB2kxnzLKD0Mt9hpaC5LdIWfmVIWT/wC2rRWZGcek9k0a4r/uqTUYaJT6HygFwZwNDUIGHM7uIXiNc9LbZE4KFKYHH8g0Z6a57SBc47yvndNbeTV0JTSGVZHkjRdSoBBbCxMWfWPp3bjFctdT1MabjqnNpd4wCnknOPYa64QAk9p8m8kADmL/AKr3TbCp5g2zQIUKIwriWGsuun1Gfwp/f/DWM1nUNx2U8D395v8Ap3RgALL+T7eBFw1W5SnSQsjB0pFjdzNOdLWBgCX0G6y4jwJbaX2VDapKwFAj3B4Oi0t5iy7QhhxL3pzQLHo1ymfIpzcaM8CFlCSUIUTwrb5DvnH01oNHrSjYc8e8yes6UDkqP2jqFqW8lyQ6y5HZb2FSFJIwR5Ea06XuDkTJWaGlshhItEvyiUqj1CniaHXk5G1HOhb3AcFjCdNWi1bV8Sk6TdRKfb8CoiQ2+lS3VEfJjPzHUNRfTkYYT7TowBDCSnviDp9tIkOP06WULXhK/DJzoY6iljgNCVDDMGV9drgLi1RLSmPx1K3JcCRzrvxNY4zITnR3LwY6tXG3bsiOxGWvKg8Cfm59NQ043DAgbahUO0w2lK6psrD6pkMDtgJP+umAoZuxnPiVHiQZEnqgmUl8TIh+XgbD/rohdIzDvKm1aA9ouOqF8XQ28inV59lb6EBwFkEFIVkfUgfTWO69e2nK6YHvzNv/AI3pk1OdUR2OBFWKj9pcKjuWc9k8/vrHhsmelKnHEmDGwEMu8+RwB/jq/BMgVMkQmitRPhqAHvoqoSi3gS9p+/fwDgD0xphXzxEd2IUdLunT95XBVaYudKZjtITIbQhwhISTgpHpyRrU6D8hDHtMJ1NAtmV8w7tzpPDsO65jPhiQh1JUFO/Mf30D1NcEMIuocfl8wuMKMwfljNJHsgazjZhwOYC9YnGUW0hO1CMrx2A9NF6Lm4ZnzcCMGzg0Lch7kpzs9Bq23O84gsWlqx6iOtFUDefCWrJx/e1ZU9q6naO0y9pLWTQk6NIfp23wwCCMnWtos94ftYrJDNPjNRmjJUkKxjGrTaw/LK39GsZsaYs+LG5KTal/1iTUJzcaI2hgAHlWPCSdqU9zkk/XXnnV67dTriFGTgT0/oGpoo0AbdgZP9xPWl1MoN3Nb4q1RAThtM1xDal/kndnPtpVZo7ae4mv0/UKbexjAQ9EiwlPyXmmGG2963HVhCUgd8k8DU6/mIUQiy1UBYniC1a6gfedNCLVqCHHVEYkMUt2W33/AJ/lRj3BOnNdKoPxP7iG7VG0/g8/XBMqKF12cs0NNX9Fkxi86G2J8SnqDTmTjC0hR2n/ACzo6ugPzV/cS3as08X5/XE1j0Yqq7f6qrjyGwhiSyuKh5JCkLWEheAocH+E8eumelP/AI+8zXU2x+L4EYNwVpqqXi6GT/02yDoXqRxtWZrpusr1zu9fjiVlVqrMBpTkh9LLSeSpZAGkBGZoxFd1Guuj3BS2GY8xqWA5yG1AkHI0ZpFKWgkQDXWMlO5Yx6FPDNHhoCiAG+Bny1a+CxnVDFQYEU6vSqT1kmIKhnGVAc457atqsCaoAzL6ot3TuI4Wr3nTozqEjbhQG4jHnp/p71suKY7QOvVahvlM7rU7NQz47pwQM4069FWHEo1HTxqmzYxnnjM6TxKHTLkluuCpTFV56M8moNCRNSlJKmsPqO4I2nbtwMkZJ41511DUvnB45x/GZ7Z0vp1GmYV1jIwDn9QIJ1qmVOcVNIoMRMUo+QL2LWpR7AccH8u3roBXG3dv5j7a5s2GsbfeWFqfD3DctumXFOkzZb1PkpnvwHpC3oy4yVZ2bFE5wnDnvtxo+jVNY7IAMY9scyq/pdaVLZk5BzjJIx7YMIKhTK41VWh96sssJd3IdfaK0OtEZ3JI458vb00Ouzdhpc4t2A1nH3hczSIFbVAjOx4Uxf2pDu1SCpJLZ3BeFemB68nRyOBnZAba2Y/OIbSKMYz7M+E+7BkQtiWRHV4ZSF5CgnHrtyQPTRSudmQcHMFTTpZqcOMgg5zz2hV0GuibcUGZPqrqlyQjClL4OB5n6aW22taoLHJ/9xLrul6Xpmvuq0i7VJBx9SATMgfGV8RlVr92yLToM5cWFH+WQ4yrClH+UEdtEUJzmUisAZMX3w80+6J9xNKp8l19ppweKh1ZKT/vp1Wu44MospFgxienlvuOrosPxY+HA2AoAeekdqlHKmVbfaK196XCvqoVBRS644v17Z8tImNwsa5TzMZuw5DeY67eiyV0JMlzAS5tVgca2PS0stAdoOVw3EuRKIbQkHnbrb1V5AhJYTL/AF1t1qmXHU5iHnYS5yg6CztKXtw5CkqBBwoKOeCNx9deXdfrOm6gykZVsN/o/eex/wCMEa7RIc8rlT+3b7RNMUnch01CsKiwdv8AXFlkIJSe6d4yoA9jjHGkjPj8q8zanTKvdsxwW9elDotHflvVGLBp7bSSlbvzNgfhSAB3/IaP0W4gjzBdWVCjJgRUoVKiRkzaRPlfc6x4mxh5xlCMk52ozwnzAGODq+5LF+YDP7Sqn0Dx/uHFjRKTEjPSWm071o+d9R3rKf7xyceeNSrs3pkyOqpUDCiX1TtaZdCItPitq8V51CUvJPDe0nJ9yQcD89EbWsUIO+Yq091emte60/KFMHuodyp6E0e8kPPJVIAxHSnjcNoAwPz1E6R6m2N3PMw9eoOrd7ic5JnmVIrUiqXa/Jmr8STJdU64T6k50yqQg9oU/E1h8I8dbjEp5KywTKACz2IyONXmza3EurrxUWnpFSIyG6bHTgH5BzpHYxdiTFR7zOaXpc+5ZKiSjKs7c+QOlK7mt2iYx6ituDHzT7jbZthtlZAWhPOPbXoXT3ULgicap92MSvtW6Yt0yXENKIDJ2qI/PTPUdTXSVhlGY30fSW1jkMcARS/FZC+zzKYpoEkw3D/eIX/99dea9a1h1uqSwjHGPvPVf8c0f/TtO4U5G7P2mP43UWVNj1Glx6fIqtTUoJW02ypSGUkY5P5Hj17656SV4ZjiEjUajUsQsvLT6Y12ZDRHdWYqFL8TwSgABXcZBX+mjUvVvyiXDp7n/uPCiodELzYpy2os1DrSk4CFyEJQkYHknPuMe+jt4A+aK7NKy/keQvhp+/GpNzxZxdbpjBXGbaceLqS4NwUpOeQD6dtBX+mCCnkcy7R23bGW05wRibg6Q223NttiryakzD4Wy004PmWUgEqBz+nbTjpdtdDLfZ44xM311bNQr6Skctgk/wCp5V/GN1uqN+dYalEiyVGDCeLCENnPiEHGT66bW3Jfd6oHEz1NLaekVHvBCy+nT9Uuqkvzoj7LUs4ytBTk/rqjWlUr9SuHaQMz7Xmy+k1oItWC3GaZIT9pSf8Ay1mUty53RtqdwrCpNtUF5K6RF35Cg2kH6a4V5icCJaLDSq4i0EhJDQUVE9yc6ZJ08BheIgYB7yTC+Kwp2jPlBCiEHz9tP9Op9MnE7eVWwDMEOjfUa27KqlT+/wCoMRlb1FLIO9xWPJKRkk6qdEdBujGp7a3/AA/MV3xKfF1YV3VWkUqIHor7MkspW5tUohwhICkoJ2gkDuc+oGkHUuni+oPSPmX7j2mp6Xrn01pS9vlb+/BgNZlEaT9pERtJXKdU6okDKiTj9OMAflrGXM7MBNzpitamHdAttDbwcU6V/wBcG1MIUCBgEk/p2/8AzT3S1sK8nvFtuoRrdoPEaojI+6k4TsjuowCBjjOD9NF+mx4lNlyJyTFla9ARSptQjREhpyXLVvV3AwcE6qsqO8CU6e0MCR5gM18WzUqJRKVLdDFJkPyjRJCT4ZbW2tTbrC1gHhaFNugkHBKh2xrTno9WsqrGSuPufMzQ6q+jvscAMW9/A8RQDpdZlh3c5c85+dWkyHi4hbrjSm8q+Y7do5PPsdNrOjB6M+oVH6RLX1MpqcsgaPZFYtzqDZbP3cy1EqMN0ORk5SCrB7Z459tLh0u5EKht39xi/UqLW3lduP4MM6VQ6rNp1JcYZUyovJLwI5ABOdZSxDTZtsUgiF2PvGazwZpqitoRTWEqJ3JQAfoNWeopgXpkTJXVq7G492FLU1TbDENCXDHe2bVEncVq7DHHqfbT+yu20gVthf7iqmtVybByTE5WfiGmQw7TotVnyo+3Ph01Sm04HcqcVkq/QDTREsCfKePrOFKQ/wAwyfeK2t9RKnctArrjCkU9hhoOuJZBD7+QdoUrvjAPH7HXxp2MCJcLQylTEvTELfq1Mm+MVBuUJPhqHdLR3k6+ccEEYnQQcEHM290uvmOqdWqXJCWZccocy2cl1pXZafPPcHHmk6wOo04rt47HtNslz20hhyRwYX0CVEgzFuJkpaS6lSinOSlWT3HfGPLTPT1/LzFdtzAxqXF1RiKpMinUxtcuctkNtpYRuCSRySRwOMabZrr5aAgW24VRFVe10f8ADKypay6uVX5TZYjIKsqdkufK3yf7Sh+g0naz1rQq+ZqKqRpdOXY84mR79pbFpW9YFqsrTNqFJqDypMpv5At7wjvwRk4BAAPt216P6ApoRc8k5+08z9Vntbj8slV666jTnU00Rw7EcKFJDqQtKljA3A8c5IHvr7UXLYwA7LI01tWpz3YwjpV/GDNNKdpkabHYUtKvsyC0dyeVbVgfvqAJqQ7eCe5nMixxu5A7COfpj1dbiFhVPqEmC46soagy1+Kw6oH5gCeRj31e2lq1dYrsTIPnzKvWNTGwNg+3iaTtLrmxUqQHJTSoUhKyhbQSVDIA5B9NZu//ABh0fFLgr9eDG9PVanTNqkH6Tz6va6ZlE+7DUmH3dr4dbAJUmUkfiXuPfz54A99XV0HBar+Z2y8DAt/iUFHbi/0hW4hhJYdS42nYcDbuC0jt6aYvVY1WQ0DFtQflJEYkORYVVipjJ2PQyFHZn8JI9f01D4dWwzN95MXPztT7QDhFuHWbWYCfC3qUy4SrjCkFJ0NarBSTyJYjBmUJwYb23daqbmUqaHp1JcEcOpwPFYA+ZvvlWAAo4HBxpPrdH8YpAHOMiO+n6r4OzJ5HYzQdGdp90xo8tHhPlIS4FoIJ58+PPWC336YlckTdlKNQA2AY3oVz062raaKVBTyEdu310eL/AJQScmDikBjjgTMt+dSVXBcdTq7TiJooLRcYBVlr7YoYaBPspST+utT0HS2eqdVYOwyMzMdd11bVfC1nOeDj/n8xQxUGrS4C35ClN0+nvSwtScuOrKh86sfxLJJ9hj01s3JDLtHb/mZiBhgS7d/aXcZ5qbdsJ0r+0KRJQ5tVnslwcflx6fTQ/wA1jMO3Mn8lYB7yVbEkSanMWGE7lNyF9ie6jqiwELy8uqb5uEEvmqkxRqHHRKT4ExbAfDqEALbb3FROB3UonA9gT6aZ1/hAOjcAdoNYyuSli8+8eVkVOTT6W4moVFpyW6tD625Lxa8Dey2oNpCeCkAjn1zo+t2CAkd+YHagLkFu0zrc0+dd1RqCXWNwgo8dho8oZY4Tg8c8EH3+g0vOnSv5U4Bh3rvZxYMkTr01Zm1RNMVy4ttTrBHfBSgjGCOOEjUaq6TQ6kzps1BdSo+0/m54Uqnszd+5tRkBnBIGApef3ONW4oSlDjvIn4g2OCe3+4FyaNJqVwQInhblpZW83xz3JSR9BpW4rALKfMKBtyFZYQ02VRnp1wt1CksR0PU4JjpWgF4LRvDu0443KG3jA/DuyDpYtNu9Cr55+0MFle1gy+P3gRaDs6BTW3IUyTBcGdqUOKCUnP4c/wC+jLaa7Rh1B/WLE1FtLZrYj9JOqdWuu5JDVNdrMl+VIOxDPi7Unj+JXfH5aHq0dW8LVWM/QQl9be4/EsOPqYdSaPbFt27UrUUFty4KmnGpqypK50hwJW66TjChhspS3nhLYPJPDQUWUuqnjyZTvretiD2kenQYzdt3DMUwoLXHZjMgrxtTvBxn9tE2LZ+YGDI9PI25nWzUKenuPsNlKGn1KJ2g4IdH+uhFUFmNhhJdgB6Il1ZVIkvsVmUEkKbjuDjHGSo/n5aFc1BhmE1+u4OIOraZnVdmmSkhaHGmg4pCuUNpQkk5H8IBP1xpgxUsmDx5gyqxDK458TV/SinUC7LbemVlMcVBEksLQ4k/IlCEBIGFDjbg/qdH3V3Wv6hOM9h9IDW2mrXYQWI7n6zOlVjTaQmA0GkNGrRXcyAMl5AJQlOOfmwR+nbvzTU62urE8EY/eFW1WVVnA5HP6iQ+jbMpM2O3vKN050kFeBykk/XnVumapVdSJS9d7srBsfvidbop71xdQ36Q3JBcY3unBOApRI3Z9kg/lkauvtDY2L2HA+p7SqurDFXcZz3lLIBhdXtsRQMZlKYaeeCnaoA/4aVakVooDDwIfT6rOdp8+8raqw4xV3fGSlwsPLltnJ/CVYWk45I4OR76rNanlDjiS3upxaMz5dPj0Sv1mnxtv2MKTJZSnlIS4nJCfYK3AaoXOMEwezaXJAxKSDHkTblYqSnTCpVLdTIlS1fKlpCTySfMkAgJ7nPbUqCfWUjxzKWwykGGNVlquu5oUgxleO+iVV1NKR8zbO1LEYKSOxCBnHqpWj7nN9oLNjJ/+S2sCtMKucS4mPrTZ9VAZSR47TQwj+XZqvUKu4BW+87XawUkoP4n5Q4Emm28iaUeGJjUiSAk4GQ8QODz/Dxqms1qj55lrrcxVl4+0tLXK26JW0l5KFLYTjccHsrJ/fQ5dUwdstSt3By2P3lXYNNjLuKoPzXm1CTCW0hCjw3t2cn9QFcfyaITUKlhcj8v3Mh8KzIBu79/oIwuktMeqNCqDr8xDTonrSoOL5JCEc+2e+iSLb/xGbGYIfRpPpqM48wprdjQm7gtpr7RIUzEkthltQbKU79yVcbPQJH/AGjRFbZrGR3MiWYWDB7ReWHYUJFWQ59qlqUuU6VZLfPyn+xq7TWFaziUXjdYMwjsWx4Ll3XpPU/JVIbyEEqThIHoNvt+51RZew1BhFWnRqyTFOq0ord5qdDz+4SmhyU/yj+z7nUNW2WaRoGMAT6pUhuO/AkIeeDijIYJyMbSD7d+BqF6h0TMnS7I7YkjqNV3qjAtJxaWkK+5CctoAOAUpCc99vy5x2BUojvpDp6xW1mPeGaqwuFJ9pRz4iEWvbMAE/ZqhUmRJTx/WA7Tzx7/ALDT81KNOhHnvAq7GDkCXtty3JdUv6c4QZCGW46SBgJbz+Ee2qKKU9Xt2l9uosNZOeZyqUx/+g8lBdUQ5KG7IHmUe2oXVIHzifJfYU2ky+vCOiPTKY02NraaUvAHlnJP7k6OQAac/pA7STcINUN1SfGb42mmhR+UDJyNBWnCLiF1KC5/SUlDC37xpVNU64IzlQQFBKsK7Jzz351C47UZh3ndP+JYtbHiaas5tFPaqSIyEsoXKDhSkcbiy0Tqiu6xlGTGF9Ndb4UT/9k=";

const shivAvatar =
  "data:image/jpeg;base64,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";

const testimonials = [
  {
    name: "Shivkumar Krishnan",
    designation: "Head of Engineering",
    company: "Gap Tech Inc",
    avatarUrl: shivAvatar,
    linkedInUrl: "",
    width: "1000px",
    description:
      "Jagadeesh was one of the key contributors in GE (APM- Analysis Team). He is a fast learner and quickly adapted to the new technology and team culture from the day he joined the team. Jagadeesh develops features quickly without compromising the quality and proactively took up many technical challenges and solved them with creative solutions. He doesn’t hesitate to take risks and is open to trying new opportunities that may not have a clear roadmap ahead. He has also mentored junior developers and interns in the team." +
      "Apart from his strong skills in feature delivery, Jagadeesh is also very passionate about innovation when presented with new opportunities such as multi modal interaction. He rapidly learnt the techniques to build Alexa Skills and Xbox Kinnect gesture controls and integrated with APM within few weeks and built a cool proof of concept that amazed the organization." +
      "Jagadeesh is very passionate, self-motivated and driven engineer who will be a great asset to any software organization."
  },
  {
    name: "Jim Defrisco",
    designation: "Senior Staff Software Developer",
    company: "ServiceNow",
    avatarUrl: jimAvatar,
    linkedInUrl: "",
    width: "700px",
    description:
      "Jagadeesh joined the APM Analysis team where I was the tech lead and had an immediate impact on the group’s productivity. He never balked at an assignment and in fact stepped up to do some side research on a new initiative around voice control of our interface. An eager learner, he quickly became one of the most valuable members of the staff. I thoroughly enjoyed working with him and hope our paths cross again."
  },
  {
    name: "Santhosh Muktha",
    designation: "Principal Engineer",
    company: "Oracle",
    avatarUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    linkedInUrl: "",
    width: "700px",
    description:
      '"SMAC" is the first word that comes to my mind when I think of Jagadeesh. Jagadeesh has outstanding Technical and Analytical skills, He had been working for four years in Cisco Capital Projects. \n' +
      "He is a self-starter, energy incubator of my team. A Full Stack developer, drives end-to-end conceptualization to delivery. Jagadeesh has passion and exceptional knowledge in UI / UX, System designing. Picksup latest technologies with ease and quick. \n" +
      "He is a go-getter and goto person for POCs. A dedicated person, goes an extra mile for making a difference. He led 'Team Hackathon' for our Org and made it. \n" +
      "As a good developer and leader, He earns my highest recommendation."
  }
];

const devSkills = [
  {
    title: (
      <>
        Front-End: <small>(Web Development)</small>
      </>
    ),
    keywords: [
      {
        label: "JavaScript",
        tooltip: "Experience with JavaScript",
        highlight: true
      },
      {
        label: "React",
        tooltip: "Experience with React",
        highlight: true
      },
      {
        label: "Redux",
        tooltip: "Experience with Redux",
        highlight: true
      },
      {
        label: "Angular",
        tooltip: "Experience with Angular & Angular.js",
        highlight: true
      },
      {
        label: "Web Components",
        tooltip: "Experience with Web Components",
        highlight: true
      },
      {
        label: "Polymer",
        tooltip: "Experience with Polymer"
      },
      {
        label: "Single Page Application",
        tooltip: "Experience with Single Page Application",
        highlight: true
      },
      {
        label: "Micro-FrontEnd Application",
        tooltip: "Experience with Micro-FrontEnd Application"
      },
      {
        label: "ES6",
        tooltip: "Experience with ES6",
        highlight: true
      },
      {
        label: "TypeScript",
        tooltip: "Experience with TypeScript",
        highlight: true
      },
      {
        label: "Predix UI Components",
        tooltip: "Experience with Predix UI Components"
      },
      {
        label: "Material UI",
        tooltip: "Experience with Material UI",
        highlight: true
      },
      {
        label: "Bootstrap",
        tooltip: "Experience with Bootstrap",
        highlight: true
      },
      {
        label: "Tailwind CSS",
        tooltip: "Experience with Tailwind CSS",
        highlight: true
      },
      {
        label: "Responsive Web Design",
        tooltip: "Experience with 'Responsive Web Design' Standards",
        highlight: true
      },
      {
        label: "Web Accessibility",
        tooltip: "Experience with 'Web Accessibility' Standards",
        highlight: true
      },
      {
        label: "jQuery",
        tooltip: "Experience with jQuery"
      },
      {
        label: "AJAX",
        tooltip: "Experience with AJAX"
      },
      {
        label: "HTML5",
        tooltip: "Experience with HTML5",
        highlight: true
      },
      {
        label: "CSS3",
        tooltip: "Experience with CSS3",
        highlight: true
      },
      {
        label: "SASS",
        tooltip: "Experience with SASS"
      }
    ]
  },
  {
    title: (
      <>
        Back-End: <small>(Node.js Development)</small>
      </>
    ),
    keywords: [
      {
        label: "MEAN Stack ",
        tooltip: "Experience with MEAN Stack (MongoDB, Express, Node.js, Angular.js, Node.js)",
        highlight: true
      },
      {
        label: "Node.js",
        tooltip: "Experience with Node.js",
        highlight: true
      },
      {
        label: "Express.js",
        tooltip: "Experience with Express.js",
        highlight: true
      },
      {
        label: "Bluebird (Promise)",
        tooltip: "Experience with Bluebird (Promise)"
      },
      {
        label: "Passportjs",
        tooltip: "Experience with Passportjs"
      },
      {
        label: "Helmetjs",
        tooltip: "Experience with Helmetjs"
      },
      {
        label: "Requestjs",
        tooltip: "Experience with Requestjs"
      },
      {
        label: "Mongoose",
        tooltip: "Experience with Mongoose"
      },
      {
        label: "RESTful API",
        tooltip: "Experience with Building and Consuming a RESTful API endpoints using Spring",
        highlight: true
      }
    ]
  },
  {
    title: (
      <>
        Back-End: <small>(Node.js Development)</small>
      </>
    ),
    keywords: [
      {
        label: "Java",
        tooltip: "Experience with Java",
        highlight: true
      },
      {
        label: "J2EE",
        tooltip: "Experience with J2EE"
      },
      {
        label: "Spring MVC",
        tooltip: "Experience with Spring MVC"
      },
      {
        label: "Spring Boot",
        tooltip: "Experience with Spring Boot",
        highlight: true
      },
      {
        label: "JSP",
        tooltip: "Experience with JSP"
      },
      {
        label: "Servlets",
        tooltip: "Experience with Servlets"
      },
      {
        label: "OOPS",
        tooltip: "Experience with OOPS",
        highlight: true
      },
      {
        label: "RESTful API",
        tooltip: "Experience with Building and Consuming a RESTful API endpoints using Spring",
        highlight: true
      },
      {
        label: "SOAP API",
        tooltip: "Experience with Building and Consuming SOAP API endpoints using Spring"
      },
      {
        label: "Webservices",
        tooltip: "Experience with Webservices"
      },
      {
        label: "JAX-WS",
        tooltip: "Experience with JAX-WS"
      },
      {
        label: "JPA",
        tooltip: "Experience with JPA"
      },
      {
        label: "Quartz Scheduler",
        tooltip: "Experience with Quartz Scheduler"
      }
    ]
  }
];

const otherSkills = [
  {
    title: "Cloud",
    keywords: [
      {
        label: "AWS",
        tooltip: "Experience with AWS (EC2, RDS, S3)",
        highlight: true
      },
      {
        label: "Cloud Foundry (Predix)",
        tooltip: "Experience with Cloud Foundry (Predix)"
      },
      {
        label: "Heroku",
        tooltip: "Experience with Heroku"
      },
      {
        label: "OpenShift",
        tooltip: "Experience with OpenShift"
      },
      {
        label: "IBM-Bluemix",
        tooltip: "Experience with IBM-Bluemix"
      }
    ]
  },
  {
    title: "Database",
    keywords: [
      {
        label: "NoSQL",
        tooltip: "Experience with NoSQL",
        highlight: true
      },
      {
        label: "MongoDB",
        tooltip: "Experience with MongoDB",
        highlight: true
      },
      {
        label: "Redis",
        tooltip: "Experience with Redis",
        highlight: true
      },
      {
        label: "SQL",
        tooltip: "Experience with SQL"
      },
      {
        label: "Oracle",
        tooltip: "Experience with Oracle"
      },
      {
        label: "MySQL",
        tooltip: "Experience with MySQL"
      }
    ]
  },
  {
    title: "Testing",
    keywords: [
      {
        label: "Mocha",
        tooltip: "Experience with Mocha",
        highlight: true
      },
      {
        label: "Karma",
        tooltip: "Experience with Karma"
      },
      {
        label: "Chai",
        tooltip: "Experience with Chai"
      },
      {
        label: "Sinon",
        tooltip: "Experience with Sinon"
      },
      {
        label: "Istanbul",
        tooltip: "Experience with Istanbul"
      },
      {
        label: "Protractor",
        tooltip: "Experience with Protractor",
        highlight: true
      },
      {
        label: "Cucumber",
        tooltip: "Experience with Cucumber"
      },
      {
        label: "Karate",
        tooltip: "Experience with Karate"
      }
    ]
  },
  {
    title: "Build Tools",
    keywords: [
      {
        label: "NPM",
        tooltip: "Experience with NPM"
      },
      {
        label: "Bower",
        tooltip: "Experience with Bower"
      },
      {
        label: "Gulp",
        tooltip: "Experience with Gulp"
      },
      {
        label: "Grunt",
        tooltip: "Experience with Grunt"
      },
      {
        label: "WebPack",
        tooltip: "Experience with WebPack"
      },
      {
        label: "DevOps",
        tooltip: "Experience with DevOps"
      },
      {
        label: "Jenkins",
        tooltip: "Experience with Jenkins"
      },
      {
        label: "CI / CD",
        tooltip: "Experience with CI / CD"
      },
      {
        label: "uDeploy",
        tooltip: "Experience with uDeploy"
      },
      {
        label: "HP Kintana",
        tooltip: "Experience with HP Kintana"
      }
    ]
  },
  {
    title: "Version Control System",
    keywords: [
      {
        label: "Git",
        tooltip: "Experience with Git",
        highlight: true
      },
      {
        label: "SVN",
        tooltip: "Experience with SVN"
      },
      {
        label: "CVS",
        tooltip: "Experience with CVS"
      }
    ]
  },
  {
    title: "Documentation",
    keywords: [
      {
        label: "Markdown",
        tooltip: "Experience with Markdown"
      },
      {
        label: "Swagger",
        tooltip: "Experience with Swagger"
      }
    ]
  }
];

const skills = {
  devSkills,
  otherSkills
};

const leadershipSkills = {
  scrumMaster: [
    {
      label: "Keeping all team members on track and clearing their blockers and other dependencies"
    },
    {
      label: "Actively monitoring the userstories, defects and clearing the backlogs."
    },
    {
      label:
        "Organizing the sprint planning with team members and product owners and ensuring the team’s deleiverables."
    },
    {
      label:
        "Constantly receiving feedbacks from team members during Sprint retrospective and work towards improvement."
    }
  ],
  teamLead: [
    {
      label: "Lead a team of 4 junior developers"
    },
    {
      label: "Collabrating with overseas team members"
    },
    {
      label: "Clear Communicator"
    },
    {
      label: "Delegating tasks to the right team members"
    },
    {
      label: "Proactively taking initiatives towards improvement"
    },
    {
      label: "Documenting the application design and common issues"
    },
    {
      label: "Constantly motivating the team members and other co-workers"
    }
  ],
  leader: [
    "Leading an Agile Software Product team, participate in team activities to develop customer-centric, sustainable, APIs",
    "Mentoring and guiding developers to build an architecturally sustainable codebase that delivers a high-quality experience",
    "Collaborating with Developers and Product Owners on the team to define, design, build and ship new features",
    "Desire to build sustainable solutions that span across projects and platforms keeping an eye towards simplicity, reusability, reliability, manageability, scalability and performance.",
    "Participating in hiring activities including screening and interviewing both Full-Time employees and contractor"
  ],
  keywords: [
    "Scrum Master",
    "Team Leader",
    "Strong sense of personal accountability",
    "Desire to contribute beyond job role and responsibilities",
    "Clear Communicator",
    "Collaborating with overseas team members",
    "Delegating tasks to the right team members",
    "Motivating the Team members",
    "Documenting the application design and common issues"
  ]
};

const achievementsGallery = [
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/4.jpg",
    width: 4,
    height: 4
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/1.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/6.jpg",
    width: 3,
    height: 2
  },

  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/3.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/7.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/2.jpg",
    width: 4,
    height: 3
  },
  {
    src: "http://jagadeeshpalaniappan.github.io/assets/img/jag/professional/5.jpg",
    width: 4,
    height: 2
  }
];

export {
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
};
