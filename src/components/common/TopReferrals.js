import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter>
      <Row>
        
        <Col>
          <FormSelect
            size="sm"
            value="last-week"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </FormSelect>
        </Col>

        
        <Col className="text-right view-report">
         
          <a href="#">Full report &rarr;</a>
        </Col>
      </Row>
    </CardFooter> 
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Trending Low-Risk Equities",
  referralData: [
    {
      title: "Berkshire Hathaway",
      value: "BRK.A 0.05%"
    },
    {
      title: "The Walt Disney Company",
      value: "DIS -0.51%"
    },
    {
      title: "Vanguard High Dividend Yield ETF",
      value: "VYM -0.03%"
    },
    {
      title: "Proctor & Gamble",
      value: "0.95%"
    },
    {
      title: "Vanguard Real Estate Index Fund",
      value: "VNQ 0.63%"
    },
    {
      title: "Starbucks",
      value: "SBUX -0.89%"
    },
    {
      title: "Apple",
      value: "AAPL -2.92%"
    },
  ]
};

export default TopReferrals;
