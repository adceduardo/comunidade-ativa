//Services
import { useState } from "react";

//Styles
import "./DashboardContent.css";

// Components
import { CardService } from "../CardService/CardService";
import { CustomButton } from "../CustomButtom/CustomButton";
import { DashboardHeader } from "./DashboardHeader/DashboardHeader";
import useEmblaCarousel from "embla-carousel-react";
import { CardDetails } from "../CardDetails/CardDetails";

export function DashBoardContent() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const [showCardDetails, setShowCardDetails] = useState(false);

  const cards = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="dashboard-container">
      {showCardDetails && (
        <div className="backdrop-blur">
          <CardDetails onClose={() => setShowCardDetails(false)} />
        </div>
      )}

      <DashboardHeader />
      <section>
        <h1 style={{ fontSize: "1.75rem" }}>
          Olá, fulano! O que você precisa hoje?{" "}
        </h1>
        <div className="service-categories">
          <CustomButton label={"Aulas particulares"} />
          <CustomButton label={"Beleza"} />
          <CustomButton label={"Aulas de múscia"} />
          <CustomButton label={"Aulas de múscia"} />
          <CustomButton label={"Aulas de múscia"} />
        </div>
        <div className="cards-container" ref={emblaRef}>
          <div className="cards-track">
            {cards.map((card) => (
              <CardService
                handleClickDetails={() => setShowCardDetails(!showCardDetails)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
