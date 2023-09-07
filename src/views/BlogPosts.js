/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/apple.png"),
          category: "Market Risk",
          categoryTheme: "gold",
          author: "Rohan Goswami",
          authorAvatar: require("../images/avatars/apple.png"),
          title: "Apple reportedly tests 3D printing to manufacture the new Apple Watch",
          body: `Apple, a global technology giant, is considering the adoption of 3D printing technology in the manufacturing of its next-generation Apple Watch...\n\nRisk Insights: Apple's experimentation with 3D printing for its smartwatch chassis production represents a strategic move to potentially reduce manufacturing time and material usage. Financial professionals should monitor the success of this technology integration and assess its impact on production costs and product quality.`,
          date: "31 August 2023"
        },
        {
          backgroundImage: require("../images/content-management/cococola.png"),
          category: "Liquidity Risk",
          categoryTheme: "warning",
          author: "Amelia Lucas",
          authorAvatar: require("../images/avatars/cococola_av.png"),
          title: "Coca Cola says its done raising prices in the US and Europe this year",
          body:
            `Coca-Cola, a global beverage giant, has recently announced a strategic decision that has garnered attention in both financial and consumer circles...\n\nRisk Insights: Weakening consumer demand and shifting preferences towards healthier alternatives like private label bottled water and juices pose a risk to both Coca-Cola and PepsiCo. Financial professionals should assess how these trends affect sales growth and market share for these beverage giants.
            `,
          date: "26 July 2023"
        },
        {
          backgroundImage: require("../images/content-management/morgan-stanley.png"),
          category: "Credit Risk",
          categoryTheme: "dark",
          author: "Lee Ying Shan",
          authorAvatar: require("../images/avatars/morgan-stanley_av.png"),
          
          title: " Morgan Stanley says China is ‘overinvested,’ but India’s the opposite",
          body:
            `Morgan Stanley, a prominent global financial institution, has drawn attention to an intriguing contrast in its recent analysis of two of the world's most significant emerging markets: China and India...\n\nRisk Insights: The risk premium for Chinese assets has increased due to geopolitical issues and a decline in nominal growth. Financial professionals should carefully evaluate their exposure to Chinese assets and consider sectors with pricing power, such as green technology and semiconductors, while keeping a close eye on economic indicators and geopolitical developments.
            `,
          date: "5 September 2023"
        },
        {
          backgroundImage: require("../images/content-management/disney.png"),
          category: "Strategic Risk",
          categoryTheme: "info",
          author: "Jeff Marks",
          authorAvatar: require("../images/avatars/disney_av.png"),
          title: "Club name Disney’s dispute with Charter is bad news for both companies",
          body:
            `Disney's ongoing dispute with Charter Communications has emerged as a significant development with potential repercussions for both companies...\n\nRisk Insights: The dispute highlights the complexity of content distribution agreements in the modern media landscape. Financial professionals should assess the impact of ongoing disputes on Disney's financial stability and consider diversifying their portfolios to mitigate potential risks associated with such disputes
            `,
          date: "5 September 2023"
        }

        
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/tesla.png"),
          category: "Market Risk",
          categoryTheme: "gold",
          author: "Lora Kolodny",
          authorAvatar: require("../images/avatars/tesla-av.png"),
          title:
            "Tesla shares close down 5% after price cuts, Model 3 refresh",
          body:
            `In a dynamic turn of events, Tesla, the electric vehicle (EV) pioneer, experienced a significant decline in its stock price, with shares closing down by 5% following a series of developments...\n\nRisk Insights: Tesla's recent reports of federal probes by the U.S. Securities and Exchange Commission and a Manhattan federal prosecutor introduce legal and regulatory risk. Financial professionals should monitor developments in these investigations and evaluate their potential impact on Tesla's stock price and corporate governance.
            `,
          date: "1 September 2023"
        },
        {
          backgroundImage: require("../images/content-management/arm.png"),
          category: "Market Risk",
          categoryTheme: "royal-blue",
          author: "Jordan Novet",
          authorAvatar: require("../images/avatars/arm-av.png"),
          title:
            "Apple, Google, Nvidia and other tech giants are considering buying Arm shares",
          body:
            `In a noteworthy development that could reshape the landscape of the semiconductor industry, several tech giants, including Apple, Google, and Nvidia, have expressed their willingness to explore the possibility of acquiring shares in Arm Limited...\n\nRisk Insights: If Apple successfully implements 3D printing technology across multiple product lines, it could enhance its competitive advantage. Financial professionals should keep an eye on developments in Apple's manufacturing capabilities and evaluate their potential impact on market positioning and profitability.`,
          date: "5 September 2023"
        }
      ],

      //REMOVE THIRD AND FOURTH
      PostsListThree: [
        {
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Had denoting properly jointure which well books beyond",
          body:
            "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Husbands ask repeated resolved but laughter debating",
          body:
            "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Instantly gentleman contained belonging exquisite now direction",
          body:
            "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
          date: "29 February 2019"
        }
      ],

      // Fourth list of posts.
      PostsListFour: [
        {
          backgroundImage: require("../images/content-management/7.jpeg"),
          author: "Alene Trenton",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Extremity so attending objection as engrossed",
          body:
            "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/8.jpeg"),
          author: "Chris Jamie",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Bed sincerity yet therefore forfeited his",
          body:
            "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/9.jpeg"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "Object remark lively all did feebly excuse our",
          body:
            "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/10.jpeg"),
          author: "Monica Jordan",
          authorUrl: "#",
          category: "News",
          categoryUrl: "#",
          title: "His followed carriage proposal entrance",
          body:
            "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
          date: "29 February 2019"
        }
      ]
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        
      </Container>
    );
  }
}

export default BlogPosts;
