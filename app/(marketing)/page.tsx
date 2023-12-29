
import Image from "next/image";
import DesignPage from "./_components/design";
import { TextGenerateEffect } from "./_components/textGeneration";
import Logo from "./_components/logo";
import { SVGMaskEffectDemo } from "./_components/mask-effectdemo";
import { SparklesPreview } from "./_components/sparkles-preview";


const MarketingPage = () => {
    return ( 
        <div className="relative h-full w-full">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
        <Logo/>
        <DesignPage/>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
        </div>
    );
}

export default MarketingPage;