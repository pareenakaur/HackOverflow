import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

// Add a function to handle the download of the PDF
const handleDownloadPdf = () => {
  // Replace 'example.com/your-pdf-url' with the actual URL of the PDF you want to download
  const pdfUrl = "https://in.investing.com/analysis/top-trade-ideas-for-the-week-200444331"
  // Create a hidden anchor element to trigger the download
  const anchor = document.createElement("a");
  anchor.style.display = "none";
  anchor.href = pdfUrl;
  anchor.target = "_blank"; // Open in a new tab
  anchor.download = "report.pdf"; // Specify the desired file name

  // Trigger a click event on the anchor to start the download
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Upvote
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Downvote
                </Button>
                <Button theme="white">
                  <span className="text-light">
                    <i className="material-icons">more_vert</i>
                  </span>{" "}
                  Reply
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit" onClick={handleDownloadPdf}> 
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "(🔴 Live) Company Equity-Risk Discussions",
  discussions: [
    {
      id: 1,
      date: "2 days ago",
      author: {
        image: require("../../images/avatars/citi_employee_img.jpg"),
        name: "Mork (Citi Trader)",
        url: "https://www.linkedin.com/in/mark-zuckerberg-618bba58/"
      },
      post: {
        title: "GOLD ($XAU) potential SHORT RISK!!",
        url: "https://www.tradingview.com/chart/XAUUSD/jrpzRM6Z-Gold-price-analysis-today-will-gold-drop-to-1900/"
      },
      body: "We can observe that the strength of the US dollar and bond yields are major factors putting significant pressure on gold, causing it to decline and reach its lowest point in the past week...."
    },
    {
      id: 2,
      date: "3 days ago",
      author: {
        image: require("../../images/avatars/citi_country_officer.avif"),
        name: "Tibor Pandi (Citi CO)",
        url: "https://www.linkedin.com/in/tibor-p%C3%A1ndi-18536/?originalSubdomain=sg"
      },
      post: {
        title: "USD/CHF - Upside Momentum FX Trade Idea",
        url: "https://www.tradingview.com/chart/USDCHF/YeUoj0Rg-USD-CHF-Gains-Momentum-Amid-Positive-US-Data-and-Trade-Dev/"
      },
      body: "USD/CHF pair continues its ascent, trading in positive territory for the third consecutive day. A combination of factors, including encouraging US economic data and an extension of tariff exemptions in US-China trade relations, has contributed to the pair's recent momentum. I..."
    },
    {
      id: 3,
      date: "5 days ago",
      author: {
        image: require("../../images/avatars/adam_raham_img.jpg"),
        name: "Adam Rahman (Citi CA)",
        url: "https://www.linkedin.com/in/adam-rahman-5688289a?originalSubdomain=sg"
      },
      post: {
        title: "SHORT APPLE ($AAPL) Huge Market Risk",
        url: "https://www.tradingview.com/chart/AAPL/AhPAxW9s-APPLE-SHORT-NOW/"
      },
      body: "Disappointing earning resulted in Apple finally getting that retracement that's been long awaited and finally breaking a 210 day bullish demand line. Now there are three options to consider...."
    }
  ]
};

export default Discussions;
