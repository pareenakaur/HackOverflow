import React from "react";
import PropTypes from "prop-types";
import { Row, Col, FormSelect, Card, CardHeader, CardBody, Button, CardFooter } from "shards-react";


import RangeDatePicker from "../common/RangeDatePicker";
import Chart from "../../utils/chart";

class UsersOverview extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      chartData: this.props.chartData, // Initialize chartData in the state
    };
  }

  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
            tension: 0.3
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: false,
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 7 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      },
      ...this.props.chartOptions
    };



    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.state.chartData,
      options: this.chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }

  // Add a function to handle the download of the PDF
  handleDownloadPdf = () => {
    const pdfUrl = "https://www.citigroup.com/rcs/citigpa/storage/public/2Q23-supp-web.pdf";

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

  handleFormSelectChange = (event) => {
    const selectedValue = event.target.value;
    let newChartData = { ...this.state.chartData }; 

    if (selectedValue === "today") {
      const newDataForDataset0 = [4893, 4113, 4941, 4157, 4910, 3834, 3671, 2819, 4874, 3732, 3230, 3569, 3471, 2771, 4224, 1671, 1554, 1834, 1719, 604, 224, 1084, 2021, 1774, 1299, 2183, 1381, 1578, 336, 1204]
      const newDataForDataset1 = [1288, 2063, 1697, 1392, 1220, 1795, 2354, 1832, 1373, 1897, 1292, 1001, 1857, 2200, 1568, 2717, 3084, 3190, 3735, 2635, 2978, 4115, 2717, 3423, 3266, 2766, 4221, 4313, 3632, 3296]

      newChartData.datasets[0].data = newDataForDataset0
      newChartData.datasets[1].data = newDataForDataset1

      this.setState({
        chartData: newChartData,
      });
      
      const BlogUsersOverview = new Chart(this.canvasRef.current, {
        type: "LineWithLine",
        data: newChartData,
        options: this.chartOptions
      });


      // Render the chart.
      BlogUsersOverview.render();



    }

    
  };

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="pt-0">
          <Row className="border-bottom py-2 bg-light">
            <Col sm="6" className="d-flex mb-2 mb-sm-0">
              <RangeDatePicker />
            </Col>

            <Col style={{
              textAlign: "right"
            }}>
              <FormSelect
                size="sm"
                value="last-week"
                style={{ maxWidth: "130px" }}
                onChange={this.handleFormSelectChange}
              >
                <option value="last-week">Last Week</option>
                <option value="today">Today</option>
                <option value="last-month">Last Month</option>
                <option value="last-year">Last Year</option>
              </FormSelect>
            </Col>
          </Row>
          <canvas
            height="120"
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
          <Row>
            <Col >

              <Button
                size="sm"
                className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
                onClick={this.handleDownloadPdf}
              
              >
                View Full Report &rarr;
              </Button>
            </Col>

          </Row>

        </CardBody>
      </Card>
    );
  }
}

UsersOverview.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart dataset.
   */
  chartData: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object
};

UsersOverview.defaultProps = {
  title: "Portfolio Performance",
  chartData: {
    labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
    datasets: [
      {
        label: "Current Month",
        fill: "start",
        data: [
          500,
          800,
          320,
          180,
          240,
          320,
          230,
          650,
          590,
          1200,
          750,
          940,
          1420,
          1200,
          960,
          1450,
          1820,
          2800,
          2102,
          1920,
          3920,
          3202,
          3140,
          2800,
          3200,
          3200,
          3400,
          2910,
          2500,
          2200
        ],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
      {
        label: "Past Month",
        fill: "start",
        data: [
          500,
          430,
          740,
          900,
          600,
          840,
          820,
          590,
          491,
          229,
          400,
          203,
          301,
          380,
          291,
          620,
          700,
          300,
          630,
          402,
          320,
          380,
          289,
          410,
          300,
          530,
          630,
          720,
          780,
          1200
        ],
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgba(255,65,105,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgba(255,65,105,1)",
        borderDash: [3, 3],
        borderWidth: 1,
        pointRadius: 0,
        pointHoverRadius: 2,
        pointBorderColor: "rgba(255,65,105,1)"
      }
    ]
  }
};

export default UsersOverview;
