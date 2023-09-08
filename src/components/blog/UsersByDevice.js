import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Button,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import Chart from "../../utils/chart";

class UsersByDevice extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  // Add a function to handle the download of the PDF
  handleDownloadPdf = () => {
    // Replace 'example.com/your-pdf-url' with the actual URL of the PDF you want to download
    const pdfUrl = "https://www.citigroup.com/rcs/citigpa/storage/public/2Q23-earnings-presentation.pdf";

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


  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
        <CardFooter className="border-top">
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

              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                onClick={this.handleDownloadPdf}
              >
                View Full Report &rarr;
              </Button>
            </Col>


            
          </Row>
    </CardFooter>
      </Card>
    );
  }
}

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

UsersByDevice.defaultProps = {
  title: "Portfolio breakdown ",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [25.6, 12.4, 17.5, 24.5,20],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.9)",
          "rgba(255,4,0,0.4)",
          "rgba(128,128,128,0.4)",
          "rgba(255,196,0,0.75)"
        ]
      }
    ],
    labels: ["$AMZN", "$CCL", "MC.PA", "TS:TLT", "REIT:VNQ"]
  }
};

export default UsersByDevice;
