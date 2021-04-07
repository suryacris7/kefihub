import React, { Component } from "react";
import Title from "./Title";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";

export default class Contact extends Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
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

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className="btn">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="contact-text">
            {`If you'll like to know more about our experience designing and delivering cloud solutions, or get advice on your own technology challenges get in touch. With dedicated engineers on-hand 24/7, we're set up to become an extension of your team.`}{" "}
            <br />
            <br />
            {"+91 8667291130"}
            <br />
            {"contactus@kefihub.in"}
            <br />
            <br />
            {"No: 64/1, Siruvanur Kandigai, Thirupachur Post, Thiruvallur"}
          </div>
        </div>
      </section>
    );
  }
}
