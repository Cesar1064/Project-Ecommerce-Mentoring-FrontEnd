import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import "../assets/content/cardPhone.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CardPhone } from "../components/content/CardPhone";

interface CardPhoneProps {
  idPhone: number;
  name: string;
  brand: string;
  ram: string;
  rom: string;
  price: string;
  img: string;
}

export default {
  title: "Components/CardPhone",
  component: CardPhone,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} as Meta<typeof CardPhone>;

const Template: StoryFn<CardPhoneProps> = (args) => <CardPhone {...args} />;

export const Default = Template.bind({});
Default.args = {
  idPhone: 1,
  name: "iPhone 13 Rosa",
  brand: "APPLE",
  ram: "4GB",
  rom: "128GB",
  price: "4.165.000",
  img: "https://www.alkosto.com/medias/194252707432-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTUxNHxpbWFnZS93ZWJwfGFHUXlMMmcwWkM4eE5ETXhOak0yT1RjM01qVTNOQzh4T1RReU5USTNNRGMwTXpKZk1EQXhYemMxTUZkNE56VXdTQXxiODU4OTg5MmU2NGZhNDljNjc1ZDM4MWU3NTFmNjMxZjdmY2FiZDhlNTg0MmQ0MTg1MjAwMWRhMTMwMTIwMDE5",
};
