import AiMatchingSection from "@/components/Freelancer/Hero/Aieditor";
import GrowthSection from "@/components/Freelancer/Hero/BusinessGrowth";
import TrendingGigs from "@/components/Freelancer/Hero/GigsSection";
import Hero from "@/components/Freelancer/Hero/Hero";
import WhySection from "@/components/Freelancer/Hero/Homepage2";
import PopularServices from "@/components/Freelancer/Hero/PopularService";
import Suite from "@/components/Freelancer/Hero/Suite";
import Testimonials from "@/components/Freelancer/Hero/Testimonials";
import PaymentOptions from "@/components/Freelancer/Hero/WorkYourWay";

export default function () {
    return <>
        <Hero/>
        <TrendingGigs/>
        <AiMatchingSection/>
        <PopularServices/>
        <WhySection/>
        <GrowthSection/>
        <PaymentOptions/>
        <Suite/>
        <Testimonials/>
    </>
}