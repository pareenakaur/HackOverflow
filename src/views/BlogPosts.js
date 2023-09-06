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
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/apple.png"),
          title: "Apple reportedly tests 3D printing to manufacture the new Apple Watch",
          body: `Apple, a global technology giant, is considering the adoption of 3D printing technology in the manufacturing of its next-generation Apple Watch. This decision stems from a drive to enhance production efficiency and potentially reduce costs. The company is currently in the testing phase, evaluating the feasibility and scalability of 3D printing in its manufacturing processes.\n\nNews of Apple's technology adoption can significantly influence market sentiment and impact the company's stock price. Positive sentiment can lead to increased investor confidence`,
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
            `Coca-Cola, a global beverage giant, has recently announced a strategic decision that has garnered attention in both financial and consumer circles. The company has declared its intention not to raise prices on its products in the United States and Europe for the remainder of the year.\n\nCoca-Cola operates in an intensely competitive market, where consumer preferences, economic factors, and industry rivals continually influence business strategies. The decision not to increase prices comes amidst a backdrop of economic uncertainties and shifting consumer behaviors.\n\nIf Coca-Cola has significant short-term debt obligations, maintaining profitability and cash flow is crucial to meet debt service requirements. A pricing strategy that squeezes profit margins may affect the company's ability to service its debt, potentially leading to liquidity challenges.
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
            `Morgan Stanley, a prominent global financial institution, has drawn attention to an intriguing contrast in its recent analysis of two of the world's most significant emerging markets: China and India. \n\nThe report suggests that China may be facing concerns of overinvestment, while India, on the other hand, is perceived as underinvested in terms of its economic potential.This observation reflects a complex interplay of economic, financial, and geopolitical factors shaping the investment landscape in these countries.\n\nThe underinvestment risk associated with India refers to the untapped potential and opportunities for investment in various sectors like technology, healthcare, and renewable energy. While there are growth prospects, investing in emerging markets like India carries its own set of risks, including regulatory, operational, and market risks
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
            `Disney's ongoing dispute with Charter Communications has emerged as a significant development with potential repercussions for both companies. The clash between these entertainment giants revolves around content distribution and pricing, shedding light on the challenges and complexities of the modern media landscape.\n\nDisney is navigating a transition from traditional cable distribution to its streaming platform, Disney+. While it seeks to maximize the value of its content portfolio, disruptions in traditional distribution agreements could affect short-term revenue and profitability. Disney may need to ensure that its streaming service is robust and attractive enough to offset any losses from traditional distribution.
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
            `In a dynamic turn of events, Tesla, the electric vehicle (EV) pioneer, experienced a significant decline in its stock price, with shares closing down by 5% following a series of developments. These developments include a strategic decision to reduce the prices of its electric cars and the announcement of a Model 3 refresh. This story offers insight into the ever-evolving landscape of the electric vehicle market and its implications for Tesla and its investors.\n\nTesla's stock price movements are often influenced by investor sentiment and expectations. Negative sentiment or concerns about the impact of pricing decisions can affect the stock's performance.
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
            `In a noteworthy development that could reshape the landscape of the semiconductor industry, several tech giants, including Apple, Google, and Nvidia, have expressed their willingness to explore the possibility of acquiring shares in Arm Limited. This news has sent ripples throughout the technology sector, with implications for the future of chip design, innovation, and competition.\n\nArm Limited, a British semiconductor and software design company, holds a pivotal role in the global technology ecosystem. It licenses its chip architecture and designs to a wide range of manufacturers, enabling the production of a vast array of devices, from smartphones to servers. The Arm architecture underpins the majority of the world's mobile devices, making it a linchpin of the tech industry.\n\nTechnology and Innovation Risk: Ownership and control of Arm Limited by major tech players could influence the direction of chip design and innovation. While it offers opportunities for innovation, it also introduces risks if strategic decisions do not align with industry trends or customer demands.`,
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
