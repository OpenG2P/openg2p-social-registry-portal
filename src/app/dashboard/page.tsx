"use client";

import React from "react";
import Card from "../components/card/Card";
import NestedCard from "../components/card/NestedCard";
import styles from "../styles/Dashboard.module.css";
import Layout from "../components/Layout/Layout";

import { FaUser, FaHome, FaFileAlt } from "react-icons/fa";
import { SidebarProvider } from "../context/SidebarContext";

const Dashboard = () => {
  const supportNestedCards = [
    {
      title: "Customer Service",
      imageSrc: "customer.png",
      buttonText: "Connect",
  
      onClick: () => alert("Phone Support clicked!"),
    },
    {
      title: "FAQs",
      imageSrc: "faq.png",
      buttonText: "Check",
      onClick: () => alert("FAQs clicked!"),
    },
    {
      title: "Send Message",
      imageSrc: "message.png",
      buttonText: "Send",
      onClick: () => alert("Send Message clicked!"),
    },
  ];

  const cards = [
    {
      title: "Individuals",
      Icon: FaUser,
      buttonText: "Add Individual Details >",
      background: "linear-gradient(to bottom, rgba(238,207,174,1) 0%, rgba(255,255,255,1) 60%)",
      onClick: () => alert("Individuals clicked!"),
    },
    {
      title: "Household",
      Icon: FaHome,
      buttonText: "Add Household Details >",
      background: "linear-gradient(to bottom, #c3e7ff 0%, rgba(255,255,255,1) 60%)",
      onClick: () => alert("Household clicked!"),
    },
    {
      title: "Documents",
      Icon: FaFileAlt,
      buttonText: "Upload Documents >",
      background: "linear-gradient(to bottom, rgb(167, 164, 164) 0%, rgba(255,255,255,1) 60%)",
      onClick: () => alert("Documents clicked!"),
    },
    {
      title: "Support",
      onClick: () => alert("Support clicked!"),
      nestedCards: supportNestedCards,
    },
  ];

  return (
    <SidebarProvider>
      <Layout>
        <div>
          <h1 className={styles.dashboardTitle}>My Dashboard</h1>
          <div className={styles.dashboard}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                Icon={card.Icon}
                buttonText={card.buttonText}
                background={card.background}
                onClick={card.onClick}
              >
                {card.nestedCards && (
                  <div className={styles.nestedCardsContainer}>
                    {card.nestedCards.map((nestedCard, nestedIndex) => (
                      <NestedCard
                        key={nestedIndex}
                        title={nestedCard.title}
                        imageSrc={nestedCard.imageSrc}
                        buttonText={nestedCard.buttonText}
                        onClick={nestedCard.onClick}
                      />
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    </SidebarProvider>
  );
};

export default Dashboard;
