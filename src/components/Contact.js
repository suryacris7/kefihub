import React, { Component } from "react";
import Title from "./Title";
import { Form, Input, Button, Checkbox } from "antd";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import "antd/dist/antd.css";
import axios from "axios";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      open: false,
      load: false,
    };
  }

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({
      open: false,
    });
  };

  //"https://formspree.io/f/xpzkwvry",
  //https://getform.io/f/b22f10be-75a6-40c0-9ec6-3519dc38fe29
  onFinish = (values) => {
    this.setState({
      load: true,
    });

    axios
      .post("https://formspree.io/f/xpzkwvry", values, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        this.formRef.current.resetFields();
        this.setState({
          open: true,
          load: false,
        });
      })
      .catch((error) => {
        let formData = "";
        for (const [key, value] of Object.entries(values)) {
          formData = formData.concat(key, " : ", value, "\n");
        }
        this.setState({
          open: true,
          load: false,
        });
        window.open(
          `mailto:contactus@kefihub.in?subject=Response&body=` +
            encodeURIComponent(formData)
        );
      });
  };

  onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  render() {
    const layout = {
      wrapperCol: {
        span: 24,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };

    return (
      <section id="contact" className="section">
        <Title title={"Ping us!"} />
        <div className="contact-section">
          <div className="contact-form">
            <Form
              {...layout}
              name="KefihubContactForm"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              ref={this.formRef}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your name",
                  },
                ]}
              >
                <Input placeholder="Your name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email",
                  },
                ]}
              >
                <Input placeholder="Your email" />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Please input your subject",
                  },
                ]}
              >
                <Input placeholder="Subject" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please input your message",
                  },
                ]}
              >
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              <Snackbar
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
              >
                <Alert onClose={this.handleClose} severity="success">
                  Your responses has been recorded successfully !
                </Alert>
              </Snackbar>
              <Form.Item {...tailLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="btn"
                  loading={this.state.load}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="contact-text">
            <p>
              {`If you'll like to know more about our experience designing and delivering cloud solutions, or get advice on your own technology challenges get in touch. With dedicated engineers on-hand 24/7, we're set up to become an extension of your team.`}{" "}
              <br />
              <br />
              {"+91 8667291130"}
              <br />
              {"contactus@kefihub.in"}
              <br />
              {"No: 64/1, Siruvanur Kandigai, Thirupachur Post, Thiruvallur"}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
