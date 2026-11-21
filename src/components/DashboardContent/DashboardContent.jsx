//Styles
import "./DashboardContent.css"

// Components
import { CardService } from "../CardService/CardService"
import { CustomButton } from "../CustomButtom/CustomButton"
import { DashboardHeader } from "./DashboardHeader/DashboardHeader" 
import useEmblaCarousel from "embla-carousel-react"

export function DashBoardContent(){
    const [emblaRef] = useEmblaCarousel({
        align: 'start',
        dragFree: true
    })

    return (
        <div className="dashboard-container">
            <DashboardHeader />
            <h1 style={{fontSize: "var(--fs-xxl)", marginTop: "32px"}}>Olá, fulano! O que você precisa hoje? </h1>
            <div className="service-categories">
                <CustomButton label={"Aulas particulares"}/>
                <CustomButton label={"Beleza"}/>
                <CustomButton label={"Aulas de múscia"}/>
                <CustomButton label={"Aulas de múscia"}/>
                <CustomButton label={"Aulas de múscia"}/>
            </div>
            <div className="cards-container" ref={emblaRef}>
                <div className="cards-track">
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                </div>
            </div>
        </div>
    )
}